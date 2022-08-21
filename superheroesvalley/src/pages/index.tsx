import type { NextPage } from "next";
import { Footer } from "../components/Footer";
import { Team } from "../components/Team";
import { Header } from "../components/Header";
import { Offer } from "../components/Offer";
import { Hero } from "../components/Hero";
import { trpc } from "../utils/trpc";
import { ConcactForm } from "../components/ContactForm/ContacForm";

type TechnologyCardProps = {
	name: string;
	description: string;
	documentation: string;
};

const Home: NextPage = () => {
	return (
		<div>
			<Header />
			<Hero />
			<Offer />
			<Team />
			<ConcactForm />
			<Footer />
		</div>
	);
};

export default Home;
