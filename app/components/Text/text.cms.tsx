import { createElement as h } from "react";
import { Text as TextPark } from ".";

export type TextBaseProps = {
	content?: string | null;
	advancedConfigs?: {
		accessibility?: {
			ariaLabel?: string | null;
			ariaLevel?: number | null;
		} | null;
		textEffects?: {
			textTransform?: string | null;
			textDecoration?: string | null;
			textOverflow?: string | null;
			wordWrap?: string | null;
			wordBreak?: string | null;
		} | null;
	} | null;
};

export type TextProps = {
	__typename: string;
	key?: string;
	type?: string | null;
	content?: string | null;
} & TextBaseProps;

export const Text = ({ __typename, type, ...props }: TextProps) => {
	return h(TextBase, {
		...(type && {
			as: {
				inline: "span",
				block: "div",
				label: "label",
			}[type],
		}),
		...props,
	});
};

export const TextBase = ({
	content,
	advancedConfigs,
	...props
}: TextBaseProps) => {
	const { accessibility, textEffects, ...advancedConfigurations } =
		advancedConfigs || {};
	const { textTransform, textDecoration, textOverflow, wordWrap, wordBreak } =
		textEffects || {};
	const styles = {};
	if (textTransform) {
		styles["--text-transform"] = textTransform;
	}
	if (textDecoration) {
		styles["--text-decoration"] = textDecoration;
	}
	if (textOverflow) {
		styles["--text-overflow"] = textOverflow;
	}
	if (wordWrap) {
		styles["--word-wrap"] = wordWrap;
	}
	if (wordBreak) {
		styles["--word-break"] = wordBreak;
	}

	return (
		<TextPark
			style={styles}
			{...(textTransform && { textTransform: "var(--text-transform)" })}
			{...(textDecoration && { textDecoration: "var(--text-decoration)" })}
			{...(textOverflow && { textOverflow: "var(--text-overflow)" })}
			{...(wordWrap && { wordWrap: "var(--word-wrap)" })}
			{...(wordBreak && { wordBreak: "var(--word-break)" })}
			{...{
				...(accessibility?.ariaLabel && {
					"aria-label": accessibility?.ariaLabel,
				}),
				...(accessibility?.ariaLevel && {
					role: "heading",
					"aria-level": accessibility?.ariaLevel,
				}),
			}}
			{...advancedConfigurations}
			{...props}
		>
			{content}
		</TextPark>
	);
};
