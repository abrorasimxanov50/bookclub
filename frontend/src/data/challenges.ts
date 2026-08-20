import type { Challenge } from '../types';

export const challenges: Challenge[] = [
  { id: 'ch1', title: 'Monthly Reader', description: 'Read 4 books this month.', target: 4, current: 2, participants: 1250, deadline: '2023-11-30T23:59:59Z', difficulty: 'Medium', type: 'count', reward: 'Monthly Reader Badge' },
  { id: 'ch2', title: 'Classic Literature Challenge', description: 'Read 3 classic literature books.', target: 3, current: 1, participants: 850, deadline: '2023-12-31T23:59:59Z', difficulty: 'Hard', type: 'genre', reward: 'Classic Scholar Badge' },
  { id: 'ch3', title: '20 Books This Year', description: 'The ultimate yearly reading goal.', target: 20, current: 15, participants: 5400, deadline: '2023-12-31T23:59:59Z', difficulty: 'Hard', type: 'count', reward: 'Bookworm 2023 Badge' },
  { id: 'ch4', title: 'Page Turner Marathon', description: 'Read a total of 1000 pages.', target: 1000, current: 450, participants: 2100, deadline: '2023-11-15T23:59:59Z', difficulty: 'Medium', type: 'pages', reward: 'Marathon Badge' },
  { id: 'ch5', title: 'Genre Explorer', description: 'Read a book from 5 different genres.', target: 5, current: 3, participants: 1800, deadline: '2023-12-15T23:59:59Z', difficulty: 'Easy', type: 'diverse', reward: 'Explorer Badge' }
];
