/*
import { NewEvents } from "../../const/NewEvents";

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
					{NewEvents.map((event) => (
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
																{/* <a>  href={product.href}> #aggiungere fine commento}
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
*/

const posts = [
	{
		title: 'How to... mock interview con Diego Puppin',
		imageUrl: "/guests/diego_puppin.webp",
		href: 'https://bit.ly/3Q0zmWS',
		date: '13 Novembre 2023 18:30',
		description: 'Diego è Staff Software Engineer a Synthesia, in questo evento parlerà di come si affronta una mock interview',
	},
	{
		title: 'How to... write a CV con Diego Ceccarelli',
		imageUrl: "/guests/diego_ceccarelli.webp",
		href: 'https://bit.ly/4016LoO',
		date: '6 Novembre 2023 18:30',
		description: 'Diego è AI Team Leader a Bloomberg, in questo evento parlerà di come scrivere un CV',
	},
	{
		title: 'My path to Google con Federico Scloza',
		imageUrl: "./guests/default_img.png",
		href: 'https://bit.ly/3Q9zrrs',
		date: '30 Ottobre 2023 Ore 18:30',
		description: 'Federico è Software Engineer in Google, ci parlerà del suo percorso fino a Google',
	},
	{
		title: 'The Tech Interview process is fundamentally broken con Nicola Corti',
		imageUrl: "/guests/nicola_corti.webp",
		href: 'https://bit.ly/3QklVCv',
		date: '23 Ottobre 2023 18:30',
		description: 'Nicola è Staff Engineer a Meta, ci parlerà di come affrontare i colloqui in Big Tech',
	},
  ]

export const NextEvents = () => {
	return (
		<div>
			<div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
				<div className="absolute inset-0">
					<div className="bg-white h-1/3 sm:h-2/3" />
				</div>
				<div className="relative max-w-7xl mx-auto">
					<div className="text-center">
						<h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Prossimi Eventi</h2>
					</div>
					{/*modificare qui il numero di colonne*/}
					<div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none"> 
						{posts.map((post) => (
							<div key={post.title}
								className="flex flex-col rounded-lg shadow-lg overflow-hidden">
								<div className="flex-shrink-0">
									<img className="h-48 w-full object-cover" src={post.imageUrl} alt=""/>
								</div>
								<div className="flex-1 bg-white p-6 flex flex-col justify-between">
									<div className="flex-1">
											<p className="text-xl font-semibold text-gray-900">{post.title}</p>
											<p className="text font-semibold text-gray-900">{post.date}</p>
											<p className="mt-3 text-base text-gray-500">{post.description}</p>
											<div className="p-2 w-full">
												<button className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
													<a href={post.href}>Registrati</a>
												</button>
											</div>
									</div>
								</div>
							</div>
						))
						}
					</div>
				</div>
			</div>
		</div>
	);
};
