import db from '$lib/server/db.js';

export const load = async ({ url }) => {
	const filter = {
		type: 'umroh',
		type_category: url.searchParams.get('category') || 'umroh'
	};
	const umroh = await db.collection('schedule').find().toArray();
	umroh.forEach((umroh) => {
		delete umroh._id;
	});
	return { umroh };
};
