import { Notyf } from 'notyf';

const themeColors = {
	success: '#06d6a0',
	info: '#039BE5',
	warning: '#faae42',
	danger: '#FF7273'
};

const notyf = new Notyf({
	duration: 4000,
	position: {
		x: 'right',
		y: 'bottom'
	},
	types: [
		{
			type: 'warning',
			background: themeColors.warning,
			icon: {
				className: 'fas fa-hand-paper',
				tagName: 'i',
				text: ''
			}
		},
		{
			type: 'info',
			background: themeColors.info,
			icon: {
				className: 'fas fa-info-circle',
				tagName: 'i',
				text: ''
			}
		}
	]
});

export function useNotyf() {
	return {
		success: (message: string) => {
			notyf.success(message);
		},
		error: (message: string) => {
			notyf.error(message);
		},
		info: (message: string) => {
			notyf.open({
				type: 'info',
				message
			});
		},
		warning: (message: string) => {
			notyf.open({
				type: 'warning',
				message
			});
		}
	};
}
