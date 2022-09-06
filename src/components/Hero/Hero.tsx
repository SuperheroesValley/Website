import Link from "next/link";

export const Hero = () => {
	return (
		<section className="text-gray-600 body-font">
			<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
				<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
						Cos&apos;è SuperHeroesValley?
					</h1>
					<p className="mb-8 leading-relaxed">
						<b>SuperHeroesValley</b> è la community italiana che punta a colmare
						il divario tra univerisità e mondo delle <b>Big Tech Companies</b>.
						Organizziamo meetup, gruppi di esercizio e mock interview per
						prepare le persone ad affrontare interview tecniche.{" "}
						<b>Ti abbiamo incuriosito?</b>
					</p>
					<div className="flex justify-center">
						<Link href="#our_offer">
							<button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
								Scopri di più
							</button>
						</Link>

						<Link href="https://discord.com/invite/eWAhBZ2wRy">
							<button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
								Unisciti a noi!
							</button>
						</Link>
					</div>
				</div>
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
					<img
						className="object-cover object-center rounded"
						alt="hero"
						src="https://dummyimage.com/720x600"
					/>
				</div>
			</div>
		</section>
	);
};
