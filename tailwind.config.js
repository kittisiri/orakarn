/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{html,js}'],
	theme: {
		extend: {
			height: {
				'screen-svh': '100svh',
			},

			fontFamily: {
				montserrat: ['Montserrat'],
				ruda: ['Ruda'],
				'source-code': ['Source Code Pro'],
				oswald: ['Oswald'],
			},
		},
	},
	plugins: [],
};
