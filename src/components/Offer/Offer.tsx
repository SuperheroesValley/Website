import {
	CloudArrowUpIcon,
	LockClosedIcon,
	ServerIcon,
} from "@heroicons/react/20/solid";

export const Offer = () => {
	return (
		<section className="text-gray-600 body-font" id="our_offer">
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-col text-center w-full mb-20">
					{/* <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1"></h2> */}
					<h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
						Come offre Superhero Valley?
					</h1>
				</div>
				<div className="overflow-hidden bg-white py-24 sm:py-32">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
							<div className="lg:pr-8 lg:pt-4">
								<div className="lg:max-w-lg">
									{/* <h2 className="text-base font-semibold leading-7 text-indigo-600">
								Talks
							</h2> */}
									<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
										Talks
									</p>
									<p className="mt-6 text-lg leading-8 text-gray-600">
										Organizziamo talks invitando dipendenti
										di Big Tech Companies in modo tale da
										poter conoscere più da vicino queste
										aziende e il percorso che porta ad
										essere assunti.
									</p>
									<dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
										<div
											key={"Talks"}
											className="relative pl-9"
										>
											<dt className="inline font-semibold text-gray-900">
												📣{" "}
												{
													"Vuoi rimanere aggiornato con i prossimi talk per non perdertene neache uno? "
												}
											</dt>{" "}
											<dd className="inline">
												{
													"Iscriviti al nostro calendario condiviso!"
												}
											</dd>
										</div>
										<div
											key={"Talks"}
											className="relative pl-9"
										>
											<dt className="inline font-semibold text-gray-900">
												🎤{" "}
												{
													"Vuoi scoprire gli eventi che abbiamo organizzato fino ad oggi?"
												}
											</dt>{" "}
											<dd className="inline">
												{
													"Visita la pagina degli eventi passati!"
												}
											</dd>
										</div>
									</dl>
								</div>
							</div>
							<img
								src="./images/talks.jpg"
								alt="Photo by Edwin Andrade on Unsplash"
								className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
								width={2432}
								height={1442}
							/>
						</div>
					</div>
				</div>

				<div className="overflow-hidden bg-white py-24 sm:py-32">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
							<img
								src="./images/gym.jpg"
								alt="Photo by Nathan Dumlao on Unsplash"
								className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:-ml-96 md:-ml-80 lg:-ml-80 xl:-ml-60 2xl:-ml-60"
								width={2432}
								height={1442}
							/>
							<div className="lg:pr-8 lg:pt-4">
								<div className="lg:max-w-lg">
									{/* <h2 className="text-base font-semibold leading-7 text-indigo-600">
								Deploy faster
							</h2> */}
									<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
										Gruppo Esercizi
									</p>
									<p className="mt-6 text-lg leading-8 text-gray-600">
										Non prendiamoci in giro, preparsi per
										una interview può essere molto noioso.
										Per questo motivo organizziamo gruppi di
										esercizio per prepararsi alle interview
										tecniche delle Big Tech companies.
									</p>
									<dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
										<div
											key={"Interview"}
											className="relative pl-9"
										>
											<dt className="inline font-semibold text-gray-900">
												🏃‍♂️{" "}
												{
													"Ti stai preparando per una interview ma non vuoi farlo da solo?"
												}
											</dt>{" "}
											<dd className="inline">
												{
													"Uniscito al nostro gruppo esercizi sul server Discord per prepararti insieme agli altri utenti"
												}
											</dd>
										</div>
										<div
											key={"Mock"}
											className="relative pl-9"
										>
											<dt className="inline font-semibold text-gray-900">
												😱{" "}
												{
													"Pronto a metterti alla prova con una mock interview?"
												}
											</dt>{" "}
											<dd className="inline">
												{
													"Ti offriamo la possibilità di fare pratica con una mock interview pubblica di fronte a tutta la community"
												}
											</dd>
										</div>
									</dl>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
