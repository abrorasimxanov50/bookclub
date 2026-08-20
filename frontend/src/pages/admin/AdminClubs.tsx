import React from 'react';
import { Search, Trash2, Edit2, ShieldAlert } from 'lucide-react';

const mockClubs = [
  { id: '1', name: 'The Classics Club', owner: 'Alice Smith', members: 154, created: '2025-05-10', status: 'active' },
  { id: '2', name: 'Sci-Fi Explorers', owner: 'Bob Jones', members: 342, created: '2025-08-22', status: 'active' },
  { id: '3', name: 'Controversial Topics', owner: 'Charlie Brown', members: 45, created: '2026-07-01', status: 'flagged' },
];

export const AdminClubs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-inter">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-stone-900 dark:text-stone-100 font-lora">Manage Book Clubs</h1>
        <p className="text-stone-600 dark:text-stone-400 mt-1">Oversee user-created clubs and communities</p>
      </div>

      <div className="bg-white dark:bg-stone-900 rounded-xl shadow-sm border border-stone-200 dark:border-stone-800 overflow-hidden">
        <div className="p-4 border-b border-stone-200 dark:border-stone-800">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
            <input 
              type="text" 
              placeholder="Search clubs by name or owner..." 
              className="w-full pl-10 pr-4 py-2 border border-stone-300 dark:border-stone-700 rounded-lg bg-stone-50 dark:bg-stone-800/50 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-stone-600 dark:text-stone-400">
            <thead className="bg-stone-50 dark:bg-stone-800/50 text-stone-900 dark:text-stone-100 uppercase font-medium">
              <tr>
                <th className="px-6 py-4">Club Name</th>
                <th className="px-6 py-4">Owner</th>
                <th className="px-6 py-4">Members</th>
                <th className="px-6 py-4">Created</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
              {mockClubs.map((club) => (
                <tr key={club.id} className="hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-stone-900 dark:text-stone-100">{club.name}</td>
                  <td className="px-6 py-4">{club.owner}</td>
                  <td className="px-6 py-4">{club.members}</td>
                  <td className="px-6 py-4">{club.created}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium capitalize ${club.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'}`}>
                      {club.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex justify-end gap-2">
                    {club.status === 'flagged' && (
                      <button title="Review Flags" className="p-2 text-stone-400 hover:text-yellow-500 transition-colors">
                        <ShieldAlert className="w-4 h-4" />
                      </button>
                    )}
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
      </div>
    </div>
  );
};

export default AdminClubs;
