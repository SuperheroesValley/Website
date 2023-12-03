import { faqs_mentorship } from "../../const/faqs";

export const MentorshipFAQ = () => {
	return (
		<div className="bg-white">
			<div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
				<div className="max-w-2xl lg:mx-auto lg:text-center">
					<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
						Frequently Asked Questions
					</h2>
					<p className="mt-4 text-gray-500">
						Qui puoi trovare tutte le informazioni riguardo al nostro programma
						di mentorship. Se non hai trovato quello che cerchi{" "}
						<a href="mailto:info@superherovalley.fun" className="font-bold">contattaci!</a>
					</p>
				</div>
				<div className="mt-20">
					<dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
						{faqs_mentorship.map((faq) => (
							<div key={faq.id}>
								<dt className="font-semibold text-gray-900">{faq.question}</dt>
								<dd className="mt-3 text-gray-500">{faq.answer}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
};
