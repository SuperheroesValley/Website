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

export const HeaderBase = () => {
	return (
		<Popover className="relative bg-white">
			<div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
				<div className="flex justify-start lg:w-0 lg:flex-1">
					<a href="#">
						<span className="sr-only">Workflow</span>
						<img
							className="h-8 w-auto sm:h-10"
							src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
							alt=""
						/>
					</a>
				</div>
				<div className="-mr-2 -my-2 md:hidden">
					<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
						<span className="sr-only">Open menu</span>
					</Popover.Button>
				</div>
				<Popover.Group as="nav" className="hidden md:flex space-x-10">
					<a
						href="#"
						className="text-base font-medium text-gray-500 hover:text-gray-900"
					>
						Pricing
					</a>
					<a
						href="#"
						className="text-base font-medium text-gray-500 hover:text-gray-900"
					>
						Docs
					</a>
				</Popover.Group>
				<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
					<a
						href="#"
						className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
					>
						Sign in
					</a>
					<a
						href="#"
						className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
					>
						Sign up
					</a>
				</div>
			</div>

			<Transition
				as={Fragment}
				enter="duration-200 ease-out"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="duration-100 ease-in"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95"
			>
				<Popover.Panel
					focus
					className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
				>
					<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
						<div className="pt-5 pb-6 px-5">
							<div className="flex items-center justify-between">
								<div>
									<img
										className="h-8 w-auto"
										src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
										alt="Workflow"
									/>
								</div>
								<div className="-mr-2">
									<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
										<span className="sr-only">Close menu</span>
									</Popover.Button>
								</div>
							</div>
							<div className="mt-6">
								<nav className="grid grid-cols-1 gap-7">
									{navigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
										>
											<div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white"></div>
											<div className="ml-4 text-base font-medium text-gray-900">
												{item.name}
											</div>
										</a>
									))}
								</nav>
							</div>
						</div>
						<div className="py-6 px-5">
							<div className="grid grid-cols-2 gap-4">
								<a
									href="#"
									className="text-base font-medium text-gray-900 hover:text-gray-700"
								>
									Pricings
								</a>

								<a
									href="#"
									className="text-base font-medium text-gray-900 hover:text-gray-700"
								>
									Docs
								</a>

								<a
									href="#"
									className="text-base font-medium text-gray-900 hover:text-gray-700"
								>
									Enterprise
								</a>
							</div>
							<div className="mt-6">
								<a
									href="#"
									className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
								>
									Sign up
								</a>
								<p className="mt-6 text-center text-base font-medium text-gray-500">
									Existing customer?{" "}
									<a href="#" className="text-indigo-600 hover:text-indigo-500">
										Sign in
									</a>
								</p>
							</div>
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
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
