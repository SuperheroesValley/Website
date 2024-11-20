import Link from "next/link";

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
						Il nostro programma di Mentorship 2024/2025
					</p>
					<p className="mt-3 text-lg text-gray-300">
						Superhero Valley propone un programma di Mentorship gratuito ed
						aperto a tutti. Per qualsiasi domanda o curiosità <a href="https://www.youtube.com/watch?v=WS1bdxlNlYQ" className="mt-3 text-lg text-gray-300 font-extrabold">guarda la live di presentazione</a>, dai un&apos;occhiata alle <a className="mt-3 text-lg text-gray-300 font-extrabold">FAQ</a> o <a href="mailto:info@superherovalley.fun" className="mt-3 text-lg text-gray-300 font-extrabold">contattaci</a>.
					</p>
					<p className="mt-3 text-lg text-gray-300">
						La candidatura per il programma di Mentorship 2024/2025 è aperta!
					</p> 
					<p className="mt-3 text-lg text-red-500 font-extrabold">	
						Le candidature sono aperte e chiuderanno il 22 Dicembre 2024 alle ore 23:59!
					</p>
					{/*
					<p className="mt-3 text-lg text-gray-300">
						La candidatura per il programma di Mentorship 2024/2025 aprirà a breve, seguici sui social e nel nostro <Link href="https://discord.gg/uPRmhHwMem">
                                                    <a className="hover:text-blue-500">
														Server Discord 
                                                    </a>
                                                </Link> o sul <Link href="https://t.me/+zIcgNjPpYpIzNmU0">
                                                    <a className="hover:text-blue-500">
                                                        canale Telegram
                                                    </a>
                                                </Link> per rimanere aggiornato!
					</p>
					*/}
					{
					<div className="mt-8">
						<div className="inline-flex rounded-md shadow">
							<a
								href="https://forms.gle/griKxayCkxwwP1uUA"
								className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
							>
                                <b>
                                Invia la tua candidatura
                                </b>
								
								
							</a>
						</div>
					</div>}
				</div>
			</div>
		</div>
	);
};
