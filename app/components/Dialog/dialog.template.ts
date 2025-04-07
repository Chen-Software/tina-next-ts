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
			description: "Button to trigger the dialog.",
			ui: {
				component: "group",
			},
			fields: [...button.fields],
		},
		{
			type: "object",
			label: "Confirm Button",
			name: "confirmButton",
			description: "Button to confirm the action.",
			ui: {
				component: "group",
			},
			fields: [...button.fields],
		},
		{
			type: "object",
			label: "Cancel Button",
			name: "cancelButton",
			description: "Button to cancel the action.",
			ui: {
				component: "group",
			},
			fields: [...button.fields],
		},
		{
			type: "object",
			label: "Close Button",
			name: "closeButton",
			description: "Button to close the dialog.",
			ui: {
				component: "group",
			},
			fields: [...button.fields],
		},
		{
			type: "object",
			label: "Advanced Configurations",
			name: "advancedConfigs",
			description: "Additional configurations for the dialog.",
			ui: {
				component: "group",
			},
			fields: [
				{
					type: "boolean",
					label: "Default Open",
					name: "defaultOpen",
					description: "The initial open state of the dialog when rendered.",
					ui: {
						component: "toggle",
					},
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
				{
					type: "object",
					label: "Accessibility",
					name: "accessibility",
					description: "Accessibility options for the dialog.",
					ui: {
						component: "group",
					},
					fields: [
						{
							type: "string",
							label: "Label (ARIA)",
							name: "ariaLabel",
							description:
								"Human readable label for the dialog, in event the dialog title is not rendered.",
						},
					],
				},
			],
		},
	],
};
