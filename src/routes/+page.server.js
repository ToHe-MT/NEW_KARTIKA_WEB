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

	const vehicle = await db.collection('vehicles').find().toArray();
	vehicle.forEach((vehicle) => {
		delete vehicle._id;
	});

	const paketWisata = await db
		.collection('paket-wisata-kartika')
		.find(
			{ status: 'active' },
			{
				projection: {
					slug: 1,
					duration: 1,
					base_price: 1,
					title: 1,
					_id: 0,
					images: { $elemMatch: { primary: true } }
				}
			}
		)
		.toArray();

	return { umroh, vehicle, paketWisata };
};
