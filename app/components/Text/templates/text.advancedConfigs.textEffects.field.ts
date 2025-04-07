import type { TinaField } from "tinacms";

export const textEfects: TinaField = {
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
			description: "How the text is displayed when it overflows its container.",
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
};
