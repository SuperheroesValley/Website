import type { NextPage } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SuperHeroesList } from "../components/SuperHeroesList";

const SuperHeroes: NextPage = () => {
	return (
		<div>
			<Header />
			<SuperHeroesList />
			<Footer />
		</div>
	);
};

export default SuperHeroes;
