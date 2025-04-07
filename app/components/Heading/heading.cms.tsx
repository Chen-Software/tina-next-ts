import { createElement as h } from "react";
import { H1, H2, H3, H4, H5, H6 } from ".";
import { TextBase } from "../Text/text.cms";

export type HeadingProps = {
	__typename: "PageBodyHeading";
	type?: string | null;
	key?: string;
	content?: string | null;
};

export const Heading = ({ __typename, type, ...props }: HeadingProps) => {
	return h(TextBase, {
		...(type && {
			as: {
				h1: H1,
				h2: H2,
				h3: H3,
				h4: H4,
				h5: H5,
				h6: H6,
			}[type || "h1"],
		}),
		...props,
	});
};
