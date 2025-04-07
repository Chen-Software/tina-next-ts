import type { TinaField } from "tinacms";

export const fontSize: TinaField = {
	type: "string",
	label: "Font Size",
	name: "size",
	description:
		"Text font size. It makes line height and spacing smaller as text size grows and also ensures text size is even for better layout.",
	options: [
		{
			value: "xs",
			label: "Extra Small",
		},
		{
			value: "sm",
			label: "Small",
		},
		{
			value: "md",
			label: "Medium",
		},
		{
			value: "lg",
			label: "Large",
		},
		{
			value: "xl",
			label: "Extra Large",
		},
		{
			value: "2xl",
			label: "2 Extra Large",
		},
		{
			value: "3xl",
			label: "3 Extra Large",
		},
		{
			value: "4xl",
			label: "4 Extra Large",
		},
		{
			value: "5xl",
			label: "5 Extra Large",
		},
		{
			value: "6xl",
			label: "6 Extra Large",
		},
		{
			value: "7xl",
			label: "7 Extra Large",
		},
	],
};
