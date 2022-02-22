import { createApp } from 'vue';
import { createRouter } from './router';
import { createHead } from '@vueuse/head';
import App from './App.vue';

import 'nprogress/nprogress.css';
import 'notyf/notyf.min.css';
import './scss/main.scss';

const router = createRouter();

const head = createHead();

const app = createApp(App);

app.use(head);

app.use(router);

app.mount('#app');
