import { createElement as h } from "react";
import { Button as ButtonBase } from ".";

export const Button = ({
	__typename,
	label,
	...props
}: {
	__typename: string;
	variant?: string | null | undefined;
	tooltip?: string | null | undefined;
	key?: string;
	label?: string | null | undefined;
}) => h(ButtonBase, props, label);
