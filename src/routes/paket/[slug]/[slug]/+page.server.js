import db from '$lib/server/db.js';
import { error } from '@sveltejs/kit';
export const ssr = true;

export async function load({ url, params }) {
	const filter = {
		slug: params.slug
	};
	var limit = 1;
	const umroh = await db.collection('schedule').find(filter).limit(limit).toArray();
	umroh.forEach((umroh) => {
		delete umroh._id;
	});

	if (umroh.length === 0) {
		return error(404, 'Not found');
	}

	return { umroh: umroh[0], slug: params.slug };
}
