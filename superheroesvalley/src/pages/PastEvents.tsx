import type { NextPage } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PastEventsList } from "../components/PastEventsList";

const PastEvents: NextPage = () => {
	return (
		<div>
			<Header />
			<PastEventsList />
			<Footer />
		</div>
	);
};

export default PastEvents;
