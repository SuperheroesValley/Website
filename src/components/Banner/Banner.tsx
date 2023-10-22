import Link from "next/link";
import { useEffect, useState } from "react";
import { Events } from "../../const/Events";

type EventDetails = {
	category: string;
	guest_id: number[];
	title: string;
	imageUrl?: string;
	href: string;
	description?: string;
	day: string;
	month: string;
	year: string;
	time?: string;
};

export const Banner = () => {
    const current_date = new Date();
	let current_year = current_date.getFullYear();
	let current_day = current_date.getDate();
	let current_month = current_date.getMonth() + 1;

	const [loading, setLoading] = useState(true); // anyting you want !!!
	const [eventsList, setEventsList] = useState<EventDetails[]>([]);

	useEffect(() => {
		if (loading) {
			const events: EventDetails[] = [];

			Events.forEach((dict) => {
				// filter the events that are in events and are in the future
				// using the current date and the date of the event
				[...dict.events].reverse().forEach((event) => {
					const event_date = new Date(
						parseInt(event.year),
						parseInt(event.month) - 1,
						parseInt(event.day),
					);
					if (event_date >= current_date) {
						events.push({
							category: event.category,
							guest_id: event.guest_id,
							title: event.title,
							imageUrl: event.imageUrl ? event.imageUrl : "",
							href: event.href,
							description: event.description,
							day: event.day,
							month: event.month,
							year: event.year,
							time: event.time,
						});
					}
				});
			});

			setEventsList(events);
			setLoading(false);
		}
	}, [loading]);

	return (
        loading ? (
            <div>loading ... </div>
        ) : eventsList.length == 0 ? (
            <div></div>
        ) : (
            <div className="relative bg-blue-600">
			<div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
				<div className="pr-16 sm:text-center sm:px-16">
					<p className="font-medium text-white">
						<span className="md:hidden">
							📣 Registrati al nostro prossimo talk: 
						</span>
						<span className="hidden md:inline">
                            📣 Registrati al nostro prossimo talk
						</span>
						<span className="block sm:ml-2 sm:inline-block">
							<Link href={eventsList[0] != null ? eventsList[0].href : ""}>
								<a className="text-white font-bold underline">
									{" "}
									Registrati{" "}
									<span aria-hidden="true">&rarr;</span>
								</a>
							</Link>
						</span>
					</p>
				</div>
			</div>
		</div>
        )
		
	);
};
