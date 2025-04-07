import type { Template } from "tinacms";
import { textEfects } from "./text.advancedConfigs.textEffects.field";
import { fontWeight } from "./text.fontWeight.field";
import { fontSize } from "./text.size.field";

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
			fields: [
				textEfects,
				{
					type: "object",
					label: "Accessibility",
					name: "accessibility",
					description: "Accessibility options for the text.",
					ui: {
						component: "group",
					},
					fields: [
						{
							type: "string",
							label: "Label (ARIA)",
							name: "ariaLabel",
							description:
								"Human readable label for the text, in event the text is not rendered.",
						},
						{
							type: "number",
							label: "Level (ARIA)",
							name: "ariaLevel",
							description:
								"The hierarchical level of the heading within a structure, when the text represents a heading. Levels increase with depth. The value is an integer greater than or equal to 1. Leave empty if the text is not a heading.",
						},
					],
				},
			],
		},
	],
	ui: {
		defaultItem: () => ({
			type: "inline",
			content: "Text Content",
		}),
	},
};
