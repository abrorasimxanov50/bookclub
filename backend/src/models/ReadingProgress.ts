import mongoose, { Schema, Document } from 'mongoose';

export interface IReadingProgress extends Document {
  userId: mongoose.Types.ObjectId;
  bookId: mongoose.Types.ObjectId;
  currentPage: number;
  totalPages: number;
  progressPercent: number;
  lastReadAt?: Date;
  completedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
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
