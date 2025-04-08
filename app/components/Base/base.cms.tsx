import type { JSXElement } from "react";

export type BaseProps = {
	__typename: string;
	as?: JSXElement | string | null;
	content?: string | null;
	advancedConfigs?: {
		accessibility?: {
			ariaLabel?: string | null;
			ariaDescription?: string | null;
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

export const Base = ({ as, content, advancedConfigs, ...props }: BaseProps) => {
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

	const Comp = as;

	return (
		<Comp
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
				...(accessibility?.ariaDescription && {
					"aria-description": accessibility?.ariaDescription,
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
		</Comp>
	);
};
