import type { TinaField } from "tinacms";

export const fontWeight: TinaField = {
	type: "string",
	label: "Font Weight",
	name: "fontWeight",
	description: "Text font weight.",
	options: [
		{
			value: "light",
			label: "Light",
		},
		{
			value: "normal",
			label: "Normal",
		},
		{
			value: "medium",
			label: "Medium",
		},
		{
			value: "semibold",
			label: "Semi-Bold",
		},
		{
			value: "bold",
			label: "Bold",
		},
	],
};
