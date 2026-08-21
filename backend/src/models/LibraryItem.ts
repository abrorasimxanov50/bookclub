import mongoose, { Schema, Document } from 'mongoose';

export interface ILibraryItem extends Document {
  userId: mongoose.Types.ObjectId;
  bookId: mongoose.Types.ObjectId;
  status: string;
  addedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const LibraryItemSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  bookId: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  status: { type: String, default: 'WANT_TO_READ' },
  addedAt: { type: Date, default: Date.now },
}, { timestamps: true });

LibraryItemSchema.index({ userId: 1, bookId: 1 }, { unique: true });

export default mongoose.models.LibraryItem || mongoose.model<ILibraryItem>('LibraryItem', LibraryItemSchema);
