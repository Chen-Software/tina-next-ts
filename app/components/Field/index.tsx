import React, { createElement as h } from "react";
import { Field } from "./field";

const FieldBase = React.forwardRef<Field.RootProps>(
	(
		{
			children,
			label,
			placeholder,
			helperText = undefined,
			errorText = undefined,
			...props
		},
		ref,
	) => {
		return (
			<Field.Root ref={ref} {...props}>
				<Field.Label>{label}</Field.Label>
				{children}
				{helperText && <Field.HelperText>{helperText}</Field.HelperText>}
				{errorText && <Field.ErrorText>{errorText}</Field.ErrorText>}
			</Field.Root>
		);
	},
);

FieldBase.displayName = "Field";

export const InputField = ({ multiLine = false, placeholder, ...props }) => (
	<FieldBase {...props}>
		{h(multiLine ? Field.Textarea : Field.Input, {
			placeholder,
		})}
	</FieldBase>
);

export const TextField = InputField;

export const SelectField = ({ options, ...props }) => (
	<FieldBase {...props}>
		<Field.Select>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</Field.Select>
	</FieldBase>
);

export type FieldProps = Field.RootProps;
export * from "./field";
export default InputField;
