import type { Template } from "tinacms";
import { accessibility } from "../Base/templates/base.advancedConfigs.accessibility.field";
import { textEfects } from "../Base/templates/base.advancedConfigs.textEffects.field";
import { fontWeight } from "./templates/text.fontWeight.field";
import { fontSize } from "./templates/text.size.field";

export const text: Template = {
	name: "text",
	label: "Text",
	fields: [
		{
			type: "string",
			label: "Type",
			name: "type",
			description: "Determines the raw HTML tag.",
			options: [
				{
					value: "inline",
					label: "Inline (<span>)",
				},
				{
					value: "block",
					label: "Block (<div>)",
				},
				{
					value: "label",
					label: "Label (<label>)",
				},
			],
		},
		{
			type: "string",
			label: "Content",
			name: "content",
			description: "Main content.",
		},
		fontSize,
		fontWeight,
		{
			type: "object",
			label: "Advanced Configurations",
			name: "advancedConfigs",
			description: "Additional configurations for the text.",
			ui: {
				component: "group",
			},
			fields: [textEfects, accessibility],
		},
	],
	ui: {
		defaultItem: () => ({
			type: "inline",
			content: "Text Content",
		}),
	},
};
