import type { NextPage } from "next";
import { Footer } from "../components/Footer";
import { HeaderBase } from "../components/HeaderBase";
import { PastEventsList } from "../components/PastEventsList";

const PastEvents: NextPage = () => {
	return (
		<div>
			<div className="relative pt-6 pb-16 sm:pb-24 overflow-hidden">
				<HeaderBase />
			</div>
			<PastEventsList />
			<Footer />
		</div>
	);
};

export default PastEvents;
