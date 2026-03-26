/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
	extend: {},
	screens: {
		xs: "340px",
		sm: "640px",
		md: "768px",
		lg: "1024px",
		"2xl": "1536px",
	},
	borderWidth: {
		1: "1px",
		0: "0px",
		2: "2px",
	},
};

import tailwindcssStyleTypography from "tailwindcss-style-typography";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export const plugins = [tailwindcssStyleTypography];
