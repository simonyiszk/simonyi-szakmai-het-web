import clsx from "clsx";
import { Presenter } from "components/presenter/Presenter";

export function MiniKonf(): JSX.Element {
	return (
		<div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-12 mt-16 mb-24 items-center">
			<div>
				<h2
					className="font-bold text-primary text-4xl sm:leading-6"
					style={{ marginLeft: "-1px" }}
				>
					Minikonferencia 11.17.&#8209;11.18.
				</h2>
				<p
					className="border-l-8 border-primary p-4 pb-16 text-lg relative"
					style={{
						borderLeftWidth: "7px",
					}}
				>
					<h3 className="text-2xl">Megnyílt a regisztráció!</h3>
					<br />
					A Minikonferencián az informatika különböző területeiről hallhattok
					izgalmas előadásokat. Az esemény célja, hogy megmutassa az
					érdeklődöknek az IT világ sokszínűségét, bővítse látókörüket.
					<br />
					<br />
					A konferencián a Simonyi Konferenciához képest hosszabb, mélyebb
					tudást átadó előadásokra számíthattok.
					<span
						className="rounded-full w-32 h-32 absolute transform -rotate-90 -z-1"
						style={{
							background:
								"linear-gradient(90deg, #7D2742 0%, #732741 9.41%, #50283E 48.05%, #3A293D 79.62%, #32293C 100%)",
							bottom: "1rem",
							right: "2rem",
						}}
					/>
					<span
						className="rounded-full w-48 h-48 absolute transform -rotate-90 -z-1"
						style={{
							background:
								"linear-gradient(90deg, #7D2742 0%, #732741 9.41%, #50283E 48.05%, #3A293D 79.62%, #32293C 100%)",
							bottom: "1rem",
							right: "5rem",
						}}
					/>
				</p>
			</div>
			<div style={{ height: "fit-content" }}>
				<a
					className={clsx(
						"border-primary border-2 p-1 m-4 lg:ml-48 block mx-auto",
						"w-minContent sm:w-fitContent",
					)}
					href="https://register.gotowebinar.com/register/25354049137631499"
				>
					<div
						className={clsx(
							" p-4 text-xl bg-secondary",
							"w-minContent sm:w-fitContent",
						)}
					>
						Jelentkezés
					</div>
				</a>
			</div>
			<Presenter
				presenter="Biró Júlia"
				timeAndPlace="11.17. 18:30 - 19:30"
				position="Site reliability engineer at Contentful"
				presenterImage="../static/presenters/julia.png"
				title="Reliability engineering devops környezetben"
			>
				Mi a reliability engineerség, mi a devops, és mi közük van ezeknek
				egymáshoz? Be fogom mutatni a fő eszközöket, amiket a munkámhoz
				használok, de nem konkrét technológiák mélységeibe akarok elmerülni,
				hanem abban, hogy mik azok a fogalmak, stratégiák, megközelítések, amik
				lehetővé teszik, hogy egy szolgáltatás magas rendelkezésreállású legyen.
				Célom, hogy egy kis ízelítőt adjak azokból a problémákból, amikkel nap
				mint nap foglalkozom.
			</Presenter>
			<Presenter
				presenter="Hives Áron"
				timeAndPlace="11.17. 19:35 - 20:35"
				position="CTO at EduBase"
				presenterImage="../static/presenters/aron.png"
				title="Hogyan építettünk fel a hobbinkból egy saját vállalkozást? - avagy az EduBase története és fejlődése"
			>
				Szeretnéd megismerni az EduBase oktatási platform történetét, hogy
				hogyan lett egy egyszerű videós rendszerező weboldalból egy összetett,
				bárki számára elérhető oktatási és vizsgáztató platform? Érdekel milyen
				funkciók teszik a rendszert különlegessé, milyen nehézségekbe ütköztünk
				az évek alatt vagy hogy hogyan alakult a hobbi projekt saját kis
				vállalkozássá?
			</Presenter>
			<Presenter
				presenter="Móricz Tamás"
				timeAndPlace="11.18. 18:30 - 19:30"
				position="Data Scientist at Aliz.ai"
				presenterImage="../static/presenters/tamas.png"
				title="Mit olvasol ma? Szövegmodellezés és ajánlórendszerek a gyakorlatban"
			>
				A résztvevők betekintést kapnak a szövegmodellezés alapjaiba és egy
				ipari példán keresztül a valós ajánlórendszer működésébe és a hozzájuk
				szükséges technológiákba, gyakorlati megfontolásokba.
			</Presenter>
			<Presenter
				presenter="Gema Barnabás"
				timeAndPlace="11.18. 19:35 - 20:35"
				position="Software Engineer at Shapr3D"
				presenterImage="../mstile-150x150.png"
				title="Egy tech cég szerverek nélkül"
			>
				Körülbelül hat évvel ezelőtt jelent meg az AWS Lambda, az első népszerű
				Function as a Service szolgáltatás, ami megalapozta a ma már egyre több
				területet lefedő serverless modellt. Előadásomban megmutatom, hogy a
				Shapr3D-nél miért döntöttünk a modell használata mellett, hogyan írjuk a
				backend szolgáltatásaink ebben a szellemben, hogyan üzemeltetjük őket,
				illetve hogy hogyan vertelek át az előadás címével.
			</Presenter>
		</div>
	);
}
