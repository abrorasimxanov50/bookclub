import mongoose, { Schema, Document } from 'mongoose';

export interface IChallenge extends Document {
  title: string;
  description?: string;
  goal: number;
  period: string;
  startDate: Date;
  endDate: Date;
  coverUrl?: string;
  createdById: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
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
