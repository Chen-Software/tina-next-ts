import type { Template } from "tinacms";
import { button } from "../Button/button.template";
import { heading } from "../Heading/heading.template";
import { paragraph } from "../Text/paragraph.template";
import { text } from "../Text/text.template";

export const stack: Template = {
	name: "stack",
	label: "Stack",
	fields: [
		{
			type: "string",
			label: "Direction",
			name: "direction",
			description:
				"An alias for the css `flex-direction` property. Default is `column`.",
			options: [
				{
					value: "row",
					label: "Row",
				},
				{
					value: "row-reverse",
					label: "Row (Reverse Order)",
				},
				{
					value: "column",
					label: "Column",
				},
				{
					value: "column-reverse",
					label: "Column (Reverse Order)",
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
			type: "number",
			label: "Gap",
			name: "gap",
			description: "The gap between the elements in the stack.",
		},
		{
			type: "string",
			label: "Background Color",
			name: "backgroundColor",
			description: "The background color of the stack.",
		},
		{
			type: "image",
			label: "Background Image",
			name: "backgroundImage",
			description: "The background image of the stack.",
		},
		{
			type: "object",
			label: "Children",
			name: "children",
			list: true,
			templates: [button, heading, text, paragraph],
		},
	],
};
