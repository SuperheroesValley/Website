import type { NextPage } from "next";
import { Footer } from "../components/Footer";
import { HeaderBase } from "../components/HeaderBase";
import { useState } from "react";

// Sample data for books
const books = [

  {
    id: "book1",
    title: "Designing Data-Intensive Applications",
    chapters: [
      { date: "2025-12-03", chapter: "Chapter 1: Reliable, Scalable, and Maintainable Applications", responsible: "Luca" },
      { date: "2025-12-10", chapter: "Chapter 2: Data Models and Query Languages", responsible: "Stefano" },
      { date: "2025-12-17", chapter: "Chapter 3: Storage and Retrieval", responsible: "Alessandro" },
      { date: "2025-12-24", chapter: "Chapter 4: Encoding and Evolution", responsible: "Emanuele" },
    ]
  },
] as const;

// Define types for better type safety
type Chapter = {
  date: string;
  chapter: string;
  responsible: string;
};

type Book = {
  id: string;
  title: string;
  chapters: Chapter[];
};

const BookClub: NextPage = () => {
  // Initialize with the first book's ID
  const [selectedBook, setSelectedBook] = useState<string>(books[0].id);

  // Get the currently selected book with type safety
  const currentBook = books.find(book => book.id === selectedBook) || books[0];

  return (
    <div>
      <div className="relative pt-6 pb-16 sm:pb-24 overflow-hidden">
        <HeaderBase />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Book Selection Menu */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Select a Book</h2>
          <div className="flex flex-wrap gap-4">
            {books.map((book) => (
              <button
                key={book.id}
                onClick={() => setSelectedBook(book.id)}
                className={`px-6 py-2 rounded-lg text-white font-medium ${selectedBook === book.id ? 'bg-blue-600' : 'bg-gray-500 hover:bg-gray-600'}`}
              >
                {book.title}
              </button>
            ))}
          </div>
        </div>

        {/* Description Section */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Our Book Club</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to our Book Club initiative! Here at Superhero Valley, we believe in continuous learning and growth.
            Our book club is a space where we come together to read and discuss books that help us become better professionals
            and better people. Each week, we will read a chapter and discuss it, with one person taking the lead to guide
            the conversation. Join us in this journey of knowledge and collaboration!
          </p>
        </div>

        {/* Chapters Table */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {currentBook.title} - Reading Schedule
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Chapter
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Responsible
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentBook.chapters.map((chapter, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {chapter.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {chapter.chapter}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {chapter.responsible}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookClub;