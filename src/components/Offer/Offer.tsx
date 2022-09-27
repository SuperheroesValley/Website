export const Offer = () => {
	return (
		<section className="text-gray-600 body-font" id="our_offer">
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-col text-center w-full mb-20">
					{/* <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1"></h2> */}
					<h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
						Come funziona SuperHeroesValley?
					</h1>
				</div>
				<div className="flex flex-wrap -m-4">
					<div className="p-4 md:w-1/3">
						<div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
							<div className="flex items-center mb-3">
								<div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-5 h-5"
										viewBox="0 0 24 24"
									>
										<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
									</svg>
								</div>
								<h2 className="text-gray-900 text-lg title-font font-medium">
									Talks
								</h2>
							</div>
							<div className="flex-grow">
								<p className="leading-relaxed text-base">
									Organizziamo talks invitando dipendenti di Big Tech Companies
									in modo tale da poter conoscere più da vicino queste aziende e
									il percorso che porta ad essere assunti.
								</p>
								{/* <a className="mt-3 text-blue-500 inline-flex items-center">
									Learn More
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</a> */}
							</div>
						</div>
					</div>
					<div className="p-4 md:w-1/3">
						<div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
							<div className="flex items-center mb-3">
								<div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-5 h-5"
										viewBox="0 0 24 24"
									>
										<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
										<circle cx="12" cy="7" r="4"></circle>
									</svg>
								</div>
								<h2 className="text-gray-900 text-lg title-font font-medium">
									Gruppi di esercizio
								</h2>
							</div>
							<div className="flex-grow">
								<p className="leading-relaxed text-base">
									Non prendiamoci in giro, preparsi per una interview può essere
									molto noioso. Per questo motivo organizziamo gruppi di
									esercizio per prepararsi alle interview tecniche delle Big
									Tech companies.
								</p>
								{/* <a className="mt-3 text-blue-500 inline-flex items-center">
									Learn More
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</a> */}
							</div>
						</div>
					</div>
					<div className="p-4 md:w-1/3">
						<div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
							<div className="flex items-center mb-3">
								<div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-5 h-5"
										viewBox="0 0 24 24"
									>
										<circle cx="6" cy="6" r="3"></circle>
										<circle cx="6" cy="18" r="3"></circle>
										<path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
									</svg>
								</div>
								<h2 className="text-gray-900 text-lg title-font font-medium">
									Mock Interview
								</h2>
							</div>
							<div className="flex-grow">
								<p className="leading-relaxed text-base">
									Quale modo migliore per testare la propria preparazione di una
									mock interview pubblica di fronte a tutta la community? Ti
									abbiamo spaventato? Non preoccuparti, se non sei ancora pronto
									potrai esercitarti privatamente con gli altri utenti della
									community.
								</p>
								{/* <a className="mt-3 text-blue-500 inline-flex items-center">
									Learn More
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</a> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
