import mongoose, { Schema, Document } from 'mongoose';

export interface IClub extends Document {
  name: string;
  slug: string;
  description?: string;
  coverUrl?: string;
  createdById: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const ClubSchema: Schema = new Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String },
  coverUrl: { type: String },
  createdById: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

export default mongoose.models.Club || mongoose.model<IClub>('Club', ClubSchema);
