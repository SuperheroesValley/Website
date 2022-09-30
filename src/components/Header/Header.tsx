/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { navigation } from "../../const/navigation";
import { HeaderBaseWithoutLogo } from "../HeaderBaseWithoutLogo";
import { Hero } from "../Hero";
import { Bridge } from "../Bridge";

export const Header = () => {
	return (
		<div className="relative bg-gray-50 overflow-hidden ">
			<Bridge></Bridge>
			<div className="relative pt-6 pb-16 sm:pb-24">
				<HeaderBaseWithoutLogo></HeaderBaseWithoutLogo>
				<Hero></Hero>
			</div>
		</div>
	);
};

{
}
