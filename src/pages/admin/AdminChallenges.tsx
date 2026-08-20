import React from 'react';
import { Plus, Edit2, Trash2, Calendar } from 'lucide-react';

const mockChallenges = [
  { id: '1', title: '2026 Reading Challenge', participants: 4500, startDate: '2026-01-01', endDate: '2026-12-31', status: 'active' },
  { id: '2', title: 'Summer Sci-Fi Marathon', participants: 1200, startDate: '2026-06-01', endDate: '2026-08-31', status: 'active' },
  { id: '3', title: 'Spooky October Reads', participants: 0, startDate: '2026-10-01', endDate: '2026-10-31', status: 'upcoming' },
];

export const AdminChallenges = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-inter">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-stone-900 dark:text-stone-100 font-lora">Manage Challenges</h1>
          <p className="text-stone-600 dark:text-stone-400 mt-1">Create and manage reading challenges</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors">
          <Plus className="w-5 h-5" /> Create Challenge
        </button>
      </div>

      <div className="bg-white dark:bg-stone-900 rounded-xl shadow-sm border border-stone-200 dark:border-stone-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-stone-600 dark:text-stone-400">
            <thead className="bg-stone-50 dark:bg-stone-800/50 text-stone-900 dark:text-stone-100 uppercase font-medium">
              <tr>
                <th className="px-6 py-4">Challenge Title</th>
                <th className="px-6 py-4">Duration</th>
                <th className="px-6 py-4">Participants</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
              {mockChallenges.map((challenge) => (
                <tr key={challenge.id} className="hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-stone-900 dark:text-stone-100">{challenge.title}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-stone-500">
                      <Calendar className="w-4 h-4" />
                      <span>{challenge.startDate} to {challenge.endDate}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium">{challenge.participants.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium capitalize ${challenge.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'}`}>
                      {challenge.status}
                    </span>
                  </td>
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
      </div>
    </div>
  );
};

export default AdminChallenges;
