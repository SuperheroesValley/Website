import type { NextPage } from "next";
import { Footer } from "../components/Footer";
import { HeaderBase } from "../components/HeaderBase";
import { BlogView } from "../components/BlogView";

const Blog: NextPage = () => {
	return (
		<div>
			<div className="relative pt-6 pb-16 sm:pb-24 overflow-hidden">
				<HeaderBase />
			</div>
			<BlogView />
			<Footer />
		</div>
	);
};

export default Blog;
