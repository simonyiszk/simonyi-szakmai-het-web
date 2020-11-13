import type { ReactChild } from "react";

type PresenterProps = {
	timeAndPlace: string;
	title: string;
	presenter: string;
	position?: string;
	presenterImage: string;
	children: ReactChild;
};

export function Presenter({
	timeAndPlace,
	title,
	presenter,
	position,
	presenterImage,
	children,
}: PresenterProps): JSX.Element {
	return (
		<section className="flex flex-col lg:flex-row lg:col-span-2 border-t-8 border-r-8 border-primary">
			<div className="flex flex-col items-center">
				<img src={presenterImage} alt={presenter} className="w-64 p-4" />
				<h3 className="text-center text-2xl text-secondary">{presenter}</h3>
				<h4 className="text-center text-xl">{timeAndPlace}</h4>
			</div>
			<div className="p-4 w-fitContent">
				<h2 className="text-4xl text-primary">{title}</h2>
				<h3 className="text-2xl py-4 text-secondary">
					{presenter}
					{position ? ` - ${position}` : ""}
				</h3>
				<p className="text-lg">{children}</p>
			</div>
		</section>
	);
}
