import mongoose, { Schema, Document } from 'mongoose';

export interface IAuthor extends Document {
  name: string;
  slug: string;
  bio?: string;
  photo?: string;
  dateOfBirth?: Date;
  dateOfDeath?: Date;
  nationality?: string;
  createdAt: Date;
  updatedAt: Date;
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
