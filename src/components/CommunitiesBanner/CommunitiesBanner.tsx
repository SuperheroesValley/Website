import { communities } from "../../const/communities";
import Link from "next/link";

export const CommunitiesBanner = () => {
	return (
		<section className="text-gray-600 body-font bg-gray-100">
			<div className="container mx-auto">
				<div className="grid grid-cols-5 gap-6">
					{communities.map((item) => (
						<div
							key={item.name}
							className="flex justify-center p-6 text-6xl rounded-xl m-auto"
						>
							<Link href={item.href}>
								<a className="block relative">
									<img className="block" src={item.logo} />
								</a>
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
