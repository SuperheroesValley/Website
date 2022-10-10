export const MentorshipHero = () => {
	return (
		<div className="relative bg-gray-800">
			<div className="h-56 bg-blue-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
				<img
					className="w-full h-full object-cover"
					src="/images/mentorship.jpg"
					alt="Photo by Priscilla Du Preez onUnsplash"
				/>
				<div
					aria-hidden="true"
					className="absolute inset-0 w-full h-full bg-blue-700 bg-opacity-60 "
				></div>
			</div>
			<div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
				<div className="md:ml-auto md:w-1/2 md:pl-10">
					<p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
						Il nostro programma di mentorship
					</p>
					<p className="mt-3 text-lg text-gray-300">
						Superhero valley propone un programma di mentorship gratuito ed
						aperto a tutti. Per qualsiasi domanda o curiosità dai
						un&apos;occhiata alla
						<a href="">nostra FAQ</a> o{" "}
						<a href="mailto:info@superheroesvalley.fun">contattaci</a>.
					</p>
					<p className="mt-3 text-lg text-gray-300">
						Hai tempo fino al 23 Ottobre 2022 per candidarti!
					</p>
					<div className="mt-8">
						<div className="inline-flex rounded-md shadow">
							<a
								href="https://forms.gle/2t8b9LY49mXVZEGH9"
								className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
							>
								Invia la tua candidatura
								{/* <ExternalLinkIcon
									className="-mr-1 ml-3 h-5 w-5 text-gray-400"
									aria-hidden="true"
								/> */}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
