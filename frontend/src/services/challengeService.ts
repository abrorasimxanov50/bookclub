import api from './api';
import { challenges as mockChallenges } from '../data/challenges';

export const challengeService = {
  getAll: async () => {
    try {
      const response = await api.get('/challenges');
      return response.data.data && response.data.data.length > 0 ? response.data.data : mockChallenges;
    } catch {
      return mockChallenges;
    }
  },

  getById: async (id: string) => {
    try {
      const response = await api.get(`/challenges/${id}`);
      return response.data.data;
    } catch {
      return mockChallenges.find(c => c.id === id);
    }
  },

  join: async (id: string) => {
    const response = await api.post(`/challenges/${id}/join`);
    return response.data;
  }
};
