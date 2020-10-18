export function Footer() {
	return (
		<footer className="w-full bg-secondary">
			<div className="container flex flex-1 p-4 justify-between mx-auto flex-col md:flex-row">
				<a href="https://simonyi.bme.hu" className="mx-auto p-4">
					<img
						src="static/logos/simonyi_color.png"
						alt="Simonyi logo"
						className="h-16"
					/>
				</a>
				<a href="https://sch.bme.hu" className="mx-auto p-4">
					<img
						src="static/logos/sch.png"
						alt="Schönherz logo"
						className="h-16"
					/>
				</a>
				<a href="https://schdesign.hu" className="mx-auto p-4">
					<img
						src="static/logos/schdesign.png"
						alt="schdesign logo"
						className="h-16"
					/>
				</a>
			</div>
		</footer>
	);
}
