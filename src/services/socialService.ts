import api from './api';

export const clubService = {
  getAll: async () => {
    try {
      const res = await api.get('/clubs');
      return res.data.data;
    } catch (e) { return []; }
  },
  join: async (id: string) => {
    const res = await api.post(`/clubs/${id}/join`);
    return res.data.data;
  },
};

export const challengeService = {
  getAll: async () => {
    try {
      const res = await api.get('/challenges');
      return res.data.data;
    } catch (e) { return []; }
  },
  join: async (id: string) => {
    const res = await api.post(`/challenges/${id}/join`);
    return res.data.data;
  },
};

export const leaderboardService = {
  get: async (period = 'weekly') => {
    try {
      const res = await api.get(`/leaderboard?period=${period}`);
      return res.data.data;
    } catch (e) { return []; }
  },
};

export const userService = {
  getMe: async () => {
    try {
      const res = await api.get('/users/me');
      return res.data.data;
    } catch (e) { return null; }
  },
  updateProfile: async (data: any) => {
    const res = await api.patch('/users/me', data);
    return res.data.data;
  },
};
