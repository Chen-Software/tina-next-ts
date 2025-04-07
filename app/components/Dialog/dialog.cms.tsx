import { createElement as h } from "react";
import { Dialog as DialogBase } from ".";
import { Button, type ButtonProps } from "../Button/button.cms";

export type DialogProps = {
	__typename: "PageBodyDialog";
	key?: string;
	title?: string | null;
	description?: string | null;
	confirmButton?: ButtonProps | null;
	cancelButton?: ButtonProps | null;
	closeButton?: ButtonProps | null;
	trigger?: ButtonProps | null;
	advancedConfigs?: {
		defaultOpen?: boolean | null;
		lazyMount?: boolean | null;
		unmountOnExit?: boolean | null;
		accessibility?: {
			ariaLabel?: string | null;
		} | null;
	} | null;
};

export const Dialog = ({
	__typename,
	confirmButton,
	cancelButton,
	closeButton,
	trigger,
	advancedConfigs,
	...props
}: DialogProps) => {
	const { accessibility, ...advancedConfigurations } = advancedConfigs || {};

	return h(DialogBase, {
		confirmButton: confirmButton && h(Button, confirmButton),
		cancelButton: cancelButton && h(Button, cancelButton),
		closeButton: closeButton && h(Button, closeButton),
		trigger: trigger && h(Button, trigger),
		...accessibility,
		...advancedConfigurations,
		...props,
	});
};
