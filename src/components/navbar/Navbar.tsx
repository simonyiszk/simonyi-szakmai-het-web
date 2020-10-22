import Link from "next/link";

export function Navbar(): JSX.Element {
	return (
		<nav className="flex justify-between content-center sticky top-0 text-xl z-20 h-60px ">
			<Link href="/">
				<a className="block my-auto p-2 h-full">
					<img
						className="max-h-full"
						src="static/logos/simonyi_szakmai_het_feher.png"
						alt="Logó"
					/>
				</a>
			</Link>
			<div className="flex content-center">
				<Link href="#rendezveny">
					<a className="border-text px-2 pr-4 my-4">A rendezvényről</a>
				</Link>
				{/*
				<Link href="#jelentkezes">
					<a className="px-2 pl-4 my-4 mr-1 md:mr-4">Jelentkezés</a>
				</Link>
				*/}
			</div>
		</nav>
	);
}
