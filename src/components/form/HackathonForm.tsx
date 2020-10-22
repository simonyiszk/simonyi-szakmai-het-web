import "firebase/database";

import clsx from "clsx";
import * as firebase from "firebase/app";
import * as React from "react";
import { useForm } from "react-hook-form";
import type { Styles } from "react-select";
import CreatableSelect from "react-select/creatable";
import { useToasts } from "react-toast-notifications";

import { Input } from "./Input";

type FormValuesType = {
	name: string;
	email: string;
	team: string;
	isStudent: boolean;
	university?: string;
	startYear?: number;
	major?: string;
};

export function HackathonForm(): JSX.Element {
	const [onlineTeamNames, setOnlineTeamNames] = React.useState<
		Array<{ value: string; label: string }>
	>();
	const [isStudent, toggleIsStudent] = React.useState<boolean>(false);

	const { register, handleSubmit, errors, setValue, getValues } = useForm<
		FormValuesType
	>();
	const { addToast } = useToasts();

	React.useEffect(() => {
		const tempTeamNames: Array<{ value: string; label: string }> = [];
		firebase
			.database()
			.ref("/applications/test")
			.on("value", (snapshot) => {
				snapshot.forEach((element) => {
					const tempTeamName = element.val().team;
					if (
						typeof tempTeamName === "string" &&
						!tempTeamNames.includes({
							value: tempTeamName,
							label: tempTeamName,
						})
					)
						tempTeamNames.push({ value: tempTeamName, label: tempTeamName });
				});
				// console.log(tempTeamNames);
				setOnlineTeamNames(tempTeamNames);
			});
		return () => {};
	}, []);

	React.useEffect(() => {
		register("team");
		return () => {};
	}, [register]);

	function reply(error: Error | null) {
		if (error) {
			addToast(<p className="text-xl">{error.message}</p>, {
				appearance: "error",
			});
		} else {
			addToast(<p className="text-xl">Sikeres jelentkezés!</p>, {
				appearance: "success",
			});
		}
	}

	function onSubmit(data: FormValuesType) {
		// console.log(data);
		firebase.database().ref("/applications/test").push(data, reply);
	}

	const selectStyle: Partial<Styles> = {
		control: (provided) => ({
			...provided,
			backgroundColor: "transparent",
			border: "none",
		}),
		singleValue: (provided) => ({
			...provided,
			color: "#e5e5e5",
		}),
		input: (provided) => ({
			...provided,
			color: "#e5e5e5",
		}),
		menuList: (provided) => ({
			...provided,
			backgroundColor: "#32293C",
		}),
		option: (provided, state) => {
			const color = "#e5e5e5";
			const backgroundColor = state.isFocused ? "#ED3A3C" : "#32293C";
			return { ...provided, color, backgroundColor };
		},
		placeholder: (provided) => ({
			...provided,
			color: "#a0aec0",
		}),
	};

	return (
		<form
			id="jelentkezes"
			onSubmit={handleSubmit(onSubmit)}
			className="grid grid-cols-2 w-full mb-16"
		>
			<Input
				type="text"
				placeholder="Teljes név*"
				name="name"
				ref={register({ required: true, maxLength: 255 })}
				error={errors.name}
				errorElement="Kérjük add meg a teljes neved"
			/>

			<Input
				type="text"
				placeholder="Email*"
				name="email"
				ref={register({
					required: true,
					pattern: /^\S+@\S+$/i,
					maxLength: 255,
				})}
				error={errors.email}
				errorElement="Kérjük add meg az email címed"
			/>

			<CreatableSelect
				isClearable
				options={onlineTeamNames}
				placeholder="Csapatnév*"
				styles={selectStyle}
				className="col-span-2 w-full bg-transparent mt-3 mb-1 text-lg border-b-2 border-primary italic"
				onChange={(e) => {
					if (e)
						// @ts-expect-error -- Retarded React-Select
						setValue("team", e.value);
				}}
			/>
			{getValues("team") === "" && (
				<p className="text-secondary text-sm pt-1 col-span-2">
					Kérjük adj meg egy csapatnevet
				</p>
			)}

			<label
				htmlFor="isStudentCheckbox"
				className={clsx(
					"col-span-2 p-3 pb-1 border-b-2 border-primary italic text-lg cursor-pointer",
					isStudent ? "sm:col-span-1 sm:mr-2" : "sm:col-span-2 sm:mr-0",
				)}
			>
				<input
					type="checkbox"
					name="isStudent"
					id="isStudentCheckbox"
					ref={register({ required: false })}
					className="bg-transparent p-3 cursor-pointer"
					onChange={(e) => {
						toggleIsStudent(e.target.checked);
					}}
					checked={isStudent}
				/>
				<span className="pl-3">Egyetemista vagyok</span>
			</label>

			<div
				className={clsx(
					"col-span-2 sm:col-span-1 sm:ml-2",
					isStudent ? "" : "hidden",
				)}
			>
				<Input
					type="text"
					placeholder="Egyetem"
					name="university"
					ref={register({ required: false, maxLength: 255 })}
					error={errors.university}
					errorElement="Rossz formátum"
				/>
			</div>

			<div
				className={clsx(
					"col-span-2 sm:col-span-1 sm:mr-2",
					isStudent ? "" : "hidden",
				)}
			>
				<Input
					type="number"
					placeholder="Kezdés éve"
					name="startYear"
					ref={register({ required: false, min: 1900, max: 2020 })}
					error={errors.startYear}
					errorElement="Rossz formátum"
				/>
			</div>

			<div
				className={clsx(
					"col-span-2 sm:col-span-1 sm:ml-2",
					isStudent ? "" : "hidden",
				)}
			>
				<Input
					type="text"
					placeholder="Szak"
					name="major"
					ref={register({ required: false, maxLength: 255 })}
					error={errors.major}
					errorElement="Rossz formátum"
				/>
			</div>

			<button
				type="submit"
				className={clsx(
					"col-span-2 p-1 border-2 border-primary mt-4",
					"animatedButton",
				)}
			>
				<div className={clsx("p-4 w-full bg-secondary text-xl")}>
					Jelentkezés
				</div>
			</button>
		</form>
	);
}
