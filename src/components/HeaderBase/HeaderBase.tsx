/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { navigation } from "../../const/navigation";
import Link from "next/link";
import Image from "next/image";
export const HeaderBase = () => {
	return (
		<Popover>
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<nav
					className="relative flex items-center justify-between sm:h-10 md:justify-center"
					aria-label="Global"
				>
					<div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
						<div className="flex items-center justify-between w-full md:w-auto">
							<Link href="/">
								<div className="hover:cursor-pointer flex justify-center items-center">
									<Image
										height="60"
										width="60"
										src="/images/Logo_no_background.svg"
										alt="Superhero Valley Logo"
										title="Home"
									/>
								</div>
							</Link>
							<div className="-mr-2 flex items-center md:hidden">
								<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
									<span className="sr-only">Open menu</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className="w-6 h-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
										/>
									</svg>
								</Popover.Button>
							</div>
						</div>
					</div>
					<div className="hidden md:flex md:space-x-10">
						{navigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="text-xl text-black-500 hover:text-gray-900 font-bold"
							>
								{item.name}
							</a>
						))}
					</div>
					<div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
						<span className="inline-flex rounded-md shadow">
							<a
								href="https://discord.gg/uPRmhHwMem"
								className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-black-600 bg-white hover:bg-gray-50"
							>
								Entra su Discord
							</a>
						</span>
					</div>
				</nav>
				{/* </div> */}
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
							<Link href="/">
								<div className="hover:cursor-pointer flex justify-center items-center">
									<Image
										height="60"
										width="60"
										src="/images/Logo_no_background.svg"
										alt="Superhero Valley Logo"
										title="Home"
									/>
								</div>
							</Link>
							<div className="-mr-2">
								<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
									<span className="sr-only">Close menu</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className="w-6 h-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
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
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
};
