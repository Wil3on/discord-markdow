module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			red: '#D43231',
			blue: {
				DEFAULT: '#7289da',
				light: '#32A098',
				dark: '#2E8AD2',
			},
			yellow: '#AE850A',
			orange: '#C14B1D',
			white: '#fff',
			dark: {
				DEFAULT: '#292B30',
				light: '#2F3136',
			},
			gray: {
				DEFAULT: '#C4C4C4',
				light: '#686B74',
				exlight: '#3A3B3E',
			},
			green: {
				DEFAULT: '#248000',
				light: '#839506',
			},
			navy: {
				DEFAULT: '#36393F',
				light: '#40444C',
			},
		},
		extend: {
			height: {
				content: 'max-content',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
	mode: 'jit',
}
