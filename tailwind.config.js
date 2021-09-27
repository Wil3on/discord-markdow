module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			blue: '#7289da',
			while: '#fff',
			dark: {
				DEFAULT: '#292B30',
				light: '#2F3136',
			},
			gray: {
				DEFAULT: '#C4C4C4',
				light: '#686B74',
			},
			green: '#248000',
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
