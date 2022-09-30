/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { navigation } from "../../const/navigation";
import { HeaderBase } from "../HeaderBase";
import { Hero } from "../Hero";

export const Bridge = () => {
	return (
		<div>
			<img
				className="absolute inset-0 w-full h-full object-cover object-top"
				src="/images/bridge_reduced.jpg"
				alt=""
			/>
			<div
				aria-hidden="true"
				className="absolute inset-0 w-full h-full bg-blue-100 bg-opacity-60 backdrop-blur-sm"
			></div>
		</div>
	);
};
