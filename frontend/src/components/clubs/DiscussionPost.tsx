import React from 'react';
import { MessageSquare, Heart } from 'lucide-react';
import { Avatar } from '../ui';

export interface PostData {
  id: string;
  userId: string;
  username: string;
  avatarUrl?: string;
  title: string;
  content: string;
  likes: number;
  commentsCount: number;
  createdAt: string;
}

export interface DiscussionPostProps {
  post: PostData;
}

export const DiscussionPost: React.FC<DiscussionPostProps> = ({ post }) => {
  return (
    <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-5 mb-4 hover:border-stone-300 dark:hover:border-stone-700 transition-colors">
      <div className="flex items-center gap-3 mb-3">
        <Avatar src={post.avatarUrl} alt={post.username} size="sm" />
        <div>
          <h4 className="text-sm font-medium text-stone-900 dark:text-stone-100">{post.username}</h4>
          <span className="text-xs text-stone-500">{new Date(post.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
      
      <h3 className="font-semibold text-lg text-stone-900 dark:text-stone-100 mb-2">{post.title}</h3>
      <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-3 mb-4">
        {post.content}
      </p>
      
      <div className="flex items-center gap-4 border-t border-stone-100 dark:border-stone-800 pt-3">
        <button className="flex items-center gap-1.5 text-xs font-medium text-stone-500 hover:text-red-500 transition-colors">
          <Heart size={16} />
          <span>{post.likes}</span>
        </button>
        <button className="flex items-center gap-1.5 text-xs font-medium text-stone-500 hover:text-amber-600 transition-colors">
          <MessageSquare size={16} />
          <span>{post.commentsCount} Comments</span>
        </button>
      </div>
    </div>
  );
};
