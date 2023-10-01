import { superheroes } from "../../const/superheroes";

export const MentorshipList = () => {
	return (
		<section className="text-gray-600 body-font">
			<div className="container px-5 py-5 mx-auto">
				<br></br>
				<div className="flex flex-col text-center w-full mb-20">
					<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
						I nostri mentor
					</h1>

					{/* <div className="flex flex-wrap -m-2">
						{superheroes.map(
							(item) =>
								item.role.includes("mentor") && (
									<div
										className="p-2 lg:w-1/3 md:w-1/2 w-full"
										key={item.name}
									>
										<div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
											<img
												src={item.image}
												alt={item.name}
												className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
											/>
											<div className="flex-grow">
												<h2 className="text-gray-900 title-font font-medium">
													{item.name}
												</h2>
												<p className="text-gray-500">
													{item.company}
												</p>
											</div>
										</div>
									</div>
								),
						)}
					</div> */}
				</div>
			</div>
		</section>
	);
};
