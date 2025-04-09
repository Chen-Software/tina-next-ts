import type { Template } from "tinacms";
import { accessibility } from "../Base/templates/base.advancedConfigs.accessibility.field";
import { textEfects } from "../Base/templates/base.advancedConfigs.textEffects.field";
import { button, buttonDefaultItem } from "../Button/button.template";
import { heading, headingDefaultItem } from "../Heading/heading.template";
import { paragraph, paragraphDefaultItem } from "../Text/paragraph.template";
import { text } from "../Text/text.template";
import { toggleGroup } from "../ToggleGroup/toggle-group.template";

export const stack: Template = {
	name: "stack",
	label: "Stack",
	fields: [
		{
			type: "object",
			label: "Content",
			name: "children",
			description: "Main content inside the stack.",
			list: true,
			templates: [button, toggleGroup, heading, text, paragraph],
		},
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
			label: "Align",
			name: "align",
			description: "An alias for the css `align-items` property.",
			options: [
				{
					value: "normal",
					label: "Normal",
				},
				{
					value: "stretch",
					label: "Stretch",
				},
				{
					value: "center",
					label: "Center",
				},
				{
					value: "flex-start",
					label: "Start of Stack",
				},
				{
					value: "flex-end",
					label: "End of Stack",
				},
				{
					value: "start",
					label: "Start of Each",
				},
				{
					value: "end",
					label: "End of Each",
				},
				{
					value: "baseline",
					label: "Baseline",
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
			label: "Justify",
			name: "justify",
			description: "An alias for the css `justify-content` property.",
			options: [
				{
					value: "flex-start",
					label: "Start of Stack",
				},
				{
					value: "flex-end",
					label: "End of Stack",
				},
				{
					value: "center",
					label: "Center",
				},
				{
					value: "space-between",
					label: "Space Between",
				},
				{
					value: "space-around",
					label: "Space Around",
				},
				{
					value: "space-evenly",
					label: "Space Evenly",
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
			type: "object",
			label: "Advanced Configurations",
			name: "advancedConfigs",
			description: "Additional configurations for the heading.",
			ui: {
				component: "group",
			},
			fields: [
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
				textEfects,
				accessibility,
			],
		},
	],
	ui: {
		defaultItem: () => ({
			children: [
				{ _template: "heading", ...headingDefaultItem },
				{ _template: "paragraph", ...paragraphDefaultItem },
				{ _template: "button", ...buttonDefaultItem },
			],
			direction: "column",
			gap: 1,
			align: "center",
		}),
	},
};
