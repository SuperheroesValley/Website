import { TeamList } from "../../const/TeamList";
import { BsLink45Deg, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import Link from "next/link";

export const Team = () => {
	return (
		<section className="text-gray-600 body-font">
			<div className="container px-5 py-10 mx-auto">
				<div className="flex flex-col text-center w-full mb-20">
					<h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
						Il Nostro Team
					</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
						Il team di Superhero Valley è composto da volontari che hanno a
						cuore la community e che investono il loro tempo affinchè tutto
						funzioni nel modo migliore possible. Vuoi aiutarci ad organizzare i
						prossimi eventi di Superhero Valley?
					</p>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
					<p>
						<Link href="">
							<a className="hover:text-black hover:underline">Contattaci!</a>
						</Link>
					</p>
				</div>
				<div className="flex flex-wrap -m-4">
					{TeamList.map((item) => (
						<div className="p-4 lg:w-1/2" key={item.name}>
							<div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
								<img
									src={item.image}
									alt={item.name}
									className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
								/>
								<div className="flex-grow sm:pl-8">
									<h2 className="title-font font-medium text-lg text-gray-900">
										{item.name}
									</h2>
									{/* <h3 className="text-gray-500 mb-3">UI Developer</h3> */}
									<p className="mb-4">{item.company}</p>
									<span className="inline-flex space-x-4">
										{item.github && (
											<a
												href={item.github}
												className="text-gray hover:text-black"
												target="_blank"
												rel="noreferrer"
											>
												<span className="sr-only">GitHub</span>
												<BsGithub />
											</a>
										)}
										{item.linkedin && (
											<a
												href={item.linkedin}
												className="text-gray hover:text-black"
												target="_blank"
												rel="noreferrer"
											>
												<span className="sr-only">Linkedin</span>
												<BsLinkedin />
											</a>
										)}
										{item.twitter && (
											<a
												href={item.twitter}
												className="text-gray hover:text-black"
												target="_blank"
												rel="noreferrer"
											>
												<span className="sr-only">Twitter</span>
												<BsTwitter />
											</a>
										)}
										{item.href && (
											<a
												href={item.href}
												className="text-gray hover:text-black"
												target="_blank"
												rel="noreferrer"
											>
												<span className="sr-only">Website</span>
												<BsLink45Deg />
											</a>
										)}
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
