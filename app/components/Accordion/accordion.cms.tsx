import { createElement as h } from "react";
import { Accordion as AccordionBase } from ".";
import { Base } from "../Base/base.cms";
import { Text } from "../Text/text.cms";

export type AccordionItemProps = {
	[key: string]: unknown;
	value?: string | null;
	ariaLabel?: string | null;
	_template?: string | null;
	children?: ({ _template: string; content?: string | null } | null)[] | null;
};

export type AccordionProps = {
	__typename: string;
	key?: string;
	children?: (AccordionItemProps | null)[] | null;
};

export const Accordion = ({
	__typename,
	key,
	children,
	...props
}: AccordionProps) => {
	const content = children?.map((item: AccordionItemProps, i) => {
		console.log(item);
		const { _template, ...restOfProps } = item?.children?.[0] || {
			_template: "",
		};
		const children =
			_template === "text" &&
			h(Text, {
				key: `${key}-TglGrp-${i}-${item?.value}-text`,
				...restOfProps,
			});

		return h(
			AccordionBase.Item,
			{
				key: `${key}-TglGrp-${i}-${item?.value}`,
				value: item?.value,
				"aria-label": item?.ariaLabel,
			},
			children,
		);
	});
	return h(Base, {
		as: ({ children: c, ...props }) => h(AccordionBase.Root, props, content),
		...props,
	});
};
