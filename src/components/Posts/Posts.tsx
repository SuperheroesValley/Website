const posts = [
    {
      title: 'Come scrivere il CV',
      href: 'https://wiki.superherovalley.fun/preparation/cv/',
      description:
        'Dubbi su quale template usare? Devo mettere o no la foto nel CV? In questa guida troverai tutte le risposte alle tue domande',
      imageUrl:
      "/images/cv.jpg",
    },
    {
      title: 'Come trovare aziende interessanti',
      href: 'https://wiki.superherovalley.fun/preparation/find_companies/',
      description:
        'Non tutte le aziende sono perfette, in questa guida cercheremo di aiutarti a trovare la migliore per te!',
      imageUrl:
      "/images/aziende.jpg",
    },
    {
      title: 'Come prepararsi alla coding interview',
      href: 'https://wiki.superherovalley.fun/preparation/coding/',
      description:
        'Preparare una interview non è facile? Ti sveliamo qualche trucchetto per arrivare il più preparato possibile in questa guida.',
      imageUrl:
      "/images/code.jpg",
    },
  ]

export const Posts = () => {
	return (
		<div>
				<div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
					<div className="absolute inset-0">
						<div className="bg-white h-1/3 sm:h-2/3" />
					</div>
					<div className="relative max-w-7xl mx-auto">
						<div className="text-center">
							<h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
								Dalla nostra <a href="https://wiki.superherovalley.fun/">Wiki</a>
							</h2>
							<p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
								La <a href="https://wiki.superherovalley.fun/">Wiki</a> di Superhero Valley contiene tante guide interessanti che ti guideranno dalla scrittura
                                fino alla negoziazione del contratto.
							</p>
						</div>
						<div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
							{posts.map((post) => (
								<div
									key={post.title}
									className="flex flex-col rounded-lg shadow-lg overflow-hidden"
								>
									<div className="flex-shrink-0">
										<img
											className="h-48 w-full object-cover"
											src={post.imageUrl}
											alt=""
										/>
									</div>
									<div className="flex-1 bg-white p-6 flex flex-col justify-between">
										<div className="flex-1">
											
											<a
												href={post.href}
												className="block mt-2"
											>
												<p className="text-xl font-semibold text-gray-900">
													{post.title}
												</p>
												<p className="mt-3 text-base text-gray-500">
													{post.description}
												</p>
											</a>
										</div>
										
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
	);
};
