import clsx from "clsx";
import firebase from "firebase";
import { useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";

type FormDataType = {
	name: string;
	email: string;
	university: string;
	grade: number;
	team: string;
	job: string;
};

export function HackathonForm() {
	const { register, handleSubmit, errors } = useForm<FormDataType>();
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

	function onSubmit(data: FormDataType) {
		console.log(data);
		firebase.database().ref("/applications/test").push(data, reply);
	}

	return (
		<form
			id="jelentkezes"
			onSubmit={handleSubmit(onSubmit)}
			className="grid grid-cols-2 w-full mb-16"
		>
			<input
				type="text"
				placeholder="Teljes név*"
				name="name"
				ref={register({ required: true, maxLength: 255 })}
				className="col-span-2 bg-transparent text-lg p-3 pb-1 border-b-2 border-primary italic"
			/>
			{errors.name && (
				<p className="text-secondary text-sm pt-1 col-span-2">
					Kérjük add meg a neved
				</p>
			)}

			<input
				type="text"
				placeholder="Email*"
				name="email"
				ref={register({
					required: true,
					pattern: /^\S+@\S+$/i,
					maxLength: 255,
				})}
				className="col-span-2 bg-transparent text-lg p-3 pb-1 border-b-2 border-primary italic"
			/>
			{errors.email && (
				<p className="text-secondary text-sm pt-1 col-span-2">
					Kérjük add meg az email címed
				</p>
			)}
			<div className="col-span-2 sm:col-span-1 sm:mr-2">
				<input
					type="text"
					placeholder="Egyetem*"
					name="university"
					ref={register({ required: true, maxLength: 255 })}
					className="bg-transparent text-lg p-3 pb-1 border-b-2 border-primary italic w-full"
				/>
				{errors.university && (
					<p className="text-secondary text-sm pt-1">
						Kérjük add meg melyik egyetemre jársz
					</p>
				)}
			</div>

			<div className="col-span-2 sm:col-span-1 sm:ml-2">
				<input
					type="number"
					placeholder="Évfolyam*"
					name="grade"
					ref={register({ required: true, min: 1 })}
					className="bg-transparent text-lg p-3 pb-1 border-b-2 border-primary italic w-full"
				/>
				{errors.grade && (
					<p className="text-secondary text-sm pt-1">
						Kérjük add meg hanyadik évfolyamos vagy
					</p>
				)}
			</div>

			<input
				type="text"
				placeholder="Csapatnév*"
				name="team"
				ref={register({ required: true, maxLength: 100 })}
				className="col-span-2 bg-transparent text-lg p-3 pb-1 border-b-2 border-primary italic"
			/>
			{errors.team && (
				<p className="text-secondary text-sm pt-1 col-span-2">
					Kérjük adj meg egy csapatnevet
				</p>
			)}

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
