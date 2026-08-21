import mongoose, { Schema, Document } from 'mongoose';

export interface IUserFollow extends Document {
  followerId: mongoose.Types.ObjectId;
  followingId: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const UserFollowSchema: Schema = new Schema({
  followerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  followingId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

UserFollowSchema.index({ followerId: 1, followingId: 1 }, { unique: true });

export default mongoose.models.UserFollow || mongoose.model<IUserFollow>('UserFollow', UserFollowSchema);
