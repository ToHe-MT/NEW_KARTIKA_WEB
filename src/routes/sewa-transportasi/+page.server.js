import naryama from '$lib/server/naryama.js';
import { error } from '@sveltejs/kit';

var db = naryama;

export async function load({ url, params }) {
	const filter = {};

	if (url.searchParams.get('category')) {
		filter.type_category = url.searchParams.get('category');
	}

	// q=&paket=2&perlanjutan=2&price_start=28&price_end=100&kereta_cepat=on&laundry=on&sort_by=0
	const query = url.searchParams;
	if (query.get('q')) {
		filter.name = { $regex: query.get('q'), $options: 'i' };
	}

	if (query.get('price_start') && query.get('price_end')) {
		filter.base_price = {
			$gte: parseInt(query.get('price_start')) * 1000000,
			$lte: parseInt(query.get('price_end')) * 1000000
		};
	}

	let facility = [];
	if (query.get('karaoke') == 'on') {
		facility.push('karaoke');
	}
	if (query.get('kulkas') == 'on') {
		facility.push('kulkas');
	}
	if (query.get('tv') == 'on') {
		facility.push('tv');
	}
	if (query.get('ps5') == 'on') {
		facility.push('ps5');
	}
	if (facility.length) {
		// filter.facility = { $all: facility };
	}

	var kategori_transportasi = [];
	if (query.get('bus') == 'on') {
		kategori_transportasi.push('bus');
	}
	if (query.get('van') == 'on') {
		kategori_transportasi.push('van');
	}
	if (query.get('suv') == 'on') {
		kategori_transportasi.push('suv');
	}
	if (kategori_transportasi.length) {
		filter.jenis_kendaraan = { $in: kategori_transportasi };
	}

	var limit = 6;
	if (url.searchParams.get('limit')) {
		limit = parseInt(url.searchParams.get('limit'));
		if (limit > 50) {
			limit = 50;
		}
	}

	var skip = 0;

	var page = 1;
	if (url.searchParams.get('page')) {
		page = parseInt(url.searchParams.get('page'));
	}
	if (page > 1) {
		skip = (page - 1) * limit;
	}

	var sort = {};
	if (query.get('sort_by')) {
		switch (query.get('sort_by')) {
			case 'terbaru':
				sort = { _id: -1 };
				break;
			case 'termurah':
				sort = { base_price: 1 };
				break;
			case 'termahal':
				sort = { base_price: -1 };
				break;
			case 'kursi_terbanyak':
				sort = { capacity: -1 };
				break;
			case 'kursi_tersedikit':
				sort = { capacity: 1 };
				break;
		}
	}

	const total = await db.collection('vehicles').find(filter).count();
	const vehicles = await db
		.collection('vehicles')
		.find(filter)
		.skip(skip)
		.sort(sort)
		.limit(limit)
		.toArray();
	vehicles.forEach((vehicle) => {
		delete vehicle._id;
	});

	return { vehicles, total, page, limit, slug: params.slug };
}
