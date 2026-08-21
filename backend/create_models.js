const fs = require('fs');
const path = require('path');

const modelsDir = path.join('c:', 'Users', 'azam', 'Documents', 'NovaMind AI', 'exam-backend', 'backend', 'src', 'models');

if (!fs.existsSync(modelsDir)) {
  fs.mkdirSync(modelsDir, { recursive: true });
}

const models = {
  'User.ts': `import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  username: string;
  email: string;
  password?: string;
  provider?: string;
  providerId?: string;
  avatar?: string;
  bio?: string;
  role: string;
  isVerified: boolean;
  lastActive?: Date;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  provider: { type: String },
  providerId: { type: String },
  avatar: { type: String },
  bio: { type: String },
  role: { type: String, default: 'USER' },
  isVerified: { type: Boolean, default: false },
  lastActive: { type: Date },
}, { timestamps: true });

UserSchema.index({ provider: 1, providerId: 1 }, { unique: true, sparse: true });

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
`,

  'Author.ts': `import mongoose, { Schema, Document } from 'mongoose';

export interface IAuthor extends Document {
  name: string;
  slug: string;
  bio?: string;
  photo?: string;
  dateOfBirth?: Date;
  dateOfDeath?: Date;
  nationality?: string;
}

const AuthorSchema: Schema = new Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  bio: { type: String },
  photo: { type: String },
  dateOfBirth: { type: Date },
  dateOfDeath: { type: Date },
  nationality: { type: String },
}, { timestamps: true });

export default mongoose.models.Author || mongoose.model<IAuthor>('Author', AuthorSchema);
`,

  'Category.ts': `import mongoose, { Schema, Document } from 'mongoose';

export interface ICategory extends Document {
  name: string;
  slug: string;
  description?: string;
}

const CategorySchema: Schema = new Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String },
}, { timestamps: true });

export default mongoose.models.Category || mongoose.model<ICategory>('Category', CategorySchema);
`,

  'Book.ts': `import mongoose, { Schema, Document } from 'mongoose';

export interface IBook extends Document {
  title: string;
  slug: string;
  description?: string;
  coverUrl?: string;
  pageCount?: number;
  language?: string;
  publishedYear?: number;
  publisher?: string;
  authorId: mongoose.Types.ObjectId;
  categoryId: mongoose.Types.ObjectId;
  averageRating: number;
  ratingCount: number;
  reviewCount: number;
  isPublished: boolean;
}

const BookSchema: Schema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String },
  coverUrl: { type: String },
  pageCount: { type: Number },
  language: { type: String },
  publishedYear: { type: Number },
  publisher: { type: String },
  authorId: { type: Schema.Types.ObjectId, ref: 'Author', required: true },
  categoryId: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  averageRating: { type: Number, default: 0 },
  ratingCount: { type: Number, default: 0 },
  reviewCount: { type: Number, default: 0 },
  isPublished: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.models.Book || mongoose.model<IBook>('Book', BookSchema);
`,

  'LibraryItem.ts': `import mongoose, { Schema, Document } from 'mongoose';

export interface ILibraryItem extends Document {
  userId: mongoose.Types.ObjectId;
  bookId: mongoose.Types.ObjectId;
  status: string;
  addedAt: Date;
}

const LibraryItemSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  bookId: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  status: { type: String, default: 'WANT_TO_READ' },
  addedAt: { type: Date, default: Date.now },
}, { timestamps: true });

LibraryItemSchema.index({ userId: 1, bookId: 1 }, { unique: true });

export default mongoose.models.LibraryItem || mongoose.model<ILibraryItem>('LibraryItem', LibraryItemSchema);
`,

  'ReadingProgress.ts': `import mongoose, { Schema, Document } from 'mongoose';

export interface IReadingProgress extends Document {
  userId: mongoose.Types.ObjectId;
  bookId: mongoose.Types.ObjectId;
  currentPage: number;
  totalPages: number;
  progressPercent: number;
  lastReadAt?: Date;
  completedAt?: Date;
}

const ReadingProgressSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  bookId: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  currentPage: { type: Number, default: 0 },
  totalPages: { type: Number, required: true },
  progressPercent: { type: Number, default: 0 },
  lastReadAt: { type: Date },
  completedAt: { type: Date },
}, { timestamps: true });

ReadingProgressSchema.index({ userId: 1, bookId: 1 }, { unique: true });

export default mongoose.models.ReadingProgress || mongoose.model<IReadingProgress>('ReadingProgress', ReadingProgressSchema);
`,

  'Favorite.ts': `import mongoose, { Schema, Document } from 'mongoose';

export interface IFavorite extends Document {
  userId: mongoose.Types.ObjectId;
  bookId: mongoose.Types.ObjectId;
}

const FavoriteSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  bookId: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
}, { timestamps: true });

FavoriteSchema.index({ userId: 1, bookId: 1 }, { unique: true });

export default mongoose.models.Favorite || mongoose.model<IFavorite>('Favorite', FavoriteSchema);
`,

  'Review.ts': `import mongoose, { Schema, Document } from 'mongoose';

export interface IReview extends Document {
  userId: mongoose.Types.ObjectId;
  bookId: mongoose.Types.ObjectId;
  rating: number;
  comment: string;
}

const ReviewSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  bookId: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
}, { timestamps: true });

ReviewSchema.index({ userId: 1, bookId: 1 }, { unique: true });

export default mongoose.models.Review || mongoose.model<IReview>('Review', ReviewSchema);
`,

  'Rating.ts': `import mongoose, { Schema, Document } from 'mongoose';

export interface IRating extends Document {
  userId: mongoose.Types.ObjectId;
  bookId: mongoose.Types.ObjectId;
  rating: number;
}

const RatingSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  bookId: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  rating: { type: Number, required: true },
}, { timestamps: true });

RatingSchema.index({ userId: 1, bookId: 1 }, { unique: true });

export default mongoose.models.Rating || mongoose.model<IRating>('Rating', RatingSchema);
`,

  'Challenge.ts': `import mongoose, { Schema, Document } from 'mongoose';

export interface IChallenge extends Document {
  title: string;
  description?: string;
  goal: number;
  period: string;
  startDate: Date;
  endDate: Date;
  coverUrl?: string;
  createdById: mongoose.Types.ObjectId;
}

const ChallengeSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  goal: { type: Number, required: true },
  period: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  coverUrl: { type: String },
  createdById: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

export default mongoose.models.Challenge || mongoose.model<IChallenge>('Challenge', ChallengeSchema);
`,

  'ChallengeMember.ts': `import mongoose, { Schema, Document } from 'mongoose';

export interface IChallengeMember extends Document {
  challengeId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  progress: number;
  joinedAt: Date;
  completedAt?: Date;
}

const ChallengeMemberSchema: Schema = new Schema({
  challengeId: { type: Schema.Types.ObjectId, ref: 'Challenge', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  progress: { type: Number, default: 0 },
  joinedAt: { type: Date, default: Date.now },
  completedAt: { type: Date },
}, { timestamps: true });

ChallengeMemberSchema.index({ challengeId: 1, userId: 1 }, { unique: true });

export default mongoose.models.ChallengeMember || mongoose.model<IChallengeMember>('ChallengeMember', ChallengeMemberSchema);
`,

  'Club.ts': `import mongoose, { Schema, Document } from 'mongoose';

export interface IClub extends Document {
  name: string;
  slug: string;
  description?: string;
  coverUrl?: string;
  createdById: mongoose.Types.ObjectId;
}

const ClubSchema: Schema = new Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String },
  coverUrl: { type: String },
  createdById: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

export default mongoose.models.Club || mongoose.model<IClub>('Club', ClubSchema);
`,

  'ClubMember.ts': `import mongoose, { Schema, Document } from 'mongoose';

export interface IClubMember extends Document {
  clubId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  role: string;
  joinedAt: Date;
}

const ClubMemberSchema: Schema = new Schema({
  clubId: { type: Schema.Types.ObjectId, ref: 'Club', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  role: { type: String, default: 'MEMBER' },
  joinedAt: { type: Date, default: Date.now },
}, { timestamps: true });

ClubMemberSchema.index({ clubId: 1, userId: 1 }, { unique: true });

export default mongoose.models.ClubMember || mongoose.model<IClubMember>('ClubMember', ClubMemberSchema);
`,

  'Discussion.ts': `import mongoose, { Schema, Document } from 'mongoose';

export interface IDiscussion extends Document {
  clubId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  title: string;
  content: string;
}

const DiscussionSchema: Schema = new Schema({
  clubId: { type: Schema.Types.ObjectId, ref: 'Club', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Discussion || mongoose.model<IDiscussion>('Discussion', DiscussionSchema);
`,

  'Comment.ts': `import mongoose, { Schema, Document } from 'mongoose';

export interface IComment extends Document {
  discussionId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  content: string;
}

const CommentSchema: Schema = new Schema({
  discussionId: { type: Schema.Types.ObjectId, ref: 'Discussion', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Comment || mongoose.model<IComment>('Comment', CommentSchema);
`,

  'UserFollow.ts': `import mongoose, { Schema, Document } from 'mongoose';

export interface IUserFollow extends Document {
  followerId: mongoose.Types.ObjectId;
  followingId: mongoose.Types.ObjectId;
}

const UserFollowSchema: Schema = new Schema({
  followerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  followingId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

UserFollowSchema.index({ followerId: 1, followingId: 1 }, { unique: true });

export default mongoose.models.UserFollow || mongoose.model<IUserFollow>('UserFollow', UserFollowSchema);
`,

  'Activity.ts': `import mongoose, { Schema, Document } from 'mongoose';

export interface IActivity extends Document {
  userId: mongoose.Types.ObjectId;
  type: string;
  data: string;
}

const ActivitySchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  data: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Activity || mongoose.model<IActivity>('Activity', ActivitySchema);
`,

  'Notification.ts': `import mongoose, { Schema, Document } from 'mongoose';

export interface INotification extends Document {
  userId: mongoose.Types.ObjectId;
  type: string;
  title: string;
  message: string;
  data?: string;
  isRead: boolean;
}

const NotificationSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  title: { type: String, required: true },
  message: { type: String, required: true },
  data: { type: String },
  isRead: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.models.Notification || mongoose.model<INotification>('Notification', NotificationSchema);
`,

  'BookContent.ts': `import mongoose, { Schema, Document } from 'mongoose';

export interface IBookContent extends Document {
  bookId: mongoose.Types.ObjectId;
  chapterNumber: number;
  title: string;
  content: string;
}

const BookContentSchema: Schema = new Schema({
  bookId: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  chapterNumber: { type: Number, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
}, { timestamps: true });

BookContentSchema.index({ bookId: 1, chapterNumber: 1 }, { unique: true });

export default mongoose.models.BookContent || mongoose.model<IBookContent>('BookContent', BookContentSchema);
`
};

for (const [filename, code] of Object.entries(models)) {
  fs.writeFileSync(path.join(modelsDir, filename), code);
}
console.log('Created all models in', modelsDir);
