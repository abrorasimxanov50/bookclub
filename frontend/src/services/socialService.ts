import api from './api';

export const socialService = {
  getLeaderboard: async () => {
    try {
      const response = await api.get('/leaderboard');
      return response.data.data || response.data;
    } catch (e) {
      return [];
    }
  }
};

export const challengeService = {
  getAll: async () => {
    try {
      const response = await api.get('/challenges');
      return response.data.data || response.data;
    } catch (e) {
      return [];
    }
  },
  getById: async (id: string) => {
    const response = await api.get(`/challenges/${id}`);
    return response.data.data || response.data;
  },
  join: async (id: string) => {
    const response = await api.post(`/challenges/${id}/join`);
    return response.data;
  }
};
