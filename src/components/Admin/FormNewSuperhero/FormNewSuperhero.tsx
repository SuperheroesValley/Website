import Link from "next/link";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export const FormNewSuperhero = () => {
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log("Submitting data");
		// await
	};

	return (
		<div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
			<h1 className="flex-auto text-3xl font-semibold text-slate-900 pb-15 pt-0">
				Aggiungi un nuovo SuperHero
			</h1>

			<form onSubmit={handleSubmit}>
				<div className="space-y-0">
					<div className="border-b border-gray-900/10 pb-12">
						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
							<div className="sm:col-span-3">
								<label
									htmlFor="nome"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Nome
								</label>
								<div className="mt-2">
									<input
										type="text"
										name="nome"
										id="nome"
										autoComplete="nome"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="sm:col-span-3">
								<label
									htmlFor="cognome"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Cognome
								</label>
								<div className="mt-2">
									<input
										type="text"
										name="cognome"
										id="cognome"
										autoComplete="cognome"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
							<div className="col-span-full">
								<label
									htmlFor="photo"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Photo
								</label>
								<div className="mt-2 flex items-center gap-x-3">
									<label>
										<input
											type="file"
											className="text-sm text-grey-500
                                                file:mr-5 file:py-2 file:px-6
                                                file:rounded-full file:border-0
                                                file:text-sm file:font-medium
                                                file:bg-blue-50 file:text-blue-700
                                                hover:file:cursor-pointer hover:file:bg-amber-50
                                                hover:file:text-amber-700
                                            "
										/>
									</label>
								</div>
							</div>
							<div className="sm:col-span-3">
								<label
									htmlFor="azienda"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Azienda
								</label>
								<div className="mt-2">
									<input
										type="text"
										name="azienda"
										id="azienda"
										autoComplete="azienda"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="sm:col-span-4">
								<label
									htmlFor="email"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Linkedin Account
								</label>
								<div className="mt-2">
									<input
										id="linkedin"
										name="linkedin"
										type="text"
										autoComplete="linkedin"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="border-b border-gray-900/10 pb-12">
						<div className="mt-10 space-y-10">
							<fieldset>
								<legend className="text-sm font-semibold leading-6 text-gray-900">
									Role
								</legend>
								<div className="mt-6 space-y-6">
									<div className="relative flex gap-x-3">
										<div className="flex h-6 items-center">
											<input
												id="comments"
												name="comments"
												type="checkbox"
												className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
											/>
										</div>
										<div className="text-sm leading-6">
											<label
												htmlFor="comments"
												className="font-medium text-gray-900"
											>
												Superhero
											</label>
											<p className="text-gray-500">
												È un superhero che ha fatto talk
												da noi e lavora in una big tech
											</p>
										</div>
									</div>
									<div className="relative flex gap-x-3">
										<div className="flex h-6 items-center">
											<input
												id="candidates"
												name="candidates"
												type="checkbox"
												className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
											/>
										</div>
										<div className="text-sm leading-6">
											<label
												htmlFor="candidates"
												className="font-medium text-gray-900"
											>
												Mentor
											</label>
											<p className="text-gray-500">
												È uno dei nostri mentor
											</p>
										</div>
									</div>
									<div className="relative flex gap-x-3">
										<div className="flex h-6 items-center">
											<input
												id="offers"
												name="offers"
												type="checkbox"
												className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
											/>
										</div>
										<div className="text-sm leading-6">
											<label
												htmlFor="offers"
												className="font-medium text-gray-900"
											>
												Past Speaker
											</label>
											<p className="text-gray-500">
												Speaker in uno dei nostri talk
											</p>
										</div>
									</div>
								</div>
							</fieldset>
						</div>
					</div>
				</div>

				<div className="mt-6 flex items-center justify-end gap-x-6">
					<button
						type="button"
						className="text-sm font-semibold leading-6 text-gray-900"
					>
						Cancel
					</button>
					<button
						type="submit"
						className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Save
					</button>
				</div>
			</form>
		</div>
	);
};
