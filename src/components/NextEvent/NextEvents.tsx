import { PastEvents } from "../../const/PastEvents";

export default function NextEvents() {
	const current_date = new Date();
	let current_year = current_date.getFullYear();
	let current_day = current_date.getDay();
	let current_month = current_date.getMonth();

	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<h2 className="text-2xl font-bold tracking-tight text-gray-900">
					I prossimi eventi:
				</h2>

				<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
					{PastEvents.map((event) => (
						<span key="test1">
							{current_year == parseInt(event.year) &&
								event.events.map((event) => (
									<span key="test" className="group relative">
										{current_day <= parseInt(event.day) &&
											current_month <=
												parseInt(event.month) && (
												<span
													key={"test2"}
													
												>
													<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
														<img
															src={event.image}
															// alt={product.imageAlt}
															className="h-full w-full object-cover object-center lg:h-full lg:w-full"
														/>
													</div>
													<div className="mt-4 flex justify-between">
														<div>
															<h3 className="text-sm text-gray-700">
																{/* <a>  href={product.href}> */}
																<a>
																	<span
																		aria-hidden="true"
																		className="absolute inset-0"
																	/>
																	{
																		event.title
																	}
																</a>
															</h3>
														</div>
													</div>
												</span>
											)}
									</span>
								))}
						</span>

						
					))}
				</div>
			</div>
		</div>
	);
}
