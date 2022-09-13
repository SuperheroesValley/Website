/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";

const navigation = [
	{
		name: "I nostri SuperHeroes",
		href: "/superheroes",
		external: true,
		current: false,
	},
	{
		name: "Eventi Passati",
		href: "/PastEvents",
		external: true,
		current: false,
	},
];

export const Header = () => {
	return (
		<div className="relative bg-gray-50 overflow-hidden ">
			<div
				className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
				aria-hidden="true"
			>
				<div className="relative h-full max-w-7xl mx-auto">
					<svg
						className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
						width={404}
						height={784}
						fill="none"
						viewBox="0 0 404 784"
					>
						<defs>
							<pattern
								id="f210dbf6-a58d-4871-961e-36d5016a0f49"
								x={0}
								y={0}
								width={20}
								height={20}
								patternUnits="userSpaceOnUse"
							>
								<rect
									x={0}
									y={0}
									width={4}
									height={4}
									className="text-gray-200"
									fill="currentColor"
								/>
							</pattern>
						</defs>
						<rect
							width={404}
							height={784}
							fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
						/>
					</svg>
					<svg
						className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
						width={404}
						height={784}
						fill="none"
						viewBox="0 0 404 784"
					>
						<defs>
							<pattern
								id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
								x={0}
								y={0}
								width={20}
								height={20}
								patternUnits="userSpaceOnUse"
							>
								<rect
									x={0}
									y={0}
									width={4}
									height={4}
									className="text-gray-200"
									fill="currentColor"
								/>
							</pattern>
						</defs>
						<rect
							width={404}
							height={784}
							fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
						/>
					</svg>
				</div>
			</div>
			<img
				className="absolute inset-0 w-full h-full object-cover object-top"
				src="/images/bridge.jpg"
				alt=""
			/>
			<div
				aria-hidden="true"
				className="absolute inset-0 w-full h-full bg-red-200 bg-opacity-40 backdrop-blur-sm"
			></div>

			<div className="relative pt-6 pb-16 sm:pb-24">
				<Popover>
					<div className="max-w-7xl mx-auto px-4 sm:px-6">
						<nav
							className="relative flex items-center justify-between sm:h-10 md:justify-center"
							aria-label="Global"
						>
							<div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
								<div className="flex items-center justify-between w-full md:w-auto">
									<Link href="/">
										<a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
											<img
												src="./images/logo_sv.webp"
												className="w-20 h-20 text-white p-2 "
											/>
										</a>
									</Link>
									<div className="-mr-2 flex items-center md:hidden">
										<Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
											<span className="sr-only">Open main menu</span>
										</Popover.Button>
									</div>
								</div>
							</div>
							<div className="hidden md:flex md:space-x-10">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="font-medium text-black-500 hover:text-gray-900"
									>
										{item.name}
									</a>
								))}
							</div>
							<div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
								<span className="inline-flex rounded-md shadow">
									<a
										href="#"
										className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-black-600 bg-white hover:bg-gray-50"
									>
										Join Us on Discord
									</a>
								</span>
							</div>
						</nav>
					</div>

					<Transition
						as={Fragment}
						enter="duration-150 ease-out"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="duration-100 ease-in"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<Popover.Panel
							focus
							className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
						>
							<div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
								<div className="px-5 pt-4 flex items-center justify-between">
									<div>
										<img
											className="h-8 w-auto"
											src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
											alt=""
										/>
									</div>
									<div className="-mr-2">
										<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
											<span className="sr-only">Close menu</span>
										</Popover.Button>
									</div>
								</div>
								<div className="px-2 pt-2 pb-3">
									{navigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className="block px-3 py-2 rounded-md text-base font-medium text-black-700 hover:text-gray-900 hover:bg-gray-50"
										>
											{item.name}
										</a>
									))}
								</div>
								<a
									href="#"
									className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
								>
									Log in
								</a>
							</div>
						</Popover.Panel>
					</Transition>
				</Popover>

				<main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
					<div className="text-center">
						<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
							<span className="block xl:inline">Ti presentiamo</span>{" "}
							<span className="block text-red-500 xl:inline">
								Super Heroes Valley
							</span>
						</h1>
						<p className="mt-3 max-w-md mx-auto text-base text-gray-800 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
							<b>SuperHeroesValley</b> è la community italiana che punta a
							colmare il divario tra univerisità e mondo delle{" "}
							<b>Big Tech Companies</b>. Organizziamo meetup, gruppi di
							esercizio e mock interview per prepare le persone ad affrontare
							interview tecniche. <b>Ti abbiamo incuriosito?</b>
						</p>
						<div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
							<div className="rounded-md shadow">
								<a
									href="#"
									className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600 md:py-4 md:text-lg md:px-10"
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
			</div>
		</div>
	);
};

// import Link from "next/link";

// const navigation = [
// 	// { name: "Contatti", href: "#", current: false },
// 	{
// 		name: "I nostri SuperHeroes",
// 		href: "/superheroes",
// 		external: true,
// 		current: false,
// 	},
// 	{
// 		name: "Eventi Passati",
// 		href: "/PastEvents",
// 		external: true,
// 		current: false,
// 	},
// ];

// export const Header = () => {
// 	return (
// 		<header className="text-gray-600 body-font">
// 			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
// 				<Link href="/">
// 					<a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
// 						{/* <svg
// 							xmlns="http://www.w3.org/2000/svg"
// 							fill="none"
// 							stroke="currentColor"
// 							strokeLinecap="round"
// 							strokeLinejoin="round"
// 							strokeWidth="2"
// 							className="w-10 h-10 text-white p-2 bg-red-500 rounded-full"
// 							viewBox="0 0 24 24"
// 						>
// 							<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
// 						</svg> */}
// 						<img
// 							src="./images/logo_sv.webp"
// 							className="w-20 h-20 text-white p-2 "
// 						/>
// 						<span className="ml-3 text-xl">SuperHeroesValley</span>
// 					</a>
// 				</Link>

// 				<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
// 					{navigation.map((item) => (
// 						<Link
// 							key={item.name}
// 							href={item.href}
// 							target={item.external ? "_blank" : undefined}
// 							rel="noopener noreferrer"
// 						>
// 							<a
// 								className={"mr-5 hover:text-gray-900"}
// 								aria-current={item.current ? "page" : undefined}
// 							>
// 								{item.name}
// 							</a>
// 						</Link>
// 					))}
// 				</nav>
// 				<Link href="https://discord.com/invite/eWAhBZ2wRy">
// 					<button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
// 						Il nostro Discord
// 						<svg
// 							fill="none"
// 							stroke="currentColor"
// 							strokeLinecap="round"
// 							strokeLinejoin="round"
// 							strokeWidth="2"
// 							className="w-4 h-4 ml-1"
// 							viewBox="0 0 24 24"
// 						>
// 							<path d="M5 12h14M12 5l7 7-7 7"></path>
// 						</svg>
// 					</button>
// 				</Link>
// 			</div>
// 		</header>
// 	);
// };
