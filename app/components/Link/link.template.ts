import type { Template } from "tinacms";
import { accessibility } from "../Text/templates/text.advancedConfigs.accessibility.field";
import { textEfects } from "../Text/templates/text.advancedConfigs.textEffects.field";
import { fontWeight } from "../Text/templates/text.fontWeight.field";
import { fontSize } from "../Text/templates/text.size.field";

export const link: Template = {
	name: "link",
	label: "Link",
	fields: [
		{
			type: "string",
			label: "Type",
			name: "type",
			options: [
				{
					value: "a",
					label: "Anchor (<a>)",
				},
				{
					value: "button",
					label: "Button (<button>)",
				},
			],
		},
		{
			type: "string",
			label: "Label",
			name: "label",
			description: "Text label for the link.",
		},
		{
			type: "string",
			label: "Target",
			name: "target",
			description: "Where to open the linked document.",
			options: [
				{
					value: "_blank",
					label: "New Window (Tab)",
				},
				{
					value: "_self",
					label: "Same Window (Tab)",
				},
				{
					value: "_parent",
					label: "Parent Window (Tab)",
				},
				{
					value: "_top",
					label: "Body of the Window (Tab)",
				},
			],
		},
		fontSize,
		fontWeight,
		{
			type: "object",
			label: "Advanced Configurations",
			name: "advancedConfigs",
			description: "Additional configurations for the link.",
			ui: {
				component: "group",
			},
			fields: [textEfects, accessibility],
		},
	],
	ui: {
		defaultItem: () => ({
			type: "a",
			label: "Go to…",
		}),
	},
};
