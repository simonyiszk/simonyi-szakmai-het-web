import clsx from "clsx";
import Link from "next/link";

export function Hero(): JSX.Element {
	return (
		<>
			<div className="relative w-full" style={{ zIndex: -1 }}>
				<div
					className="fullWidthCenter transform rotate-180 bg-hero-mobile md:bg-hero-pc h-1334px md:h-1080px bg-cover"
					style={{
						backgroundPosition: "center",
						top: "-120px",
					}}
				>
					<img src="static/images/mobile.png" alt="" className="hidden" />
					<img src="static/images/pc.png" alt="" className="hidden" />
				</div>
			</div>

			<div style={{ minHeight: "31vh", height: "31vh" }} />

			<h1 className="text-5xl sm:text-6xl uppercase">
				Simonyi
				<br />
				<span className="text-primary">Szakmai</span> Hét
			</h1>
			<h2 className="text-xl">November 13 - 18</h2>

			<Link href="#jelentkezes">
				<a
					className={clsx(
						"border-primary border-2 p-1 m-4 lg:ml-48 block",
						"w-minContent sm:w-fitContent",
					)}
				>
					<div
						className={clsx(
							"font-bold p-4 text-2xl bg-secondary",
							"w-minContent sm:w-fitContent",
						)}
					>
						Hackathon jelentkezés
					</div>
				</a>
			</Link>

			<div style={{ minHeight: "32vh", height: "32vh" }} />
		</>
	);
}
