/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: "15px",
			screens: {
				md: "750px",
				lg: "920px",
				xl: "1100px",
				"2xl": "1400px",
			},
		},

		screens: {
			sm: "640px",
			md: "768px",
			lg: "960px",
			xl: "1200px",
		},

		extend: {
			colors: {
				background: "#000",
				primary: {
					DEFAULT: "#2A2C39",
					hover:"#252734"
				},
				accent: {
					DEFAULT: "#858792"
				},
			},
			boxShadow: {
				glow: "0 0 10px rgba(192, 132, 252, 0.5)",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			fontFamily:{
				sans:["Roboto", "sans-serif"],
				serif:["Cormorant Garamond", "serif"]
			}
		},
	},
	plugins: [require("tailwindcss-animate")],
};