import Link from "next/link";

export function Navbar(): JSX.Element {
	return (
		<nav className="p-4 flex justify-between content-center sticky top-0 text-xl z-20">
			<Link href="/">
				<a className="font-Boldstrom">LOGO</a>
			</Link>
			<div className="flex content-center">
				<Link href="#rolunk">
					<a className="border-text border-r px-2 pr-4">Rólunk</a>
				</Link>
				<Link href="#jelentkezes">
					<a className="px-2 pl-4">Jelentkezés</a>
				</Link>
			</div>
		</nav>
	);
}
