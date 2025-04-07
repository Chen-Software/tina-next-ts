import { createElement as h } from "react";
import { Dialog as DialogBase } from ".";
import { Button } from "../Button/button.cms";

export const Dialog = ({
	__typename,
	confirmButton,
	cancelButton,
	closeButton,
	trigger,
	...props
}) => {
	return h(DialogBase, {
		confirmButton: confirmButton && h(Button, confirmButton),
		cancelButton: cancelButton && h(Button, cancelButton),
		closeButton: closeButton && h(Button, closeButton),
		trigger: trigger && h(Button, trigger),
		...props,
	});
};
