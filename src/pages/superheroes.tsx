import type { NextPage } from "next";
import { Footer } from "../components/Footer";
import { HeaderBase } from "../components/HeaderBase";
import { SuperHeroesList } from "../components/SuperHeroesList";

const SuperHeroes: NextPage = () => {
	return (
		<div>
			<div className="relative pt-6 pb-16 sm:pb-24">
				<HeaderBase />
			</div>
			<SuperHeroesList />
			<Footer />
		</div>
	);
};

export default SuperHeroes;
