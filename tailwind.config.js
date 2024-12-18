const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		'./src/**/*.html',
		'./src/**/*.njk',
		'./src/**/*.md',
		'./src/_data/colors.js',
		'./src/_data/structure.js',
	],
	theme: {
		extend: {
			opacity: (theme) => ({
				5: '.05',
				10: '.1',
				15: '.15',
				20: '.2',
			}),
			// created my own heights so can specify for Heros
			height: (theme) => ({
				'1/2': '50vh',
				'3/4': '75vh',
				'8/10': '80vh',
				'9/10': '90vh',
				'1/1': '100vh',
				'1/3': 'calc(100vh / 3)',
				'1/4': 'calc(100vh / 4)',
				'1/5': 'calc(100vh / 5)',
				96: '24rem',
				128: '32rem',
			}),// created my own widths so can specify for Heros
			width: (theme) => ({
				'w1/4': '25vw',
				'w1/2': '50vw',
				'w2/3': '63vw',
				'w3/4': '75vw',
				'w9/10': '90vw',
				'w1/1': '100vw'
			}),
			colors: {
			  'firstColor': '#241e55',
			  'secondColor': '#C9393B',
			  'thirdColor': '#F6F6FB',
			},
			contrast: {
				93: '.93',
			  },
			scale: {
			'102': '1.02',
			}
		},
	},
	variants: {},
	plugins: [require('@tailwindcss/forms')],
}
