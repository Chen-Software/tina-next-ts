import type { Template } from "tinacms";
import { accessibility } from "../Base/templates/base.advancedConfigs.accessibility.field";
import { textEfects } from "../Base/templates/base.advancedConfigs.textEffects.field";

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
		{
			type: "object",
			label: "Advanced Configurations",
			name: "advancedConfigs",
			description: "Additional configurations for the button.",
			ui: { component: "group" },
			fields: [textEfects, accessibility],
		},
	],
	ui: {
		defaultItem: () => ({
			variant: "solid",
			label: "Click Me",
		}),
	},
};

export const buttonDefaultItem =
	typeof button.ui?.defaultItem === "function" && button.ui?.defaultItem();
