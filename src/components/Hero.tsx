import clsx from "clsx";
import Link from "next/link";

export function Hero(): JSX.Element {
	return (
		<>
			<div className="relative w-full -z-1">
				<div
					className="fullWidthCenter transform rotate-180 bg-hero-mobile md:bg-hero-pc h-1334px md:h-1080px bg-cover"
					style={{
						backgroundPosition: "center",
						top: "-62px",
					}}
				>
					<img src="static/images/mobile.png" alt="" className="hidden" />
					<img src="static/images/pc.png" alt="" className="hidden" />
				</div>
			</div>

			<div className="h-mobileSpacer md:h-desktopSpacer" />

			<div className="relative block md:hidden">
				<h1
					className="text-5xl uppercase transform rotate-90 block absolute top-0 left-0 origin-top-left"
					style={{ marginLeft: "48px" }}
				>
					Simonyi
				</h1>
			</div>
			<h1 className="text-5xl md:text-7xl uppercase">
				<span className="hidden md:inline">
					Simonyi
					<br />
				</span>
				<div className="pl-12 md:pl-0">
					<span className="text-primary">Szakmai</span>
					<span className="md:hidden">
						<br />
					</span>{" "}
					Hét
				</div>
			</h1>
			<h2 className="pl-12 md:pl-0 text-2xl mb-32 md:mb-8">November 13 - 18</h2>

			<Link href="#jelentkezes">
				<a
					className={clsx(
						"border-primary border-2 p-1 m-4 lg:ml-48 block mx-auto",
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

			<div className="h-desktopSpacer" />
		</>
	);
}
