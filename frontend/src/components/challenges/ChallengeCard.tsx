import React from 'react';
import { Target, Users, Calendar } from 'lucide-react';
import { Challenge } from '../../types';
import { Button, ProgressBar, Badge } from '../ui';

export interface ChallengeCardProps {
  challenge: Challenge;
}

const difficultyColors = {
  easy: 'success',
  medium: 'warning',
  hard: 'danger',
} as const;

export const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge }) => {
  const percent = (challenge.currentProgress / challenge.targetProgress) * 100;
  const isCompleted = percent >= 100;

  return (
    <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-5 hover:shadow-md transition-shadow relative overflow-hidden">
      {isCompleted && (
        <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
          Completed
        </div>
      )}
      
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">{challenge.title}</h3>
        <Badge variant={difficultyColors[challenge.difficulty]} className="capitalize">
          {challenge.difficulty}
        </Badge>
      </div>
      
      <p className="text-sm text-stone-600 dark:text-stone-400 mb-5 line-clamp-2">
        {challenge.description}
      </p>

      <div className="mb-5">
        <div className="flex justify-between text-xs text-stone-500 mb-1">
          <span>Progress</span>
          <span>{challenge.currentProgress} / {challenge.targetProgress}</span>
        </div>
        <ProgressBar value={percent} size="md" color={isCompleted ? 'bg-green-500' : 'bg-amber-500'} />
      </div>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100 dark:border-stone-800">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5 text-xs text-stone-500">
            <Users size={14} />
            <span>{challenge.participants} joined</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-stone-500">
            <Calendar size={14} />
            <span>Ends {new Date(challenge.deadline).toLocaleDateString()}</span>
          </div>
        </div>
        
        <Button variant={isCompleted ? 'outline' : 'primary'} size="sm">
          {isCompleted ? 'View Stats' : 'Join'}
        </Button>
      </div>
    </div>
  );
};
