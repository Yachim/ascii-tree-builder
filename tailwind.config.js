export default {
	plugins: [],
	theme: {
		colors: {
			siteBg: "#0b0a0f",
			bg: "#2c293d",
			panelBg: "#37334d",
			textColor: "#c6c2d6",
			borderColor: "#8d85ad",
			hoverRed: "#cc1010",
			buttonHover: "#706699"
		},
    	extend: {},
	},
  	purge: ["./index.html",'./src/**/*.{svelte,js,ts}'], // for unused CSS
  	variants: {
    	extend: {},
  	},
  	darkMode: false, // or 'media' or 'class'
}
