import type { Template } from "tinacms";

export const text: Template = {
	name: "text",
	label: "Text",
	fields: [
		{
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
		},
		{
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
		},
		{
			type: "string",
			label: "Content",
			name: "content",
			description: "Main content.",
		},
	],
};
