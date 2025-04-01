import { Tooltip } from "../Tooltip";
import { Button as ButtonBase, type ButtonProps } from "./button";

export const Button = ({ tooltip, children, ...props }: ButtonProps) => {
	if (tooltip) {
		return (
			<Tooltip
				trigger={<ButtonBase {...props}>{children}</ButtonBase>}
				content={tooltip}
			/>
		);
	}

	return <ButtonBase {...props}>{children}</ButtonBase>;
};

export * from "./button";
