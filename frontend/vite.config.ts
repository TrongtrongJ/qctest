import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import ViteComponents from 'vite-plugin-components';
import ViteFonts from 'vite-plugin-fonts';
import PurgeIcons from 'vite-plugin-purge-icons';
import purgecss from 'rollup-plugin-purgecss';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			include: [ /\.vue$/ ]
		}),
		PurgeIcons(),
		Pages({
			pagesDir: [
				{
					dir: 'src/pages',
					baseRoute: ''
				}
			]
		}),
		ViteComponents({
			extensions: [ 'vue' ],
			dirs: [ 'src/components', 'src/layouts' ]
		}),
		ViteFonts({
			google: {
				families: [
					{
						name: 'Prompt',
						styles: 'wght@400;600;700;800;900'
					}
				]
			}
		}),
		purgecss({
			content: [ `./src/**/*.vue` ],
			variables: false,
			safelist: {
				standard: [
					/(autv|lnil|lnir|fas?)/,
					/-(leave|enter|appear)(|-(to|from|active))$/,
					/^(?!(|.*?:)cursor-move).+-move$/,
					/^router-link(|-exact)-active$/,
					/data-v-.*/
				]
			},
			defaultExtractor(content) {
				const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '');
				return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [];
			}
		})
	],
	root: process.cwd(),
	base: '/',
	resolve: {
		alias: [
			{
				find: '/~/',
				replacement: `/src/assets/`
			},
			{
				find: '@src/',
				replacement: `/src/`
			},
			{
				find: '@state',
				replacement: '/src/state'
			},
			{
				find: '@utils',
				replacement: '/src/utils'
			},
			{
				find: '@hooks',
				replacement: '/src/hooks'
			},
			{
				find: '@constants',
				replacement: '/src/constants'
			}
		]
	},
	build: {
		sourcemap: process.env.SOURCE_MAP === 'true'
	}
});
