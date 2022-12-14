export default {
	plugins: [],
	theme: {
		colors: {
			siteBg: "var(--site-bg)",
			bg: "var(--bg)",
			themeBorderColor: "var(--theme-border-color)",
			themeBorderColorSelected: "var(--theme-border-color-selected)",
			themeBorderColorHover: "var(--theme-border-color-hover)",
			panelBg: "var(--panel-bg)",
			textColor: "var(--text-color)",
			removeHover: "var(--remove-hover)",
			buttonHover: "var(--button-hover)"
		},
    	extend: {},
	},
  	purge: ["./index.html",'./src/**/*.{svelte,js,ts}'], // for unused CSS
  	variants: {
    	extend: {},
  	}
}
