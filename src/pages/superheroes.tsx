import type { NextPage } from "next";
import { Footer } from "../components/Footer";
import { HeaderBase } from "../components/HeaderBase";
import { SuperHeroesList } from "../components/SuperHeroesList";

const SuperHeroes: NextPage = () => {
	return (
		<div>
			<HeaderBase />
			<SuperHeroesList />
			<Footer />
		</div>
	);
};

export default SuperHeroes;
