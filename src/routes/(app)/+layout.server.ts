import { connectToDb } from '$lib/db.js';
import { MONGODB_URI } from '$env/static/private';
import { User } from '$lib/models/user.js';

export async function load({ locals }) {
	const session = await locals.auth();
	let user = null;

	if (session) {
		user = await User.findOne({ email: session?.user?.email }).exec();
	}

	locals._user = user?._id.toString();

	return {
		session,
		user: user ? (JSON.parse(JSON.stringify(user)) as typeof user) : null
	};
}
