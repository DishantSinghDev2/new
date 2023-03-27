import mongoose, { Schema, model, Document } from 'mongoose';

interface IUser {
  firsName: string;
  lastName: string;
  avatar?: string;
}

export interface UserDocument extends IUser, Document {
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<UserDocument>({
  firsName: { type: String, required: true },
  lastName: { type: String, required: true },
  avatar: String
});

export const User = mongoose.models.User || model<UserDocument>('User', userSchema);