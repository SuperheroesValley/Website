import Link from "next/link";
import Image from "next/image";

export const Hero = () => {
	return (
		<main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
			<div className="text-center">
				<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
					<span className="block xl:inline">Ti presentiamo</span>{" "}
					<span className="block text-blue-500 xl:inline">
						Super Heroes Valley
					</span>
				</h1>
				<p className="mt-3 max-w-md mx-auto text-base text-gray-800 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
					<b>SuperHeroesValley</b> è la community italiana che punta a colmare
					il divario tra univerisità e mondo delle <b>Big Tech Companies</b>.
					Organizziamo meetup, gruppi di esercizio e mock interview per prepare
					le persone ad affrontare interview tecniche.{" "}
					<b>Ti abbiamo incuriosito?</b>
				</p>
				<div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
					<div className="rounded-md shadow">
						<a
							href="#"
							className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 md:text-lg md:px-10"
						>
							Scopri di più
						</a>
					</div>
					<div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
						<a
							href="#"
							className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 md:py-4 md:text-lg md:px-10"
						>
							Unisciti a noi!
						</a>
					</div>
				</div>
			</div>
		</main>
	);
};
