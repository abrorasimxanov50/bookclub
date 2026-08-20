import React from 'react';
import { Search, Trash2, ExternalLink, Star } from 'lucide-react';

const mockReviews = [
  { id: '1', user: 'Alice Smith', book: 'The Great Gatsby', rating: 5, content: 'An absolute masterpiece. The prose is beautiful and haunting.', date: '2026-08-12', status: 'published' },
  { id: '2', user: 'Bob Jones', book: '1984', rating: 4, content: 'Still relevant today. A bit slow in the middle but a must-read.', date: '2026-08-11', status: 'published' },
  { id: '3', user: 'Charlie Brown', book: 'Dune', rating: 1, content: 'Spam review with inappropriate links http://example.com', date: '2026-08-10', status: 'flagged' },
];

export const AdminReviews = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-inter">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-stone-900 dark:text-stone-100 font-lora">Moderate Reviews</h1>
        <p className="text-stone-600 dark:text-stone-400 mt-1">Review flagged content and manage user reviews</p>
      </div>

      <div className="bg-white dark:bg-stone-900 rounded-xl shadow-sm border border-stone-200 dark:border-stone-800 overflow-hidden">
        <div className="p-4 border-b border-stone-200 dark:border-stone-800">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
            <input 
              type="text" 
              placeholder="Search reviews by user or book..." 
              className="w-full pl-10 pr-4 py-2 border border-stone-300 dark:border-stone-700 rounded-lg bg-stone-50 dark:bg-stone-800/50 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-stone-600 dark:text-stone-400">
            <thead className="bg-stone-50 dark:bg-stone-800/50 text-stone-900 dark:text-stone-100 uppercase font-medium">
              <tr>
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Book</th>
                <th className="px-6 py-4">Review</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
              {mockReviews.map((review) => (
                <tr key={review.id} className="hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-stone-900 dark:text-stone-100 whitespace-nowrap">{review.user}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{review.book}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 mb-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'fill-current' : 'text-stone-300 dark:text-stone-700'}`} />
                      ))}
                    </div>
                    <p className="line-clamp-2 text-stone-600 dark:text-stone-400 max-w-md">{review.content}</p>
                    <span className="text-xs text-stone-500 mt-1 block">{review.date}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium capitalize ${review.status === 'published' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'}`}>
                      {review.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex justify-end gap-2 whitespace-nowrap h-full items-center">
                    <button title="View Full" className="p-2 text-stone-400 hover:text-blue-500 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button title="Delete Review" className="p-2 text-stone-400 hover:text-red-500 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminReviews;
