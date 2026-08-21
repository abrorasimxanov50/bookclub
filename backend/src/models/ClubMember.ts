import mongoose, { Schema, Document } from 'mongoose';

export interface IClubMember extends Document {
  clubId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  role: string;
  joinedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const ClubMemberSchema: Schema = new Schema({
  clubId: { type: Schema.Types.ObjectId, ref: 'Club', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  role: { type: String, default: 'MEMBER' },
  joinedAt: { type: Date, default: Date.now },
}, { timestamps: true });

ClubMemberSchema.index({ clubId: 1, userId: 1 }, { unique: true });

export default mongoose.models.ClubMember || mongoose.model<IClubMember>('ClubMember', ClubMemberSchema);
