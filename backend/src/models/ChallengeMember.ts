import mongoose, { Schema, Document } from 'mongoose';

export interface IChallengeMember extends Document {
  challengeId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  progress: number;
  joinedAt: Date;
  completedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
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
