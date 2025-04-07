import { Text as TextBase } from ".";

export type TextProps = {
	__typename: string;
	key?: string;
	type?: string | null;
	content?: string | null;
	advancedConfigs?: {
		accessibility?: {
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

export const Text = ({
	__typename,
	type,
	content,
	advancedConfigs,
	...props
}: TextProps) => {
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
		<TextBase
			as={
				{
					inline: "span",
					block: "div",
				}[type || "inline"]
			}
			style={styles}
			{...(textTransform && { textTransform: "var(--text-transform)" })}
			{...(textDecoration && { textDecoration: "var(--text-decoration)" })}
			{...(textOverflow && { textOverflow: "var(--text-overflow)" })}
			{...(wordWrap && { wordWrap: "var(--word-wrap)" })}
			{...(wordBreak && { wordBreak: "var(--word-break)" })}
			{...(accessibility?.ariaLevel && { role: "heading" })}
			{...accessibility}
			{...advancedConfigurations}
			{...props}
		>
			{content}
		</TextBase>
	);
};
