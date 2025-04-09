import { createElement as h } from "react";
import { ToggleGroup as ToggleGroupBase } from ".";
import { Base } from "../Base/base.cms";
import { Text } from "../Text/text.cms";

export type ToggleGroupItemProps = {
	[key: string]: unknown;
	value?: string | null;
	ariaLabel?: string | null;
	_template?: string | null;
	children?:
		| ({
				[key: string]: unknown;
				__typename?: string | null;
				_template?: string | null;
				content?: string | null;
		  } | null)[]
		| null;
};

export type ToggleGroupProps = {
	__typename: string;
	key?: string;
	children?: (ToggleGroupItemProps | null)[] | null;
};

export const ToggleGroup = ({
	__typename,
	key,
	children,
	...props
}: ToggleGroupProps) => {
	const content = children?.map((item: ToggleGroupItemProps, i) => {
		const { __typename } = item?.children?.[0] || { _template: "" };

		const children =
			[
				"PageBodyToggleGroupChildrenToggleGroupItemChildrenText",
				"PageBodyStackChildrenToggleGroupChildrenToggleGroupItemChildrenText",
			].includes(__typename || "") &&
			h(Text, {
				key: `${key}-TglGrp-${i}-${item?.value}-text`,
				content: item?.children?.[0]?.content || null,
			});

		return h(
			ToggleGroupBase.Item,
			{
				key: `${key}-TglGrp-${i}-${item?.value}`,
				value: item?.value,
				"aria-label": item?.ariaLabel,
			},
			children,
		);
	});
	return h(Base, {
		as: ({ children: c, defaultValue, ...props }) =>
			h(
				ToggleGroupBase.Root,
				{ defaultValue: [defaultValue], ...props },
				content,
			),
		...props,
	});
};
