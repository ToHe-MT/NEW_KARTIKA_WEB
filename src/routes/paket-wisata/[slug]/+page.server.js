import db from '$lib/server/db.js';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ params, locals, url, query }) {
	const data = await db.collection('paket-wisata-domestik').find({ slug: params.slug }).toArray();

	if (data[0].itinerari) {
		data[0].itinerari.forEach((itinerary) => {
			if (itinerary.activities) {
				itinerary.activities.sort((a, b) => {
					const startHourA = parseInt(a.start.split(':')[0]);
					const startHourB = parseInt(b.start.split(':')[0]);
					return startHourA - startHourB;
				});
			}
		});
	}
	data.forEach(function (obj) {
		obj['_id'] && delete obj['_id'];
	});

	if (data.length == 0) {
		error(404, 'Data not found');
	}

	let tab = url.searchParams.get('tab');


	const others = await db.collection('paket-wisata-domestik').aggregate([{ $sample: { size: 3 } }]).toArray();
	others.forEach(function (obj) {
		obj['_id'] && delete obj['_id'];
	});


	return {
		info_paket: data[0],
		others:others
	};
}