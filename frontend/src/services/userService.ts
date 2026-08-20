import { users } from '../data/users';
import type { User } from '../types';

export const userService = {
  getAll: async (): Promise<User[]> => [...users],
  getById: async (id: string): Promise<User | undefined> => users.find(u => u.id === id),
  getTopReaders: async (): Promise<User[]> => [...users].sort((a, b) => b.booksRead - a.booksRead).slice(0, 5),
};
