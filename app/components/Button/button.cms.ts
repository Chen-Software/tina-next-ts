import { createElement as h } from "react";
import { Button as ButtonBase } from ".";
import { Base } from "../Base/base.cms";

export type ButtonProps = {
	__typename: string;
	variant?: string | null | undefined;
	tooltip?: string | null | undefined;
	key?: string;
	label?: string | null | undefined;
};

export const Button = ({ __typename, label, ...props }: ButtonProps) =>
	h(Base, {
		as: ({ children, ...restOfProps }) => h(ButtonBase, restOfProps, children),
		content: label,
		...props,
	});
