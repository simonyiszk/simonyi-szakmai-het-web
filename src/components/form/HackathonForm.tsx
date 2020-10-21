import clsx from "clsx";
import firebase from "firebase";
import React from "react";
import { useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";

import { Input } from "./Input";

type FormValuesType = {
	name: string;
	email: string;
	university: string;
	grade: number;
	team: string;
	job: string;
};

export function HackathonForm(): JSX.Element {
	const [isTeamInputSeleted, setTeamInputSelected] = React.useState<boolean>(
		false,
	);
	const { register, handleSubmit, errors } = useForm<FormValuesType>();
	const { addToast } = useToasts();

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
		console.log(data);
		firebase.database().ref("/applications/test").push(data, reply);
	}

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
				colSpan="2"
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
				error={errors.name}
				colSpan="2"
				errorElement="Kérjük add meg az email címed"
				onSelect={(e) => {
					setTeamInputSelected(false);
				}}
			/>

			<Input
				type="text"
				placeholder="Csapatnév*"
				name="team"
				ref={register({ required: true, maxLength: 100 })}
				error={errors.name}
				colSpan="2"
				errorElement="Kérjük adj meg egy csapatnevet"
				onSelect={(e) => {
					setTeamInputSelected(true);
				}}
			/>

			<div
				className={clsx(
					"col-span-2 p-3 pb-1",
					isTeamInputSeleted ? "" : "hidden",
				)}
			>
				<select className="" name="teamNames" ref={register({})} id="teamNames">
					<option value="">Új megadása</option>
					<option value="asd1">asd1</option>
					<option value="asd2">asd2</option>
				</select>
			</div>

			<div className="col-span-2 sm:col-span-1 sm:mr-2">
				<Input
					type="text"
					placeholder="Egyetem"
					name="university"
					ref={register({ required: false, maxLength: 255 })}
					error={errors.name}
					colSpan="2"
					errorElement="Kérjük add meg melyik egyetemre jársz"
				/>
			</div>

			<div className="col-span-2 sm:col-span-1 sm:ml-2">
				<Input
					type="number"
					placeholder="Melyik évben kezdted az egyetemet"
					name="grade"
					ref={register({ required: false, min: 1900, max: 2020 })}
					error={errors.name}
					colSpan="2"
					errorElement="Kérjük add meg melyik évben kezdted az egyetemet"
				/>
			</div>

			<input
				type="text"
				placeholder="Munkakör*"
				name="job"
				ref={register({ required: true, maxLength: 100 })}
				className="col-span-2 bg-transparent text-lg p-3 pb-1 border-b-2 border-primary italic"
			/>
			{errors.job && (
				<p className="text-secondary text-sm pt-1 col-span-2">
					Kérjük add meg a munkaköröd
				</p>
			)}

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
