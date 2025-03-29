import React from "react";
import { Field } from "./field";

const FieldComponent = React.forwardRef<Field.RootProps>(
	({ ...props }, ref) => {
		return (
			<Field.Root ref={ref} {...props}>
				<Field.Label>Label</Field.Label>
				<Field.Input placeholder="Placeholder" />
				<Field.HelperText>Some additional Info</Field.HelperText>
			</Field.Root>
		);
	},
);

FieldComponent.displayName = "Field";

export type FieldProps = Field.RootProps;
export * from "./field";
export default FieldComponent;
