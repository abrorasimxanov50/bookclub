import mongoose, { Schema, Document } from 'mongoose';

export interface IBookContent extends Document {
  bookId: mongoose.Types.ObjectId;
  chapterNumber: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const BookContentSchema: Schema = new Schema({
  bookId: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  chapterNumber: { type: Number, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
}, { timestamps: true });

BookContentSchema.index({ bookId: 1, chapterNumber: 1 }, { unique: true });

export default mongoose.models.BookContent || mongoose.model<IBookContent>('BookContent', BookContentSchema);
