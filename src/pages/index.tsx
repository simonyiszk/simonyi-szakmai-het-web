import clsx from "clsx";
import { Divider } from "components/divider/Divider";
import { HackathonForm } from "components/form/HackathonForm";
import { Hero } from "components/Hero";
import { Layout } from "components/Layout";
import Link from "next/link";

export default function Page(): React.ReactElement | null {
	return (
		<Layout>
			<Hero />

			{/* <Divider hasSticky /> */}

			<h2
				id="rolunk"
				className="font-bold text-primary text-4xl  border-primary mt-8"
				style={{ lineHeight: "1.5rem" }}
			>
				A rendezvényről
			</h2>

			<p
				className="border-l-8 border-t-8 border-primary p-4 pb-16 mb-16 text-lg relative"
				style={{
					borderLeftWidth: "7px",
				}}
			>
				A szakkollégium szakmai programjai közül hagyományosan minden áprilisban
				megrendezzük a Simonyi Konferenciát, ősszel pedig a Szakmai Napokat.
				Idén sajnos a járványügyi helyzet miatt a Konferencia elmaradt, a
				Szakmai Napokat pedig nem tudjuk megtartani offline, ezért azt találtuk
				ki, hogy egy új programsorozattal jelentkezünk nektek. <br />
				<br /> Így született meg a Simonyi Szakmai Hét, mely során részt
				vehettek egy Hackathon versenyen, a Szakmai e-Esten megtudhatjátok
				tagjaink milyen projekteken dolgoznak és az informatika különböző
				területeiről hallhattok előadásokat a Minikonferenciánkon.
				<span
					className="rounded-full w-48 h-48 absolute transform -rotate-45 -z-1"
					style={{
						background:
							"linear-gradient(90deg, #7D2742 0%, #732741 9.41%, #50283E 48.05%, #3A293D 79.62%, #32293C 100%)",
						bottom: "4rem",
						right: "5rem",
					}}
				/>
				<span
					className="rounded-full w-24 h-24 absolute transform rotate-45 -z-1"
					style={{
						background:
							"linear-gradient(90deg, #ED4737 0%, #BE3A3C 31.65%, #9B303F 60.89%, #852941 84.66%, #7D2742 100%)",
						top: "4rem",
						right: "4rem",
					}}
				/>
			</p>

			{/* <Divider /> */}

			<div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
				<div>
					<h2
						className="font-bold text-primary text-4xl"
						style={{ lineHeight: "1.5rem", marginLeft: "-1px" }}
					>
						Hackathon
					</h2>
					<p
						className="border-l-8 border-b-8 border-primary p-4 pb-16 text-lg relative"
						style={{
							borderLeftWidth: "7px",
						}}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut
						aliquip ex ea commodo consequat.
						<br />
						<br />
						Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur.
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
		</Layout>
	);
}
