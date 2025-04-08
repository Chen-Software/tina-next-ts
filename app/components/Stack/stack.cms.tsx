import { Stack as StackBase } from ".";
import { Button } from "../Button/button.cms";
import { Heading } from "../Heading/heading.cms";
import { Paragraph } from "../Text/paragraph.cms";
import { Text } from "../Text/text.cms";

export type StackProps = {
	__typename: string;
	key?: string;
	direction?: string | null;
	gap?: number | null;
	backgroundColor?: string | null;
	backgroundImage?: string | null;
	children?:
		| ({
				[k: string]: unknown | null;
				__typename: string;
		  } | null)[]
		| null;
};

export const Stack = ({
	__typename,
	direction,
	gap,
	children,
	backgroundColor,
	backgroundImage,
	...props
}: StackProps) => {
	const content = children?.map(
		(child: { __typename: string; [k: string]: unknown | null }, i) => {
			const typename = child?.__typename;
			switch (typename) {
				case "PageBodyStackChildrenHeading":
					return <Heading key={`-${i}-${typename}`} {...child} />;
				case "PageBodyStackChildrenText":
					return <Text key={`-${i}-${typename}`} {...child} />;
				case "PageBodyStackChildrenParagraph":
					return <Paragraph key={`-${i}-${typename}`} {...child} />;
				case "PageBodyStackChildrenButton":
					return <Button key={`-${i}-${typename}`} {...child} />;
			}
		},
	);

	const styles = {};
	if (backgroundColor) {
		styles["--background-color"] = backgroundColor;
	}
	if (backgroundImage) {
		styles["--background-image"] = `url(${backgroundImage})`;
	}

	return (
		<StackBase
			direction={direction}
			gap={gap}
			style={styles}
			{...(backgroundColor && { backgroundColor: "var(--background-color)" })}
			{...(backgroundImage && { backgroundImage: "var(--background-image)" })}
			{...props}
		>
			{content}
		</StackBase>
	);
};
