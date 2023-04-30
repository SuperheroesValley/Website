import Link from "next/link";

export const Banner = () => {
	return (
		<div className="relative bg-blue-600">
			<div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
				<div className="pr-16 sm:text-center sm:px-16">
					<p className="font-medium text-white">
						<span className="md:hidden">
							📣 Novità! Scopri il nostro programma di mentorship
						</span>
						<span className="hidden md:inline">
							📣 Novità! Scopri il nostro programma di mentorship
						</span>
						<span className="block sm:ml-2 sm:inline-block">
							<Link href="/mentorship">
								<a className="text-white font-bold underline">
									{" "}
									Scopri di più{" "}
									<span aria-hidden="true">&rarr;</span>
								</a>
							</Link>
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};
