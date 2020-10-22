export function Footer(): JSX.Element {
	return (
		<footer className="w-full bg-primary">
			<div className="container flex flex-1 p-4 justify-between mx-auto flex-col md:flex-row">
				<a
					href="https://sch.bme.hu"
					className="mx-auto p-4"
					target="_blank"
					rel="noreferrer"
				>
					<img
						src="static/logos/sch.svg"
						alt="Schönherz logo"
						className="h-12"
					/>
				</a>
				<a
					href="https://simonyi.bme.hu"
					className="mx-auto p-4"
					target="_blank"
					rel="noreferrer"
				>
					<img
						src="static/logos/simonyi.svg"
						alt="Simonyi logo"
						className="h-12"
					/>
				</a>
				<a
					href="https://schdesign.hu"
					className="mx-auto p-4"
					target="_blank"
					rel="noreferrer"
				>
					<img
						src="static/logos/schdesign.svg"
						alt="schdesign logo"
						className="h-12"
					/>
				</a>
			</div>
		</footer>
	);
}
