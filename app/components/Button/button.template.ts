import type { Template } from "tinacms";

export const button: Template = {
	name: "button",
	label: "Button",
	fields: [
		{
			type: "string",
			label: "Variant",
			name: "variant",
			description: "Determines the look and feel of the button.",
			options: [
				{
					value: "solid",
					label: "Solid",
				},
				{
					value: "outline",
					label: "Outline",
				},
				{
					value: "ghost",
					label: "Ghost",
				},
				{
					value: "link",
					label: "Link",
				},
				{
					value: "subtle",
					label: "Subtle",
				},
			],
		},
		{
			type: "string",
			label: "Label",
			name: "label",
		},
		{
			type: "string",
			label: "Tooltip",
			name: "tooltip",
		},
	],
};
