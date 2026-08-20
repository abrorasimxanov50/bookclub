import React from 'react';
import { Plus, Edit2, Trash2, Search } from 'lucide-react';

const mockBooks = [
  { id: '1', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isbn: '9780743273565', addedAt: '2026-08-01' },
  { id: '2', title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '9780060935467', addedAt: '2026-08-05' },
  { id: '3', title: '1984', author: 'George Orwell', isbn: '9780451524935', addedAt: '2026-08-10' },
];

export const AdminBooks = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-inter">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-stone-900 dark:text-stone-100 font-lora">Manage Books</h1>
          <p className="text-stone-600 dark:text-stone-400 mt-1">Add, edit, or remove books from the platform</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors">
          <Plus className="w-5 h-5" /> Add Book
        </button>
      </div>

      <div className="bg-white dark:bg-stone-900 rounded-xl shadow-sm border border-stone-200 dark:border-stone-800 overflow-hidden">
        <div className="p-4 border-b border-stone-200 dark:border-stone-800">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
            <input 
              type="text" 
              placeholder="Search books by title, author, or ISBN..." 
              className="w-full pl-10 pr-4 py-2 border border-stone-300 dark:border-stone-700 rounded-lg bg-stone-50 dark:bg-stone-800/50 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-stone-600 dark:text-stone-400">
            <thead className="bg-stone-50 dark:bg-stone-800/50 text-stone-900 dark:text-stone-100 uppercase font-medium">
              <tr>
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Author</th>
                <th className="px-6 py-4">ISBN</th>
                <th className="px-6 py-4">Date Added</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
              {mockBooks.map((book) => (
                <tr key={book.id} className="hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-stone-900 dark:text-stone-100">{book.title}</td>
                  <td className="px-6 py-4">{book.author}</td>
                  <td className="px-6 py-4">{book.isbn}</td>
                  <td className="px-6 py-4">{book.addedAt}</td>
                  <td className="px-6 py-4 flex justify-end gap-2">
                    <button className="p-2 text-stone-400 hover:text-blue-500 transition-colors">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-stone-400 hover:text-red-500 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between text-sm">
          <span className="text-stone-500 dark:text-stone-400">Showing 1 to 3 of 4,203 entries</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-stone-200 dark:border-stone-700 rounded text-stone-500 hover:bg-stone-50 dark:hover:bg-stone-800 disabled:opacity-50">Prev</button>
            <button className="px-3 py-1 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-500 font-medium rounded">1</button>
            <button className="px-3 py-1 border border-stone-200 dark:border-stone-700 rounded text-stone-500 hover:bg-stone-50 dark:hover:bg-stone-800">2</button>
            <button className="px-3 py-1 border border-stone-200 dark:border-stone-700 rounded text-stone-500 hover:bg-stone-50 dark:hover:bg-stone-800">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBooks;
