import { Stack as StackBase } from ".";
import { Base } from "../Base/base.cms";
import { Button } from "../Button/button.cms";
import { Heading } from "../Heading/heading.cms";
import { Paragraph } from "../Text/paragraph.cms";
import { Text } from "../Text/text.cms";
import { ToggleGroup } from "../ToggleGroup/toggle-group.cms";

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
	advancedConfigs?: {
		backgroundColor?: string | null;
		backgroundImage?: string | null;
	} | null;
};

export const Stack = ({
	__typename,
	direction = "column",
	children,
	advancedConfigs,
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
				case "PageBodyStackChildrenToggleGroup":
					return <ToggleGroup key={`-${i}-${typename}`} {...child} />;
			}
		},
	);

	const { backgroundColor, backgroundImage, ...advancedConfigurations } =
		advancedConfigs || {};
	const styles = {};
	if (backgroundColor) {
		styles["--background-color"] = backgroundColor;
	}
	if (backgroundImage) {
		styles["--background-image"] = `url(${backgroundImage})`;
	}

	return (
		<Base
			as={({ style, ...p }) => (
				<StackBase
					direction={direction}
					aria-orientation={
						direction?.startsWith("column") ? "vertical" : "horizontal"
					}
					style={{ ...style, ...styles }}
					{...(backgroundColor && {
						backgroundColor: "var(--background-color)",
					})}
					{...(backgroundImage && {
						backgroundImage: "var(--background-image)",
					})}
					{...p}
				>
					{content}
				</StackBase>
			)}
			advancedConfigs={advancedConfigurations}
			__typename={__typename}
			{...props}
		/>
	);
};
