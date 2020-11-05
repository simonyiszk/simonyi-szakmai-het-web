import Schdesign from "../../assets/logos/schdesign.svg";
import Simonyi from "../../assets/logos/simonyi.svg";
import Vik from "../../assets/logos/vik.svg";

export function Footer(): JSX.Element {
	return (
		<footer className="w-full bg-primary absolute bottom-0">
			<div className="container flex flex-1 p-4 justify-between mx-auto flex-col md:flex-row">
				<a
					href="https://vik.bme.hu"
					className="mx-auto p-4 py-2"
					target="_blank"
					rel="noreferrer"
				>
					<img src={Vik} alt="VIK logo" className="h-16" />
				</a>
				<a
					href="https://simonyi.bme.hu"
					className="mx-auto p-4"
					target="_blank"
					rel="noreferrer"
				>
					<img src={Simonyi} alt="Simonyi logo" className="h-12" />
				</a>
				<a
					href="https://schdesign.hu"
					className="mx-auto p-4"
					target="_blank"
					rel="noreferrer"
				>
					<img src={Schdesign} alt="schdesign logo" className="h-12" />
				</a>
			</div>
		</footer>
	);
}
