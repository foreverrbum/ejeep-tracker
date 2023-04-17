/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./App.tsx', './pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				blue: {
					light: '#85A7F2',
					dark: '#446DC9'
				},
				gray: {
					black: '#383C4B',
					dark: '#595C68',
					medium: '#CBCEDA',
					light: '#F0F2F8'
				},
				green: '#53B46D',
				line: {
					a: '#EAB95A',
					b: '#8F7D40'
				}
			}
		}
	},
	plugins: []
}
