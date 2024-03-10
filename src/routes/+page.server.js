import db from '$lib/server/db.js';
import naryama from '$lib/server/naryama.js';

export const load = async ({ url }) => {
	const filter = {
		jenis_paket: 'umroh'
	};

	if (url.searchParams.get('level_paket')) {
		filter.level_paket = url.searchParams.get('level_paket');
	}

	if (url.searchParams.get('category')) {
		filter.type_category = url.searchParams.get('category');
	}
	const umroh = await db.collection('schedule').find(filter).toArray();
	umroh.forEach((umroh) => {
		delete umroh._id;
	});

	const vehicle = await naryama.collection('vehicles').find().toArray();
	vehicle.forEach((vehicle) => {
		delete vehicle._id;
	});

	return { umroh, vehicle };
};
