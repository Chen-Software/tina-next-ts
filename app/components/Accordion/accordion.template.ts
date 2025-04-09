import type { Template } from "tinacms";
import { accessibility } from "../Base/templates/base.advancedConfigs.accessibility.field";
import { textEfects } from "../Base/templates/base.advancedConfigs.textEffects.field";
import { text } from "../Text/text.template";

export const accordionItem: Template = {
	name: "accordionItem",
	label: "Item (Accordion)",
	fields: [
		{
			type: "string",
			label: "Value",
			name: "value",
			description: "Value.",
		},
		{
			type: "string",
			label: "Label (ARIA)",
			name: "ariaLabel",
			description:
				"Human readable label for the item, in the event the content is not rendered.",
		},
		{
			type: "object",
			label: "Content",
			name: "children",
			description: "Main content of the accordion item.",
			list: true,
			templates: [text],
			ui: {
				max: 1,
			},
		},
	],
};

export const accordion: Template = {
	name: "accordion",
	label: "Accordion",
	fields: [
		{
			type: "object",
			label: "Content",
			name: "children",
			description: "Main content inside the accordion.",
			list: true,
			templates: [accordionItem],
		},
		{
			type: "boolean",
			label: "Collapsible as a Whole",
			name: "collapsible",
			description: "Whether to allow the user to collapse all panels at once.",
		},
		{
			type: "boolean",
			label: "Multi-Expansion",
			name: "multiple",
			description:
				"Whether to allow multiple panels to be expanded simultaneously.",
		},
		{
			type: "string",
			label: "Orientation",
			name: "orientation",
			description: "The orientation of the toggle group.",
			options: [
				{
					value: "horizontal",
					label: "Horizontal",
				},
				{
					value: "vertical",
					label: "Vertical",
				},
			],
		},
		{
			type: "string",
			label: "Default Value",
			name: "defaultValue",
			description: "Which item should be expanded by default.",
		},
		{
			type: "object",
			label: "Advanced Configurations",
			name: "advancedConfigs",
			description: "Additional configurations for the accordion.",
			ui: {
				component: "group",
			},
			fields: [textEfects, accessibility],
		},
	],
	ui: {
		defaultItem: () => ({
			multiple: true,
			children: [
				{
					_template: "accordionItem",
					value: "x",
					children: [{ _template: "text", content: "X" }],
				},
				{
					_template: "accordionItem",
					value: "i",
					children: [{ _template: "text", content: "I" }],
				},
			],
		}),
	},
};

export const accordionDefaultItem =
	typeof accordion.ui?.defaultItem === "function" &&
	accordion.ui?.defaultItem();
