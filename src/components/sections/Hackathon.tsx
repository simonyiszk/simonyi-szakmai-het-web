import { HackathonForm } from "components/form/HackathonForm";
import React from "react";

export function Hackathon(): JSX.Element {
	return (
		<div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
			<div>
				<h2
					className="font-bold text-primary text-4xl"
					style={{ lineHeight: "1.5rem", marginLeft: "-1px" }}
				>
					Hackathon
				</h2>
				<p
					className="border-l-8 border-primary p-4 pb-16 text-lg relative"
					style={{
						borderLeftWidth: "7px",
					}}
				>
					A Hackathon részvevőinek a célja, hogy megoldást kínáljanak a
					partnereink által nyújtott problémákra. A rendezvény során a
					versenyzők <strong>4-5 fős csapatokat</strong> alkotva, a
					partnereinkkel együttműködve keltik életre ötleteiket.
					<br />
					<br />
					Ha érdekel a versenyzés és szeretnétek megmutatni, hogy a ti
					csapatotok tudja a legjobban eladni az ötletét,{" "}
					<strong>jelentkezzetek 11.08-ig.</strong> További részletek hamarosan.
					<span
						className="rounded-full w-32 h-32 absolute transform rotate-45 -z-1"
						style={{
							background:
								"linear-gradient(90deg, #7D2742 0%, #732741 9.41%, #50283E 48.05%, #3A293D 79.62%, #32293C 100%)",
							top: "5rem",
							right: "5rem",
						}}
					/>
					<span
						className="rounded-full w-48 h-48 absolute transform rotate-90 -z-1"
						style={{
							background:
								"linear-gradient(90deg, #7D2742 0%, #732741 9.41%, #50283E 48.05%, #3A293D 79.62%, #32293C 100%)",
							top: 0,
							right: 0,
						}}
					/>
				</p>
			</div>
			<HackathonForm />
		</div>
	);
}
