import { createElement as h } from "react";
import { Paragraph as ParagraphBase } from ".";
import { TextBase } from "./text.cms";

export type ParagraphProps = {
	__typename: string;
	key?: string;
	content?: string | null;
};

export const Paragraph = ({ __typename, ...props }: ParagraphProps) => {
	return h(TextBase, {
		as: ParagraphBase,
		...props,
	});
};
