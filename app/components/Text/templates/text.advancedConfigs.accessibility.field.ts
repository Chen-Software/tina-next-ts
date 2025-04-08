import type { TinaField } from "tinacms";

export const accessibility: TinaField = {
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
				"Human readable label for the text, in the event the text is not rendered.",
		},
		{
			type: "string",
			label: "Description (ARIA)",
			name: "ariaDescription",
			description:
				"Human readable context and information associated with the text, in the event a visible description is not rendered.",
		},
		{
			type: "number",
			label: "Level (ARIA)",
			name: "ariaLevel",
			description:
				"The hierarchical level of the heading within a structure, when the text represents a heading. Levels increase with depth. The value is an integer greater than or equal to 1. Leave empty if the text is not a heading.",
		},
	],
};
