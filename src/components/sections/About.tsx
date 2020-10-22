export function About(): JSX.Element {
	return (
		<>
			<h2
				id="rendezveny"
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
				ki, hogy egy új programsorozattal jelentkezünk nektek.
				<br />
				<br />
				Így született meg a Simonyi Szakmai Hét, mely során online részt
				vehettek egy Hackathonon a Szakmai e-Esten és a Minikonferenciánkon.
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
		</>
	);
}
