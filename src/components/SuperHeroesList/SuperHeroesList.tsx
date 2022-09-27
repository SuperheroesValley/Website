import { superheroes } from "../../const/superheroes";

export const SuperHeroesList = () => {
	return (
		<section className="text-gray-600 body-font">
			<div className="container px-5 py-5 mx-auto">
				<div className="flex flex-col text-center w-full mb-20">
					<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
						I nostri superheroes
					</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
						Con superhero identifichiamo una persona che lavora in una big tech
						company e che ha aiutato in qualche modo la nostra community. In
						questa pagina troverai la lista degli speaker che hanno partecipato
						ad eventi di Superhero Valley e vedrai nomi che potresti ritrovare
						anche nel nostro server Discord.
					</p>
				</div>
				<div className="flex flex-wrap -m-2">
					{superheroes.map((item) => (
						<div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={item.name}>
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
									<p className="text-gray-500">{item.company}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
