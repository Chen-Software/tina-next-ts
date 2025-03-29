import React, { createElement as h } from "react";
import { Stack } from "styled-system/jsx";
import { FormLabel } from "../FormLabel";
import { Input, type InputProps } from "./input";

const InputComponent = React.forwardRef<InputProps>(
	({ id, label, ...props }, ref) => (
		<Stack ref={ref} gap="1.5" width="2xs">
			<FormLabel htmlFor={id}>{label}</FormLabel>
			<Input id={id} {...props} />
		</Stack>
	),
);
InputComponent.displayName = "Input";

export * from "./input";
export default InputComponent;
