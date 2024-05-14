import db from '$lib/server/db.js';

export async function load({ cookies, locals, url, params }) {
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

	let hari = "all"
	if (url.searchParams.get('hari')) {
		if (url.searchParams.get('hari') !== 'all') {
			hari = parseInt(url.searchParams.get('hari'));
			console.log(hari);
			match.duration=hari;
		}
	}
	let destinasi = "all"
	if (url.searchParams.get('destinasi')) {
		if (url.searchParams.get('destinasi') !== 'all') {
			destinasi = (url.searchParams.get('destinasi'));
			match.destination=destinasi;
		}
	}

	let page = 1;
	if (url.searchParams.get('page')) {
		page = parseInt(url.searchParams.get('page'));
	}
	if (page > 1) {
		skip = (page - 1) * limit;
	}

	
	
	match.status="active"
	let totalData = await db.collection('paket-wisata-kartika').find(match).count();

	let maxPage = Math.ceil(totalData/limit)
	if (page>maxPage){
		page = 1
		skip = 0
	}


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

	return {
		paket_wisata,
		page,
		limit,
		totalData,
		destinations,
		durations,
		hari,
		destinasi,
		slug: params.slug
	};
}
