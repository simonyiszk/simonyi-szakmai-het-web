import { useForm } from "react-hook-form";

export function HackathonForm() {
	const { register, handleSubmit, watch, errors } = useForm();
	const onSubmit = (data: any) => console.log(data);
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="grid grid-cols-2 w-full mb-16"
		>
			<input
				type="text"
				placeholder="Teljes név"
				name="Name"
				ref={register({ required: true, maxLength: 255 })}
				className="col-span-2 bg-transparent text-lg p-3 pb-1 border-b-2 border-primary italic"
			/>
			<input
				type="text"
				placeholder="Email"
				name="Email"
				ref={register({ required: true, pattern: /^\S+@\S+$/i })}
				className="col-span-2 bg-transparent text-lg p-3 pb-1 border-b-2 border-primary italic"
			/>
			<input
				type="text"
				placeholder="Egyetem"
				name="University"
				ref={register({ required: true, maxLength: 255 })}
				className="col-span-1 bg-transparent text-lg p-3 pb-1 border-b-2 border-primary italic mr-2"
			/>
			<input
				type="number"
				placeholder="Évfolyam"
				name="Grade"
				ref={register({ required: true })}
				className="col-span-1 bg-transparent text-lg p-3 pb-1 border-b-2 border-primary italic ml-2"
			/>
			<input
				type="text"
				placeholder="Csapatnév"
				name="Team"
				ref={register({ required: true, maxLength: 100 })}
				className="col-span-2 bg-transparent text-lg p-3 pb-1 border-b-2 border-primary italic"
			/>
			<input
				type="text"
				placeholder="Munkakör"
				name="Job"
				ref={register({ required: true, maxLength: 100 })}
				className="col-span-2 bg-transparent text-lg p-3 pb-1 border-b-2 border-primary italic"
			/>
			<button
				type="submit"
				className="col-span-2 p-4 border-2 border-primary mt-4 bg-secondary text-xl"
			>
				Jelentkezés
			</button>
		</form>
	);
}
