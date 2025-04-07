import { createElement as h } from "react";
import { Button as ButtonBase } from ".";

export type ButtonProps = {
	__typename: string;
	variant?: string | null | undefined;
	tooltip?: string | null | undefined;
	key?: string;
	label?: string | null | undefined;
};

export const Button = ({ __typename, label, ...props }: ButtonProps) =>
	h(ButtonBase, props, label);
