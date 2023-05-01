import Link from "next/link";
import Image from "next/image";

export const Hero = () => {
	return (
		<main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
			<div className="text-center">
				<div className="hero container max-w-screen-lg mx-auto flex justify-center">
					<Image
						src="/images/logo_no_background.svg"
						className="rounded-full text-white p-2 w-3/12"
						alt="Superhero Valley Logo"
						width="300"
						height="300"
					></Image>
				</div>

				<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
					<span className="block xl:inline">Ti presentiamo</span>{" "}
					<span className="block text-blue-500 xl:inline">
						Superhero Valley
					</span>
				</h1>
				<p className="mt-3 max-w-md mx-auto text-base text-gray-800 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
					<b>Superhero valley</b> è la community italiana che ti
					prepara <br></br> per i colloqui delle{" "}
					<b>Big Tech Companies</b>. <br></br>
					Organizziamo talks, gruppi di esercizio e mock interview.{" "}
					<br></br>
					<b>Ti abbiamo incuriosito?</b>
				</p>
				<div className="mt-5 max-w-lg mx-auto sm:flex sm:justify-center md:mt-8">
					<div className="rounded-md shadow">
						<a
							href="#our_offer"
							className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 md:text-lg md:px-10"
						>
							Scopri di più
						</a>
					</div>
					<div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
						<Link href="/superheroes">
							<a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 md:py-4 md:text-lg md:px-10">
								I nostri superheroes
							</a>
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
};
