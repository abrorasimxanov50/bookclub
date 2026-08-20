import React from 'react';
import { Activity } from '../../types';
import { ActivityItem } from './ActivityItem';
import { EmptyState } from '../ui';
import { MessageSquareOff } from 'lucide-react';

export interface ActivityFeedProps {
  activities: Activity[];
}

export const ActivityFeed: React.FC<ActivityFeedProps> = ({ activities }) => {
  if (!activities || activities.length === 0) {
    return (
      <EmptyState
        icon={MessageSquareOff}
        title="No activity yet"
        description="Follow some users or join clubs to see activity here."
      />
    );
  }

  return (
    <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl overflow-hidden shadow-sm">
      <div className="p-4 border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/50">
        <h3 className="font-semibold text-stone-900 dark:text-stone-100">Recent Activity</h3>
      </div>
      <div className="divide-y divide-stone-100 dark:divide-stone-800/50">
        {activities.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
};
