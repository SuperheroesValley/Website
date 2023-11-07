import type { NextPage } from "next";
import { Footer } from "../components/Footer";
import { HeaderBase } from "../components/HeaderBase";
import { EventsList } from "../components/EventsList";

const Events: NextPage = () => {
	return (
		<div>
			<div className="relative pt-6 pb-16 sm:pb-24">
				<HeaderBase />
			</div>
			<EventsList />
			<Footer />
		</div>
	);
};

export default Events;
