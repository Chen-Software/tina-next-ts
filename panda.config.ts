import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	presets: ['@shadow-panda/preset'],

	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ["./app/**/*.{js,jsx,ts,tsx}"],

	// Files to exclude
	exclude: [],

	// Use React
	jsxFramework: "react",

	// Useful for theme customization
	theme: {
		extend: {},
	},

	// The output directory for your css system
	outdir: "styled-system",
});
