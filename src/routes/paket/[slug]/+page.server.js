import db from '$lib/server/db.js';
import { error } from '@sveltejs/kit';

export async function load({ url, params }) {
	if (['umroh', 'haji'].includes(params.slug) === false) {
		return error(404, {
			message: 'Paket tidak ditemukan.'
		});
	}

	const filter = {
		jenis_paket: params.slug
	};

	if (url.searchParams.get('category')) {
		filter.type_category = url.searchParams.get('category');
	}

	// q=&paket=2&perlanjutan=2&price_start=28&price_end=100&kereta_cepat=on&laundry=on&sort_by=0
	const query = url.searchParams;
	if (query.get('q')) {
		filter.title = { $regex: query.get('q'), $options: 'i' };
	}

	if (query.get('level_paket')) {
		filter.level_paket = query.get('level_paket');
	}
	if (query.get('perlanjutan')) {
		filter.perlanjutan = query.get('perlanjutan');
	}

	if (query.get('price_start') && query.get('price_end')) {
		filter.base_price = {
			$gte: parseInt(query.get('price_start')) * 1000000,
			$lte: parseInt(query.get('price_end')) * 1000000
		};
	}

	let facility = [];
	if (query.get('kereta_cepat')) {
		facility.push('kereta_cepat');
	}
	if (query.get('laundry')) {
		facility.push('laundry');
	}
	if (facility.length) {
		filter.facility = { $all: facility };
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
			case 'waktu_dekat':
				sort = { start_date: 1 };
				break;
			case 'waktu_lama':
				sort = { start_date: -1 };
				break;
		}
	}

	const total = await db.collection('schedule').find(filter).count();
	const umroh = await db
		.collection('schedule')
		.find(filter)
		.skip(skip)
		.sort(sort)
		.limit(limit)
		.toArray();
	umroh.forEach((umroh) => {
		delete umroh._id;
	});

	return { umroh, total, page, limit, slug: params.slug };
}
