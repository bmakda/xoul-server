import * as mongoose from 'mongoose';

export const WaitlistSchema = new mongoose.Schema({
  username: { type: String, required: true },
  phone: { type: String, unique: true, required: true },
});