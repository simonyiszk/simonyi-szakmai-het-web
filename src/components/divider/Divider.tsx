import clsx from "clsx";

export function Divider({ hasSticky }: { hasSticky?: boolean }): JSX.Element {
	return (
		<>
			<div
				className="w-full relative h-8 md:h-16"
				style={{ marginBottom: "-1px" }}
			>
				<div
					className=" bg-primary h-16 fullWidthCenter"
					style={{ clipPath: "polygon(0 1%, 0 100%, 100% 100%)" }}
				/>
			</div>
			<div className={clsx("w-full h-16", hasSticky && "sticky top-0 z-10")}>
				<div className="w-full h-16 relative">
					<div className="bg-primary h-16 fullWidthCenter" />
				</div>
			</div>
			<div
				className="w-full relative h-8 md:h-16"
				style={{ marginTop: "-1px" }}
			>
				<div
					className="bg-secondary h-16 fullWidthCenter"
					style={{ clipPath: "polygon(0 1%, 100% 100%, 100% 0)" }}
				/>
			</div>
		</>
	);
}
