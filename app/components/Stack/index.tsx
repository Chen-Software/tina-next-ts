import { Stack as StackBase } from "styled-system/jsx";

export const Stack = ({ children, ...props }) => (
	<StackBase {...props}>{children}</StackBase>
);
