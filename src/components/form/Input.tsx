import React from "react";
import type { FieldError } from "react-hook-form";

declare type CustomInputProps = {
	errorElement: React.ReactNode | string;
	error: FieldError | undefined;
};
declare type InputProps = CustomInputProps &
	React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{ type, placeholder, name, error, errorElement, ...restProps }: InputProps,
		ref,
	) => {
		return (
			<>
				<input
					type={type}
					placeholder={placeholder}
					name={name}
					ref={ref}
					className="col-span-2 w-full bg-transparent text-lg p-3 pb-1 border-b-2 border-primary italic"
					{...restProps}
				/>
				{error && (
					<p className="text-secondary text-sm pt-1 col-span-2">
						{errorElement}
					</p>
				)}
			</>
		);
	},
);
