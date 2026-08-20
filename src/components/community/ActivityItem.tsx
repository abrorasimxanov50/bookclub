import React from 'react';
import { Heart, MessageCircle } from 'lucide-react';
import { Activity } from '../../types';
import { Avatar } from '../ui';

export interface ActivityItemProps {
  activity: Activity;
}

export const ActivityItem: React.FC<ActivityItemProps> = ({ activity }) => {
  return (
    <div className="flex gap-4 p-4 border-b border-stone-100 dark:border-stone-800/50 last:border-0 hover:bg-stone-50 dark:hover:bg-stone-800/20 transition-colors">
      <Avatar src={activity.avatarUrl} alt={activity.username} size="md" className="mt-1" />
      <div className="flex-1">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="font-semibold text-stone-900 dark:text-stone-100 text-sm">{activity.username}</span>
          <span className="text-stone-600 dark:text-stone-400 text-sm" dangerouslySetInnerHTML={{ __html: activity.action }} />
        </div>
        <span className="text-xs text-stone-500 block mb-3">
          {new Date(activity.timestamp).toLocaleString(undefined, {
            month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit'
          })}
        </span>
        
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1.5 text-xs font-medium text-stone-500 hover:text-red-500 transition-colors">
            <Heart size={14} />
            <span>{activity.likes}</span>
          </button>
          <button className="flex items-center gap-1.5 text-xs font-medium text-stone-500 hover:text-blue-500 transition-colors">
            <MessageCircle size={14} />
            <span>{activity.comments}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
