import type { Template } from "tinacms";

export const heading: Template = {
	name: "heading",
	label: "Heading",
	fields: [
		{
			type: "string",
			label: "Type",
			name: "type",
			options: [
				{
					value: "h1",
					label: "Heading 1",
				},
				{
					value: "h2",
					label: "Heading 2",
				},
				{
					value: "h3",
					label: "Heading 3",
				},
				{
					value: "h4",
					label: "Heading 4",
				},
				{
					value: "h5",
					label: "Heading 5",
				},
				{
					value: "h6",
					label: "Heading 6",
				},
			],
		},
		{
			type: "string",
			label: "Content",
			name: "content",
			description: "Main content.",
		},
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
			type: "object",
			label: "Advanced Configurations",
			name: "advancedConfigs",
			description: "Additional configurations for the heading.",
			ui: {
				component: "group",
			},
			fields: [
				{
					type: "object",
					label: "Accessibility",
					name: "accessibility",
					description: "Accessibility options for the heading.",
					ui: {
						component: "group",
					},
					fields: [
						{
							type: "number",
							label: "Level (ARIA)",
							name: "ariaLevel",
							description:
								"The hierarchical level of the heading within a structure. Levels increase with depth. The value is an integer greater than or equal to 1.",
						},
					],
				},
			],
		},
	],
	ui: {
		defaultItem: () => ({
			type: "h1",
			content: "Heading 1",
		}),
	},
};
