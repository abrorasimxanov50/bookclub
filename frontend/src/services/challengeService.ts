import { challenges } from '../data/challenges';
import type { Challenge } from '../types';

export const challengeService = {
  getAll: async (): Promise<Challenge[]> => [...challenges],
  getById: async (id: string): Promise<Challenge | undefined> => challenges.find(c => c.id === id),
  getActive: async (): Promise<Challenge[]> => challenges.filter(c => new Date(c.deadline) > new Date()),
};
