import Link from "next/link";
import Image from "next/image";

export const Hero = () => {
	return (
		<section className="text-gray-600 body-font">
			<div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
				{/* <img
					className="absolute inset-0 w-full h-full object-cover object-top"
					src="/images/bridge.jpg"
					alt=""
				/>
				<div
					aria-hidden="true"
					className="absolute inset-0 w-full h-full bg-purple-900 bg-opacity-50 backdrop-blur-sm"
				></div> */}
				<div className="text-center lg:w-2/3 w-full relative container m-auto px-6 md:px-12 lg:px-6">
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
				</div>
			</div>
		</section>
	);
};

// <div class="relative">

//     <div class="relative container m-auto px-6 md:px-12 lg:px-6">
//         <div class="mb-12 pt-40 space-y-16 md:mb-20 md:pt-56 lg:w-8/12 lg:mx-auto">
//             <h1 class="text-white text-center text-3xl font-bold sm:text-4xl md:text-5xl">
//                 Don't look again for your next freelance projects, you got them.
//             </h1>

//             <form action="" class="w-full">
//                 <div class="relative flex p-1 rounded-xl bg-white shadow-2xl md:p-2">
//                     <select class="hidden p-3 rounded-xl bg-transparent md:block md:p-4" name="domain" id="domain">
//                         <option value="design">Design</option>
//                         <option value="development">Development</option>
//                         <option value="marketing">Marketing</option>
//                     </select>
//                     <input placeholder="Your favorite position" class="w-full p-4" type="text">
//                     <button type="button" title="Start buying" class="ml-auto py-3 px-6 rounded-lg text-center transition bg-gradient-to-br from-pink-500 to-purple-500 hover:to-purple-600 active:from-pink-700 focus:from-pink-600 md:px-12">
//                         <span class="hidden text-white font-semibold md:block">
//                             Search
//                         </span>
//                         <svg xmlns="http://www.w3.org/2000/svg" class="w-5 mx-auto text-white md:hidden" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
//                             <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
//                         </svg>
//                     </button>
//                 </div>
//             </form>
//         </div>

//         <div class="pb-16">
//             <div class="md:px-12">
//                 <span class="block text-center font-medium text-pink-50">Trusted by your favorite giants</span>

//                 <div class="mt-8 -mx-6 px-6 overflow-x-auto md:overflow-x-hidden">
//                     <div class="w-max flex justify-center flex-wrap items-center gap-4 md:w-auto md:gap-6 lg:gap-8">
//                         <div class="flex items-center">
//                             <img class="w-36 grayscale contrast-200 brightness-200" src="images/clients/microsoft.png" alt="client logo" loading="lazy" width="584" height="122">
//                         </div>
//                         <div class="flex items-center">
//                             <img class="w-28 grayscale contrast-200 brightness-200" src="images/clients/grabyo.png" alt="client logo" loading="lazy" width="400" height="219">
//                         </div>
//                         <div class="flex items-center">
//                             <img class="w-32 grayscale contrast-200 brightness-200" src="images/clients/lifegroups.png" alt="client logo" loading="lazy" width="400" height="219">
//                         </div>
//                         <div class="flex items-center">
//                             <img class="w-24 grayscale contrast-200 brightness-200" src="images/clients/lilly.png" alt="client logo" loading="lazy" width="400" height="219">
//                         </div>
//                         <div class="flex items-center">
//                             <img class="w-28 grayscale contrast-200 brightness-200" src="images/clients/grabyo.png" alt="client logo" loading="lazy" width="400" height="219">
//                         </div>
//                         <div class="flex items-center">
//                             <img class="w-32 grayscale contrast-200 brightness-200" src="images/clients/lifegroups.png" alt="client logo" loading="lazy" width="400" height="219">
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>

// </div>

// <section className="text-gray-600 body-font">
// 	<div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
// 		<div className="absolute inset-0">
// 			<Image
// 				priority
// 				layout="fill"
// 				objectFit="cover"
// 				alt="hero"
// 				src="/images/bridge.jpg"
// 			/>
// 			<div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-800 mix-blend-multiply" />
// 		</div>

// 		<div className="text-center lg:w-2/3 w-full relative container m-auto px-6 md:px-12 lg:px-6">
// 			<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
// 				Cos&apos;è SuperHeroesValley?
// 			</h1>
// 			<p className="mb-8 leading-relaxed">
// 				<b>SuperHeroesValley</b> è la community italiana che punta a colmare il
// 				divario tra univerisità e mondo delle <b>Big Tech Companies</b>.
// 				Organizziamo meetup, gruppi di esercizio e mock interview per prepare le
// 				persone ad affrontare interview tecniche. <b>Ti abbiamo incuriosito?</b>
// 			</p>
// 			<div className="flex justify-center">
// 				<div className="flex justify-center">
// 					<Link href="#our_offer">
// 						<button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
// 							Scopri di più
// 						</button>
// 					</Link>

// 					<Link href="https://discord.com/invite/eWAhBZ2wRy">
// 						<button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
// 							Unisciti a noi!
// 						</button>
// 					</Link>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </section>;
