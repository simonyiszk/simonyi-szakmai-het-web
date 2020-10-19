import clsx from "clsx";
import Link from "next/link";

export function Hero(): JSX.Element {
	return (
		<>
			<div style={{ minHeight: "22vh", height: "22vh" }} />

			<h1 className="text-5xl sm:text-6xl">
				Simonyi
				<br />
				<span className="text-primary">Szakmai</span> Hét
			</h1>
			<h2 className="text-xl">November 13 - 18</h2>

			<Link href="#jelentkezes">
				<a
					className={clsx(
						"font-bold border-primary border-2 p-4 m-4 lg:ml-48 text-2xl block",
						"w-minContent sm:w-fitContent",
					)}
				>
					Hackathon jelentkezés
				</a>
			</Link>

			<div style={{ minHeight: "22vh", height: "22vh" }} />
		</>
	);
}
