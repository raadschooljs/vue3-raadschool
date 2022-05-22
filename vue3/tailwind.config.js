module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // daisyUI config (optional)
	daisyui: {
		styled: true,
		themes: true,
		base: true,
		utils: true,
		logs: true,
		// rtl: true,
		prefix: "",
		themes: [
			"light",
			"dark",
			{
				raad: {
					primary: "#7e22ce",
					secondary: "#059669",
					accent: "#fcd34d",
					neutral: "#57534e",
					"base-100": "#FFFFFF",
					info: "#fb923c",
					success: "#5eead4",
					warning: "#fcd34d",
					error: "#EA4034"
				}
			}
		]
		// darkTheme: "dark"
	}
}
