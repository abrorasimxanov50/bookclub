import type { Club } from '../types';

export const clubs: Club[] = [
  { id: 'c1', name: 'The Sci-Fi Explorers', description: 'Journey through the stars and dystopian futures.', banner: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000', memberCount: 154, currentBookId: '29', createdBy: 'u2', isPublic: true, members: ['u1', 'u2', 'u5'], activity: 'High' },
  { id: 'c2', name: 'Classic Literature Society', description: 'Discussing the timeless masterpieces of literature.', banner: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1000', memberCount: 230, currentBookId: '6', createdBy: 'u3', isPublic: true, members: ['u3', 'u6', 'u10'], activity: 'Very High' },
  { id: 'c3', name: 'Mind & Wealth', description: 'Books on personal finance, self-improvement, and psychology.', banner: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1000', memberCount: 89, currentBookId: '11', createdBy: 'u4', isPublic: true, members: ['u1', 'u4', 'u10'], activity: 'Medium' },
  { id: 'c4', name: 'Midnight Thrillers', description: 'For those who love suspense, mystery, and horror.', banner: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=1000', memberCount: 112, currentBookId: '15', createdBy: 'u8', isPublic: true, members: ['u8', 'u9'], activity: 'High' },
  { id: 'c5', name: 'Fantasy Realms', description: 'Dragons, magic, and epic quests.', banner: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000', memberCount: 198, currentBookId: '5', createdBy: 'u5', isPublic: true, members: ['u1', 'u5', 'u9'], activity: 'Very High' }
];
