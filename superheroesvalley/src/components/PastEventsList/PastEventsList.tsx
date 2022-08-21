// import { PastEvents } from "../../const/PastEvents";
// import { superheroes } from "../../const/superheroes";
// import { get_element } from "../../utils/utils";

import { PastEvents } from "../../const/PastEvents";
import { superheroes } from "../../const/superheroes";

// export const PastEventsList = () => {
// 	return (
// 		<section className="text-gray-600 body-font">
// 			<div className="container px-5 py-24 mx-auto">
// 				{PastEvents.map((item) => (
// 					<div key={item.year}>
// <h1
// 	className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
// 	key={item.year}
// >
// 	{item.year}
// </h1>
// 						<br></br>
// 						<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"></h1>
// 						<div className="flex flex-wrap -mx-4 -my-8">
// 							{item.events.map((event) => (
// 								<div className="py-8 px-4 lg:w-1/3" key={event.name}>
// 									<div className="h-full flex items-start">
// 										<div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
// 											<span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
// 												{event.month}
// 											</span>
// 											<span className="font-medium text-lg text-gray-800 title-font leading-none">
// 												{event.day}
// 											</span>
// 										</div>
// 										<div className="flex-grow pl-6">
// 											<h2 className="tracking-widest text-xs title-font font-medium text-red-500 mb-1">
// 												CATEGORY
// 											</h2>
// 											<h1 className="title-font text-xl font-medium text-gray-900 mb-3">
// 												{event.name}
// 											</h1>
// 											<p className="leading-relaxed mb-5">
// 												{event.descriprion}
// 											</p>
// 											<a className="inline-flex items-center">
// 												<span className="flex-grow flex flex-col pl-3">
// 													<span className="title-font font-medium text-gray-900">
// 														{
// 															superheroes.find((obj) => {
// 																return obj.id === event.guest_id;
// 															})?.name
// 														}
// 													</span>
// 												</span>
// 											</a>
// 										</div>
// 									</div>
// 								</div>
// 							))}
// 						</div>
// 						<br></br>
// 					</div>
// 				))}
// 			</div>
// 		</section>
// 	);
// };

function GuestInfo(props: any) {
	const guest = superheroes.find((obj) => {
		return obj.id === props.guestID;
	});

	return (
		<div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={guest?.name}>
			<div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
				<img
					alt="team"
					className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
					src="https://dummyimage.com/80x80"
				/>
				<div className="flex-grow">
					<h2 className="text-gray-900 title-font font-medium">
						{guest?.name}
					</h2>
					<p className="text-gray-500">{guest?.company}</p>
				</div>
			</div>
		</div>
	);
}

export const PastEventsList = () => {
	return (
		<section className="text-gray-600 body-font overflow-hidden">
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-wrap -m-12">
					{PastEvents.map((item) => (
						<div key={item.year}>
							<h1
								className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
								key={item.year}
							>
								{item.year}
							</h1>

							{item.events.map((event) => (
								<div
									className="p-12  flex flex-wrap -m-2 items-start"
									key={event.title}
								>
									<div>
										<span className="inline-block py-1 px-2 rounded bg-red-50 text-red-500 text-xs font-medium tracking-widest">
											{event.category}
										</span>

										<h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
											{event.title}
										</h2>
									</div>

									<p className="leading-relaxed mb-8">{event.descriprion}</p>
									<div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full"></div>
									{event.guest_id.map((guestID) => (
										<GuestInfo guestID={guestID} key={guestID} />
									))}
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
