import { createElement as h } from "react";
import { Dialog as DialogBase } from ".";
import { Button, type ButtonProps } from "../Button/button.cms";

export type DialogProps = {
	__typename: "PageBodyDialog";
	title?: string | null | undefined;
	description?: string | null | undefined;
	confirmButton?: ButtonProps;
	cancelButton?: ButtonProps;
	closeButton?: ButtonProps;
	trigger?: ButtonProps;
	advancedConfigs?: {
		defaultOpen?: boolean | null | undefined;
		lazyMount?: boolean | null | undefined;
		unmountOnExit?: boolean | null | undefined;
		accessibility?: {
			ariaLabel?: string | null | undefined;
		};
	};
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
