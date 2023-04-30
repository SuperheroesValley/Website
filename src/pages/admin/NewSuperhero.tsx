import type { NextPage } from "next";
import { Footer } from "../../components/Footer";
import { HeaderBase } from "../../components/HeaderBase";

const NewSuperhero: NextPage = () => {
	return (
		<div>
			<div className="relative pt-6 pb-16 sm:pb-24 overflow-hidden">
				<HeaderBase />
			</div>

			<Footer />
		</div>
	);
};

export default NewSuperhero;
