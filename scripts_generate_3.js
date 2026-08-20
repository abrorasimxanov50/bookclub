const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\Users\\azam\\Documents\\NovaMind AI\\exam-backend';

function writeFile(filePath, content) {
  const fullPath = path.join(rootDir, filePath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(fullPath, content.trim() + '\n', 'utf8');
}

writeFile('src/data/reviews.ts', `
import { Review } from '../types';

export const reviews: Review[] = [
  { id: 'r1', bookId: '1', userId: 'u1', rating: 5, content: 'This book completely changed my morning routine. Highly recommended!', date: '2023-10-01T10:00:00Z', likes: 14 },
  { id: 'r2', bookId: '2', userId: 'u2', rating: 4, content: 'A beautiful and inspiring tale about following your dreams.', date: '2023-09-15T14:30:00Z', likes: 22 },
  { id: 'r3', bookId: '3', userId: 'u5', rating: 5, content: 'The start of an amazing journey. I re-read this every year.', date: '2023-08-20T09:15:00Z', likes: 45 },
  { id: 'r4', bookId: '6', userId: 'u3', rating: 5, content: 'A timeless classic. Mr. Darcy is the ultimate romantic hero.', date: '2023-10-05T16:45:00Z', likes: 56 },
  { id: 'r5', bookId: '7', userId: 'u2', rating: 5, content: 'Terrifyingly relevant even today. A must-read for everyone.', date: '2023-09-10T11:20:00Z', likes: 38 },
  { id: 'r6', bookId: '11', userId: 'u4', rating: 5, content: 'Brilliant insights into how we think about money and wealth.', date: '2023-10-12T08:00:00Z', likes: 29 },
  { id: 'r7', bookId: '14', userId: 'u8', rating: 4, content: 'A solid introduction to Holmes and Watson.', date: '2023-07-18T20:30:00Z', likes: 18 },
  { id: 'r8', bookId: '25', userId: 'u9', rating: 5, content: 'Heartbreaking and beautifully written. Death makes for a fascinating narrator.', date: '2023-10-15T15:00:00Z', likes: 62 },
  { id: 'r9', bookId: '29', userId: 'u2', rating: 5, content: 'The quintessential sci-fi epic. The world-building is unparalleled.', date: '2023-09-25T13:45:00Z', likes: 41 },
  { id: 'r10', bookId: '30', userId: 'u1', rating: 5, content: 'An absolute masterpiece of Uzbek literature. Deeply moving.', date: '2023-10-18T19:20:00Z', likes: 12 },
  { id: 'r11', bookId: '1', userId: 'u4', rating: 4, content: 'Good practical advice, though some points are repeated.', date: '2023-10-05T10:15:00Z', likes: 8 },
  { id: 'r12', bookId: '4', userId: 'u5', rating: 5, content: 'A perfect adventure story for all ages.', date: '2023-08-12T14:00:00Z', likes: 25 },
  { id: 'r13', bookId: '9', userId: 'u6', rating: 5, content: 'Profoundly moving and important literature.', date: '2023-09-02T16:30:00Z', likes: 33 },
  { id: 'r14', bookId: '15', userId: 'u8', rating: 4, content: 'Spooky and atmospheric. The epistolary format works well.', date: '2023-10-31T22:00:00Z', likes: 19 },
  { id: 'r15', bookId: '17', userId: 'u3', rating: 4, content: 'Wonderfully weird and whimsical.', date: '2023-07-25T11:10:00Z', likes: 15 },
  { id: 'r16', bookId: '19', userId: 'u10', rating: 5, content: 'A deep dive into the human psyche. Dostoevsky is a genius.', date: '2023-09-18T09:45:00Z', likes: 27 },
  { id: 'r17', bookId: '21', userId: 'u10', rating: 5, content: 'One of the greatest books ever written. Complex and philosophical.', date: '2023-10-10T13:20:00Z', likes: 31 },
  { id: 'r18', bookId: '26', userId: 'u9', rating: 5, content: 'I cried so much reading this. So powerful and sad.', date: '2023-08-30T17:50:00Z', likes: 44 },
  { id: 'r19', bookId: '27', userId: 'u9', rating: 4, content: 'Couldn\\'t put it down! Very fast-paced and thrilling.', date: '2023-09-05T21:15:00Z', likes: 28 },
  { id: 'r20', bookId: '28', userId: 'u9', rating: 5, content: 'Okay, John Green broke my heart. Amazing book.', date: '2023-10-02T18:40:00Z', likes: 50 }
];
`);

writeFile('src/data/clubs.ts', `
import { Club } from '../types';

export const clubs: Club[] = [
  { id: 'c1', name: 'The Sci-Fi Explorers', description: 'Journey through the stars and dystopian futures.', banner: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000', memberCount: 154, currentBookId: '29', createdBy: 'u2', isPublic: true, members: ['u1', 'u2', 'u5'], activity: 'High' },
  { id: 'c2', name: 'Classic Literature Society', description: 'Discussing the timeless masterpieces of literature.', banner: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1000', memberCount: 230, currentBookId: '6', createdBy: 'u3', isPublic: true, members: ['u3', 'u6', 'u10'], activity: 'Very High' },
  { id: 'c3', name: 'Mind & Wealth', description: 'Books on personal finance, self-improvement, and psychology.', banner: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1000', memberCount: 89, currentBookId: '11', createdBy: 'u4', isPublic: true, members: ['u1', 'u4', 'u10'], activity: 'Medium' },
  { id: 'c4', name: 'Midnight Thrillers', description: 'For those who love suspense, mystery, and horror.', banner: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=1000', memberCount: 112, currentBookId: '15', createdBy: 'u8', isPublic: true, members: ['u8', 'u9'], activity: 'High' },
  { id: 'c5', name: 'Fantasy Realms', description: 'Dragons, magic, and epic quests.', banner: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000', memberCount: 198, currentBookId: '5', createdBy: 'u5', isPublic: true, members: ['u1', 'u5', 'u9'], activity: 'Very High' }
];
`);

writeFile('src/data/challenges.ts', `
import { Challenge } from '../types';

export const challenges: Challenge[] = [
  { id: 'ch1', title: 'Monthly Reader', description: 'Read 4 books this month.', target: 4, current: 2, participants: 1250, deadline: '2023-11-30T23:59:59Z', difficulty: 'Medium', type: 'count', reward: 'Monthly Reader Badge' },
  { id: 'ch2', title: 'Classic Literature Challenge', description: 'Read 3 classic literature books.', target: 3, current: 1, participants: 850, deadline: '2023-12-31T23:59:59Z', difficulty: 'Hard', type: 'genre', reward: 'Classic Scholar Badge' },
  { id: 'ch3', title: '20 Books This Year', description: 'The ultimate yearly reading goal.', target: 20, current: 15, participants: 5400, deadline: '2023-12-31T23:59:59Z', difficulty: 'Hard', type: 'count', reward: 'Bookworm 2023 Badge' },
  { id: 'ch4', title: 'Page Turner Marathon', description: 'Read a total of 1000 pages.', target: 1000, current: 450, participants: 2100, deadline: '2023-11-15T23:59:59Z', difficulty: 'Medium', type: 'pages', reward: 'Marathon Badge' },
  { id: 'ch5', title: 'Genre Explorer', description: 'Read a book from 5 different genres.', target: 5, current: 3, participants: 1800, deadline: '2023-12-15T23:59:59Z', difficulty: 'Easy', type: 'diverse', reward: 'Explorer Badge' }
];
`);

writeFile('src/data/activities.ts', `
import { Activity } from '../types';

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
`);

writeFile('src/data/readerContent.ts', `
export const readerContent = {
  bookId: '6', // Pride and Prejudice
  chapters: [
    { 
      id: 'ch1', 
      title: 'Chapter 1', 
      content: \`It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.

However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered the rightful property of some one or other of their daughters.

"My dear Mr. Bennet," said his lady to him one day, "have you heard that Netherfield Park is let at last?"

Mr. Bennet replied that he had not.

"But it is," returned she; "for Mrs. Long has just been here, and she told me all about it."

Mr. Bennet made no answer.

"Do you not want to know who has taken it?" cried his wife impatiently.

"You want to tell me, and I have no objection to hearing it."

This was invitation enough.

"Why, my dear, you must know, Mrs. Long says that Netherfield is taken by a young man of large fortune from the north of England; that he came down on Monday in a chaise and four to see the place, and was so much delighted with it, that he agreed with Mr. Morris immediately; that he is to take possession before Michaelmas, and some of his servants are to be in the house by the end of next week."

"What is his name?"

"Bingley."

"Is he married or single?"

"Oh! Single, my dear, to be sure! A single man of large fortune; four or five thousand a year. What a fine thing for our girls!"\` 
    },
    { 
      id: 'ch2', 
      title: 'Chapter 2', 
      content: \`Mr. Bennet was among the earliest of those who waited on Mr. Bingley. He had always intended to visit him, though to the last always assuring his wife that he should not go; and till the evening after the visit was paid she had no knowledge of it. It was then disclosed in the following manner. Observing his second daughter employed in trimming a hat, he suddenly addressed her with:

"I hope Mr. Bingley will like it, Lizzy."

"We are not in a way to know what Mr. Bingley likes," said her mother resentfully, "since we are not to visit."

"But you forget, mamma," said Elizabeth, "that we shall meet him at the assemblies, and that Mrs. Long promised to introduce him."

"I do not believe Mrs. Long will do any such thing. She has two nieces of her own. She is a selfish, hypocritical woman, and I have no opinion of her."

"No more have I," said Mr. Bennet; "and I am glad to find that you do not depend on her serving you."

Mrs. Bennet deigned not to make any reply, but, unable to contain herself, began scolding one of her daughters.

"Don't keep coughing so, Kitty, for Heaven's sake! Have a little compassion on my nerves. You tear them to pieces."

"Kitty has no discretion in her coughs," said her father; "she times them ill."\`
    },
    { 
      id: 'ch3', 
      title: 'Chapter 3', 
      content: \`Not all that Mrs. Bennet, however, with the assistance of her five daughters, could ask on the subject, was sufficient to draw from her husband any satisfactory description of Mr. Bingley. They attacked him in various ways—with barefaced questions, ingenious suppositions, and distant surmises; but he eluded the skill of them all, and they were at last obliged to accept the second-hand intelligence of their neighbour, Lady Lucas. Her report was highly favourable. Sir William had been delighted with him. He was quite young, wonderfully handsome, extremely agreeable, and, to crown the whole, he meant to be at the next assembly with a large party. Nothing could be more delightful! To be fond of dancing was a certain step towards falling in love; and very lively hopes of Mr. Bingley's heart were entertained.

"If I can but see one of my daughters happily settled at Netherfield," said Mrs. Bennet to her husband, "and all the others equally well married, I shall have nothing to wish for."

In a few days Mr. Bingley returned Mr. Bennet's visit, and sat about ten minutes with him in his library. He had entertained hopes of being admitted to a sight of the young ladies, of whose beauty he had heard much; but he saw only the father. The ladies were somewhat more fortunate, for they had the advantage of ascertaining from an upper window that he wore a blue coat, and rode a black horse.\`
    }
  ]
};
`);
