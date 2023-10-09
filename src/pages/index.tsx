import type { NextPage } from "next";
import { Footer } from "../components/Footer";
import { Team } from "../components/Team";
import { Header } from "../components/Header";
import { Offer } from "../components/Offer";
import { Hero } from "../components/Hero";
import { trpc } from "../utils/trpc";
import { ConcactForm } from "../components/ContactForm/ContacForm";
import { Banner } from "../components/Banner";
import { Posts } from "../components/Posts";
import NextEvents from "../components/NextEvent/NextEvents";

const Home: NextPage = () => {
	return (
		<div>
			{/* <Banner /> */}
			<Header />
			<Offer />
            {/* <NextEvents/> */}

            <Posts/>
			{/* <Team /> */}
			{/* <ConcactForm /> */}
			<Footer />
		</div>
	);
};

export default Home;
