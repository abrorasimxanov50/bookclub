export interface Book {
  id: string;
  title: string;
  authorId: string;
  description: string;
  cover: string;
  coverColor: string;
  genre: string[];
  rating: number;
  reviewCount: number;
  pageCount: number;
  language: string;
  publishedYear: number;
  publisher: string;
  isbn: string;
  status: 'available' | 'reading' | 'read' | 'want-to-read';
}

export interface Author {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  bookCount: number;
  nationality: string;
}

export interface User {
  id: string;
  username: string;
  name: string;
  email: string;
  avatar: string;
  bio: string;
  booksRead: number;
  readingStreak: number;
  followers: number;
  following: number;
  joinedDate: string;
  xp: number;
}

export interface Review {
  id: string;
  bookId: string;
  userId: string;
  rating: number;
  content: string;
  date: string;
  likes: number;
}

export interface Club {
  id: string;
  name: string;
  description: string;
  banner: string;
  memberCount: number;
  currentBookId: string;
  createdBy: string;
  isPublic: boolean;
  members: string[]; // user ids
  activity: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  target: number;
  current: number;
  participants: number;
  deadline: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  type: string;
  reward: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  bookCount: number;
  icon: string;
}

export interface Activity {
  id: string;
  userId: string;
  type: 'finished_book' | 'wrote_review' | 'joined_challenge' | 'created_club' | 'joined_club';
  bookId?: string;
  clubId?: string;
  challengeId?: string;
  content?: string;
  date: string;
}

export interface ReaderSettings {
  fontSize: number;
  lineSpacing: 'tight' | 'comfortable' | 'loose';
  theme: 'light' | 'dark' | 'sepia';
  width: 'narrow' | 'medium' | 'wide';
}

export interface ReadingProgress {
  bookId: string;
  currentPage: number;
  totalPages: number;
  percentage: number;
  lastRead: string;
  chapterId?: string;
}
