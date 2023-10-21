import type { NextPage } from "next";
import { Footer } from "../components/Footer";
import { HeaderBase } from "../components/HeaderBase";
import { MentorshipFAQ } from "../components/MentorshipFAQ";
import { MentorshipHero } from "../components/MentorshipHero";
import { EventsList } from "../components/EventsList";

const Mentorship: NextPage = () => {
	return (
		<div>
			<div className="relative pt-6 pb-16 sm:pb-24 overflow-hidden">
				<HeaderBase />
			</div>
			<MentorshipHero />
			<MentorshipFAQ />

			<Footer />
		</div>
	);
};

export default Mentorship;
