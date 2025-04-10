import { Stack as StackBase } from "@chen/design-system/jsx";

export const Stack = ({ children, ...props }) => (
	<StackBase {...props}>{children}</StackBase>
);
