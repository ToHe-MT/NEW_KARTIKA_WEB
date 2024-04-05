import db from '$lib/server/db.js';

export async function load({ cookies, locals, url }) {
	let sort = { duration: 1 };
	let skip = 0;

	const today = new Date();

	const match = {
		status: 'active'
	};

	let limit = 6;
	if (url.searchParams.get('limit')) {
		limit = parseInt(url.searchParams.get('limit'));
		if (limit > 50) {
			limit = 50;
		}
	}

	let page = 1;
	if (url.searchParams.get('page')) {
		page = parseInt(url.searchParams.get('page'));
	}
	if (page > 1) {
		skip = (page - 1) * limit;
	}

	let hari = "all"
	if (url.searchParams.get('hari')) {
		if (url.searchParams.get('hari') !== 'all') {
			hari = parseInt(url.searchParams.get('hari'));
			match.duration=hari;
		}
	}

	

	let totalData = await db.collection('paket-wisata-kartika').find(match).count();

	let paket_wisata = await db
		.collection('paket-wisata-kartika')
		.aggregate([
			{ $match: match},
			{ $sort: sort },
			{ $skip: skip },
			{ $limit: limit }
		])
		.toArray();

	paket_wisata.forEach(function (obj) {
		obj['_id'] && delete obj['_id'];
	});

	let destinations = await db.collection('paket-wisata-kartika').distinct('destination');
	let durations = await db.collection('paket-wisata-kartika').distinct('duration');

	console.log(page);
	return {
		paket_wisata,
		page,
		limit,
		totalData,
		destinations,
		durations,
		hari
	};
}
