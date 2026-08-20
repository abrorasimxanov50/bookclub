import api from './api';

export const adminService = {
  getStats: async () => {
    try {
      const res = await api.get('/admin/stats');
      return res.data.data;
    } catch (e) {
      return null;
    }
  },
  getUsers: async () => {
    try {
      const res = await api.get('/admin/users');
      return res.data.data;
    } catch (e) {
      return [];
    }
  },
  deleteUser: async (id: string) => {
    try {
      const res = await api.delete(`/admin/users/${id}`);
      return res.data;
    } catch (e) {
      throw e;
    }
  }
};
