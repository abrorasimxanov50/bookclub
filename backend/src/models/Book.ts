import mongoose, { Schema, Document } from 'mongoose';

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
  createdAt: Date;
  updatedAt: Date;
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
