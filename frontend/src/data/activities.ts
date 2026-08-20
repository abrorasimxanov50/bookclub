import type { Activity } from '../types';

export const activities: Activity[] = [
  { id: 'ac1', userId: 'u1', type: 'finished_book', bookId: '1', date: '2023-10-18T10:00:00Z' },
  { id: 'ac2', userId: 'u2', type: 'joined_club', clubId: 'c1', date: '2023-10-18T09:30:00Z' },
  { id: 'ac3', userId: 'u3', type: 'wrote_review', bookId: '6', content: 'A timeless classic. Mr. Darcy is the ultimate romantic hero.', date: '2023-10-17T16:45:00Z' },
  { id: 'ac4', userId: 'u5', type: 'joined_challenge', challengeId: 'ch1', date: '2023-10-17T14:20:00Z' },
  { id: 'ac5', userId: 'u4', type: 'finished_book', bookId: '11', date: '2023-10-16T11:10:00Z' },
  { id: 'ac6', userId: 'u8', type: 'created_club', clubId: 'c4', date: '2023-10-15T20:00:00Z' },
  { id: 'ac7', userId: 'u9', type: 'wrote_review', bookId: '28', content: 'Okay, John Green broke my heart. Amazing book.', date: '2023-10-15T18:40:00Z' },
  { id: 'ac8', userId: 'u10', type: 'finished_book', bookId: '21', date: '2023-10-14T13:20:00Z' },
  { id: 'ac9', userId: 'u1', type: 'joined_challenge', challengeId: 'ch3', date: '2023-10-13T09:15:00Z' },
  { id: 'ac10', userId: 'u2', type: 'wrote_review', bookId: '29', content: 'The quintessential sci-fi epic. The world-building is unparalleled.', date: '2023-10-12T13:45:00Z' },
  { id: 'ac11', userId: 'u5', type: 'finished_book', bookId: '4', date: '2023-10-11T14:00:00Z' },
  { id: 'ac12', userId: 'u6', type: 'joined_club', clubId: 'c2', date: '2023-10-10T16:30:00Z' },
  { id: 'ac13', userId: 'u3', type: 'finished_book', bookId: '17', date: '2023-10-09T11:10:00Z' },
  { id: 'ac14', userId: 'u9', type: 'joined_club', clubId: 'c5', date: '2023-10-08T17:50:00Z' },
  { id: 'ac15', userId: 'u10', type: 'wrote_review', bookId: '19', content: 'A deep dive into the human psyche. Dostoevsky is a genius.', date: '2023-10-07T09:45:00Z' },
  { id: 'ac16', userId: 'u8', type: 'finished_book', bookId: '14', date: '2023-10-06T20:30:00Z' },
  { id: 'ac17', userId: 'u4', type: 'joined_challenge', challengeId: 'ch5', date: '2023-10-05T10:15:00Z' },
  { id: 'ac18', userId: 'u1', type: 'wrote_review', bookId: '30', content: 'An absolute masterpiece of Uzbek literature. Deeply moving.', date: '2023-10-04T19:20:00Z' },
  { id: 'ac19', userId: 'u2', type: 'finished_book', bookId: '7', date: '2023-10-03T11:20:00Z' },
  { id: 'ac20', userId: 'u5', type: 'joined_club', clubId: 'c1', date: '2023-10-02T14:20:00Z' }
];
