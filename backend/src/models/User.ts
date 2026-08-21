import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  username: string;
  email: string;
  password?: string;
  provider?: string;
  providerId?: string;
  avatar?: string;
  bio?: string;
  role: string;
  isVerified: boolean;
  lastActive?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  provider: { type: String },
  providerId: { type: String },
  avatar: { type: String },
  bio: { type: String },
  role: { type: String, default: 'USER' },
  isVerified: { type: Boolean, default: false },
  lastActive: { type: Date },
}, { timestamps: true });

UserSchema.index({ provider: 1, providerId: 1 }, { unique: true, sparse: true });

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
