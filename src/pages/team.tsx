import type { NextPage } from "next";
import { Footer } from "../components/Footer";
import { HeaderBase } from "../components/HeaderBase";
import { Team } from "../components/Team";

const Mentorship: NextPage = () => {
	return (
		<div>
			<div className="relative pt-6 pb-16 sm:pb-24">
				<HeaderBase />
			</div>
			<Team />

			<Footer />
		</div>
	);
};

export default Mentorship;
