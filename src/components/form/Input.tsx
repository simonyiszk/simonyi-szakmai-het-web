import clsx from "clsx";
import type { FieldError } from "react-hook-form";

declare type InputProps = {
	colSpan: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
	errorElement: React.ReactNode | string;
	error: FieldError | undefined;
};
export function Input({
	name,
	colSpan,
	error,
	errorElement,
	type,
	placeholder,
	ref,
	...restProps
}: InputProps &
	React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	>): JSX.Element {
	return (
		<>
			<input
				type={type}
				placeholder={placeholder}
				name={name}
				ref={ref}
				className={clsx(
					`col-span-${colSpan}`,
					"w-full bg-transparent text-lg p-3 pb-1 border-b-2 border-primary italic",
				)}
				{...restProps}
			/>
			{error && (
				<p className="text-secondary text-sm pt-1 col-span-2">{errorElement}</p>
			)}
		</>
	);
}
