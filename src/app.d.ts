// See https://kit.svelte.dev/docs/types#app

import type { User } from '$lib/models/user';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		interface Locals {
			_user: any;
		}
	}
}

export {};
