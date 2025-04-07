import type { Template } from "tinacms";

export const text: Template = {
	name: "text",
	label: "Text",
	fields: [
		{
			type: "string",
			label: "Type",
			name: "type",
			options: [
				{
					value: "inline",
					label: "Inline",
				},
				{
					value: "block",
					label: "Block",
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
			description: "Additional configurations for the text.",
			ui: {
				component: "group",
			},
			fields: [
				{
					type: "object",
					label: "Text Effects",
					name: "textEffects",
					description: "Text effects for the text.",
					ui: {
						component: "group",
					},
					fields: [
						// {
						// 	type: "string",
						// 	label: "Text Color",
						// 	name: "textColor",
						// 	description:
						// 		"How the text is colored.",
						// 	options: [
						// 		{
						// 			value: "transparent",
						// 			label: "Transparent",
						// 		},
						// 		{
						// 			value: "inherit",
						// 			label: "Inherit",
						// 		},
						// 		{
						// 			value: "initial",
						// 			label: "Initial",
						// 		},
						// 	],
						// },
						{
							type: "string",
							label: "Text Transform",
							name: "textTransform",
							description: "How the text is displayed in terms of case.",
							options: [
								{
									value: "none",
									label: "None",
								},
								{
									value: "capitalize",
									label: "Capitalize",
								},
								{
									value: "uppercase",
									label: "Uppercase",
								},
								{
									value: "lowercase",
									label: "Lowercase",
								},
								{
									value: "initial",
									label: "Initial",
								},
								{
									value: "inherit",
									label: "Inherit",
								},
							],
						},
						{
							type: "string",
							label: "Text Decoration",
							name: "textDecoration",
							description:
								"How the text is decorated, like underline, overline, line-through, etc…",
							options: [
								{
									value: "underline",
									label: "Underline",
								},
								{
									value: "overline",
									label: "Overline",
								},
								{
									value: "line-through",
									label: "Line Through",
								},
								{
									value: "none",
									label: "None",
								},
							],
						},
						// {
						// 	type: "string",
						// 	label: "Text Shadow",
						// 	name: "textShadow",
						// 	description: "The shadow effect added to text",
						// 	options: [
						// 		{
						// 			value: "none",
						// 			label: "None",
						// 		},
						// 		{
						// 			value: "small",
						// 			label: "Small",
						// 		},
						// 		{
						// 			value: "medium",
						// 			label: "Medium",
						// 		},
						// 		{
						// 			value: "large",
						// 			label: "Large",
						// 		},
						// 		{
						// 			value: "extra-large",
						// 			label: "Extra Large",
						// 		},
						// 	],
						// },
						{
							type: "string",
							label: "Text Overflow",
							name: "textOverflow",
							description:
								"How the text is displayed when it overflows its container.",
							options: [
								{
									value: "clip",
									label: "Clip",
								},
								{
									value: "ellipsis",
									label: "Ellipsis",
								},
								{
									value: "string",
									label: "String",
								},
								{
									value: "initial",
									label: "Initial",
								},
								{
									value: "inherit",
									label: "Inherit",
								},
							],
						},
						{
							type: "string",
							label: "Word Wrap",
							name: "wordWrap",
							description: "How the text is wrapped.",
							options: [
								{
									value: "normal",
									label: "Normal",
								},
								{
									value: "break-word",
									label: "Break Word",
								},
								{
									value: "initial",
									label: "Initial",
								},
								{
									value: "inherit",
									label: "Inherit",
								},
							],
						},
						{
							type: "string",
							label: "Word Break",
							name: "wordBreak",
							description: "How the text is broken.",
							options: [
								{
									value: "normal",
									label: "Normal",
								},
								{
									value: "break-all",
									label: "Break All",
								},
								{
									value: "keep-all",
									label: "Keep All",
								},
								{
									value: "break-word",
									label: "Break Word",
								},
								{
									value: "initial",
									label: "Initial",
								},
								{
									value: "inherit",
									label: "Inherit",
								},
							],
						},
						// {
						// 	type: "string",
						// 	label: "Writing Mode",
						// 	name: "writingMode",
						// 	description: "How the text is written.",
						// 	options: [
						// 		{
						// 			value: "horizontal-tb",
						// 			label: "Horizontal TB",
						// 		},
						// 		{
						// 			value: "vertical-rl",
						// 			label: "Vertical RL",
						// 		},
						// 		{
						// 			value: "vertical-lr",
						// 			label: "Vertical LR",
						// 		},
						// 	],
						// },
					],
				},
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
