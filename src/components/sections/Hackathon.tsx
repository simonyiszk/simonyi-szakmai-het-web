import { HackathonForm } from "components/form/HackathonForm";
import React from "react";

import Sicontact from "../../assets/logos/sicontact.svg";

export function Hackathon(): JSX.Element {
	return (
		<div>
			<div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
				<div>
					<h2
						className="font-bold text-primary text-4xl sm:leading-6"
						style={{ marginLeft: "-1px" }}
					>
						Hackathon 11.13.&#8209;11.15.
					</h2>
					<p
						className="border-l-8 border-primary p-4 pb-16 text-lg relative"
						style={{
							borderLeftWidth: "7px",
						}}
					>
						A Hackathon részvevőinek a célja, hogy megoldást kínáljanak a
						partnereink által nyújtott problémákra. A rendezvény során a
						versenyzők csapatokat alkotva keltik életre ötleteiket.
						<br />
						<br />
						Ha érdekel a versenyzés és szeretnéd megmutatni, hogy a te ötleted a
						legjobb mind közül, jelentkezz egyénileg vagy legfeljebb 5 fős
						csapatban.
						<br />
						A rendezvény előtt lehetőséget biztosítunk a csapatformálásra.
						<br />
						<br />
						Jelentkezési határidő: <strong>11.08.</strong>
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
			<div className="w-full mt-16">
				<h2
					className="font-bold text-primary text-4xl sm:leading-6"
					style={{ marginLeft: "-1px" }}
				>
					Nyeremény
				</h2>
				<p
					className="border-l-8 border-primary p-4 pb-16 text-lg flex md:justify-center"
					style={{
						borderLeftWidth: "7px",
					}}
				>
					I. helyezés: 50.000Ft értékű BestByte utalvány
					<br />
					II. helyezés: 15.000Ft értékű szabaduló szoba utalvány
					<br />
					III. helyezés: Sicontact ajándékcsomag
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
			<div className="w-full mt-16">
				<h2
					className="font-bold text-primary text-4xl sm:leading-6"
					style={{ marginLeft: "-1px" }}
				>
					Programterv
				</h2>
				<p
					className="border-l-8 border-primary p-4 pb-16 text-lg flex md:justify-center"
					style={{
						borderLeftWidth: "7px",
					}}
				>
					<div>
						<div>
							<div className="font-bold text-primary text-xl md:text-2xl sm:leading-6">
								11.13. (péntek)
							</div>
							<div className="grid w-full grid-cols-1 md:grid-cols-tablelg lg:gap-12 my-4">
								<div className="font-bold lg:font-normal">14:00 - 14:30</div>
								<div>Megnyitó</div>
							</div>
							<div className="grid w-full grid-cols-1 md:grid-cols-tablelg lg:gap-12 my-4">
								<div className="font-bold lg:font-normal">14:30 - </div>
								<div>Verseny</div>
							</div>
						</div>

						<div>
							<div className="font-bold text-primary text-xl md:text-2xl sm:leading-6">
								11.14. (szombat)
							</div>
							<div className="grid w-full grid-cols-1 md:grid-cols-tablelg lg:gap-12 my-4">
								<div className="font-bold lg:font-normal">egész nap</div>
								<div>Verseny</div>
							</div>
						</div>

						<div>
							<div className="font-bold text-primary text-xl md:text-2xl sm:leading-6">
								11.15. (vasárnap)
							</div>
							<div className="grid w-full grid-cols-1 md:grid-cols-tablelg lg:gap-12 my-4">
								<div className="font-bold lg:font-normal pl-12">- 12:00</div>
								<div>Verseny</div>
							</div>
							<div className="grid w-full grid-cols-1 md:grid-cols-tablelg lg:gap-12 my-4">
								<div className="font-bold lg:font-normal">12:30 - 14:00</div>
								<div>Pitch</div>
							</div>
							<div className="grid w-full grid-cols-1 md:grid-cols-tablelg lg:gap-12 my-4">
								<div className="font-bold lg:font-normal">14:30 - </div>
								<div>Eredményhirdetés</div>
							</div>
						</div>
					</div>
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
			<div className="w-full mt-16">
				<h2
					className="font-bold text-primary text-4xl sm:leading-6"
					style={{ marginLeft: "-1px" }}
				>
					Támogató
				</h2>
				<p
					className="border-l-8 border-primary p-4 pb-16 text-lg relative"
					style={{
						borderLeftWidth: "7px",
					}}
				>
					<img src={Sicontact} alt="Sicontact logo" className="h-12 m-auto" />
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
		</div>
	);
}
