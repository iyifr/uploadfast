import mongoose from 'mongoose';
import { planSchema } from './plan';

const { Schema } = mongoose;

const userSchema = new Schema({
	githubUserName: String,
	email: String,
	plan: planSchema,
	githubId: Number
});

const UserModel = () => mongoose.model('users', userSchema);
export const User = (mongoose.models['users'] || UserModel()) as ReturnType<typeof UserModel>;
