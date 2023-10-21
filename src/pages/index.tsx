import type { NextPage } from "next";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Offer } from "../components/Offer";
/*import { Hero } from "../components/Hero";*/
/*import { trpc } from "../utils/trpc";*/
/*import NextEvents from "../components/NextEvent/NextEvents";*/
import { NextEvents } from "../components/NextEvent";
import { Posts } from "../components/Posts";
import { Footer } from "../components/Footer";
/*import { ConcactForm } from "../components/ContactForm/ContacForm";*/

const Home: NextPage = () => {
	return (
		<div>
			{/* {<Banner/>} */}
			<Header/>
			<Offer/>
            <NextEvents/>
            <Posts/>
			{/* <ConcactForm /> */}
			<Footer />
		</div>
	);
};

export default Home;
