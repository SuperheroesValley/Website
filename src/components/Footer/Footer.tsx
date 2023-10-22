import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="text-gray-600 body-font">
			<div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
				<div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
					<a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
						<img
							src="./images/logo.png"
							className="w-20 h-20 text-white p-2 rounded-full"
						/>
						<span className="ml-3 text-xl">Superhero Valley</span>
					</a>
					{/* <p className="mt-2 text-sm text-gray-500">
						Air plant banjo lyft occupy retro adaptogen indego
					</p> */}
				</div>
				<div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
					<div className="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
							SOCIAL
						</h2>
						<nav className="list-none mb-10">
							<li>
								<Link href="https://www.linkedin.com/company/superhero-valley/">
									<a className="text-gray-600 hover:text-blue-500">Linkedin</a>
								</Link>
							</li>
						</nav>
					</div>
					<div className="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
							LINK UTILI
						</h2>
						<nav className="list-none mb-10">
							<li>
								<Link href="/coc">
									<a className="text-gray-600 hover:text-blue-500">
										Codice di Condotta
									</a>
								</Link>
							</li>
							{/* <li>
								<a className="text-gray-600 hover:text-blue-500">
									Privacy Policy
								</a>
							</li> */}
						</nav>
					</div>
					<div className="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
							GRUPPI
						</h2>
						<nav className="list-none mb-10">
							<li>
								<Link href="https://discord.gg/uPRmhHwMem">
									<a className="text-gray-600 hover:text-blue-500">Discord</a>
								</Link>
							</li>

							<li>
								<Link href="https://t.me/+zIcgNjPpYpIzNmU0">
									<a className="text-gray-600 hover:text-blue-500">Telegram</a>
								</Link>
							</li>
						</nav>
					</div>
				</div>
			</div>
			<div className="bg-gray-100">
				<div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
					<p className="text-gray-500 text-sm text-center sm:text-left hover:text-blue-500">
						© 2023 Superhero Valley —
						<a
							href="https://lucacorbucci.me"
							rel="noopener noreferrer"
							className="text-gray-600 ml-1"
							target="_blank"
						>
							@lucacorbucci
						</a>
					</p>
					
				</div>
			</div>
		</footer>
	);
};
