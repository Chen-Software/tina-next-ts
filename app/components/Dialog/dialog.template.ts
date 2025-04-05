import type { Template } from "tinacms";
import { button } from "../Button/button.template";

export const dialog: Template = {
	name: "dialog",
	label: "Dialog",
	fields: [
		{
			type: "string",
			label: "Variant",
			name: "variant",
			description: "Determines the look and feel of the dialog.",
			options: [
				{
					value: "solid",
					label: "Solid",
				},
				{
					value: "outline",
					label: "Outline",
				},
				{
					value: "ghost",
					label: "Ghost",
				},
				{
					value: "link",
					label: "Link",
				},
				{
					value: "subtle",
					label: "Subtle",
				},
			],
		},
		{
			type: "string",
			label: "Title",
			name: "title",
			description: "Title of the dialog.",
		},
		{
			type: "string",
			label: "Description",
			name: "description",
			description: "Main content of the dialog.",
		},
		{
			type: "object",
			label: "Trigger",
			name: "trigger",
			templates: [button],
			description: "Button to trigger the dialog.",
		},
		{
			type: "object",
			label: "Confirm Button",
			name: "confirmButton",
			templates: [button],
			description: "Button to confirm the action.",
		},
		{
			type: "object",
			label: "Cancel Button",
			name: "cancelButton",
			templates: [button],
			description: "Button to cancel the action.",
		},
	],
};
