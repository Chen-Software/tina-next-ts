import type { Template } from "tinacms";
import { button } from "../Button/button.template";

export const dialog: Template = {
	name: "dialog",
	label: "Dialog",
	fields: [
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
		{
			type: "object",
			label: "Close Button",
			name: "closeButton",
			templates: [button],
			description: "Button to close the dialog.",
		},
		{
			type: "boolean",
			label: "Lazy Mount",
			name: "lazyMount",
			description: "Mount the dialog only when it is open.",
			ui: {
				component: "toggle",
			},
		},
	],
};
