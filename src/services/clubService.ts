import { clubs } from '../data/clubs';
import type { Club } from '../types';

export const clubService = {
  getAll: async (): Promise<Club[]> => [...clubs],
  getById: async (id: string): Promise<Club | undefined> => clubs.find(c => c.id === id),
  getPopular: async (): Promise<Club[]> => [...clubs].sort((a, b) => b.memberCount - a.memberCount).slice(0, 5),
};
