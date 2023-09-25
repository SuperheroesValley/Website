import { TeamList } from "../../const/TeamList";
import {
	BsLink45Deg,
	BsTwitter,
	BsLinkedin,
	BsGithub,
	BsMastodon,
} from "react-icons/bs";

export const Team = () => {
	return (
		<div className="bg-white">
			<div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
				<div className="space-y-12">
					<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-center">
						Il nostro team
					</h2>
					<p className="text-lg tracking-tight sm:text-4xl text-center font-normal">
						Il team di Superhero Valley è composto da volontari che
						hanno a cuore la community e che investono il loro tempo
						affinchè tutto funzioni nel modo migliore possible. Vuoi
						darci una mano? Contattaci!
					</p>

					<ul
						role="list"
						className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
					>
						{TeamList.map((person) => (
							<li
								key={person.name}
								className="flex flex-col gap-10 pt-12 sm:flex-row"
							>
								<img
									className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
									src={person.image}
									alt=""
								/>
								<div className="max-w-xl flex-auto">
									<h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
										{person.name}
									</h3>
									<p className="text-base leading-7 text-gray-600">
										{person.role}
									</p>
									<p className="mt-6 text-base leading-7 text-gray-600">
										{person.bio}
									</p>
									<ul
										role="list"
										className="mt-6 flex gap-x-6"
									>
										{person.twitter && (
											<a
												href={person.twitter}
												className="text-gray-400 hover:text-gray-500"
											>
												<span className="sr-only">
													Twitter
												</span>
												<svg
													className="h-5 w-5"
													aria-hidden="true"
													fill="currentColor"
													viewBox="0 0 20 20"
												>
													<path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
												</svg>
											</a>
										)}
										{person.linkedin && (
											<a
												href={person.linkedin}
												className="text-gray hover:text-black"
												target="_blank"
												rel="noreferrer"
											>
												<span className="sr-only">
													Linkedin
												</span>
												<BsLinkedin />
											</a>
										)}
										{person.twitter && (
											<a
												href={person.twitter}
												className="text-gray hover:text-black"
												target="_blank"
												rel="noreferrer"
											>
												<span className="sr-only">
													Twitter
												</span>
												<BsTwitter />
											</a>
										)}
										{person.mastodon && (
											<a
												href={person.mastodon}
												className="text-gray hover:text-black"
												target="_blank"
												rel="noreferrer"
											>
												<span className="sr-only">
													Mastodon
												</span>
												<BsMastodon />
											</a>
										)}
										{person.github && (
											<a
												href={person.github}
												className="text-gray hover:text-black"
												target="_blank"
												rel="noreferrer"
											>
												<span className="sr-only">
													GitHub
												</span>
												<BsGithub />
											</a>
										)}
										{person.href && (
											<a
												href={person.href}
												className="text-gray hover:text-black"
												target="_blank"
												rel="noreferrer"
											>
												<span className="sr-only">
													Website
												</span>
												<BsLink45Deg />
											</a>
										)}
									</ul>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
