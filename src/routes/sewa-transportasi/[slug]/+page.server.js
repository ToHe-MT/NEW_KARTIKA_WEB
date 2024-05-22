import naryama from '$lib/server/naryama.js';
import db from '$lib/server/db.js';
import { error, redirect } from '@sveltejs/kit';
import { customAlphabet } from 'nanoid';
const nanoid = customAlphabet('123456789ABCDEFGHJKLMNPQRSTUWXYZ', 6);

export const ssr = true;
export const prerender = false;

export async function load({ url, params }) {
	const filter = {
		slug: params.slug
	};
	var limit = 1;
	const vehicles = await db.collection('vehicles').find(filter).limit(limit).toArray();
	vehicles.forEach((item) => {
		delete item._id;
	});

	if (vehicles.length === 0) {
		return error(404, 'Not found');
	}

	const filter2 = { [`vehicle_price.${vehicles[0]['spec']['model']}`]: { $exists: true } };
	const route_list = await naryama.collection('routes').find(filter2).toArray();
	route_list.forEach((item) => {
		delete item._id;
	});

	return { info: vehicles[0], slug: params.slug, route_list };
}

export const actions = {
	default: async ({ request, params }) => {
		const vehicles = await db
			.collection('vehicles')
			.find({
				slug: params.slug
			})
			.limit(1)
			.toArray();
		if (vehicles.length == 0) {
			return error(404, 'Kendaraan tidak ditemukan');
		}

		const data = await request.formData();

		await db.collection('order').insertOne({
			order_id: nanoid(),
			slug: params.slug,
			nama_pemesan: data.get('nama').substring(0, 100),
			lokasi_jemput: data.get('lokasi_jemput').substring(0, 200),
			whatsapp: data.get('whatsapp').substring(0, 30),
			start_date: new Date(...data.get('start_date').split('-')),
			end_date: new Date(...data.get('end_date').split('-')),
			created_at: new Date(),
			ip_address: request.headers.get('cf-connecting-ip'),
			rute_pilihan: data.get('rute_pilihan').split('|')[0],
			lokasi_tujuan: data.get('lokasi_tujuan'),
			product_type: 'vehicle',
			product_name: vehicles[0].name,
			product_id: vehicles[0].vehicle_id,
			created_at: new Date(),
			payment_status: 'waiting'
		});

		const msg =
			encodeURI(`https://wa.me/62812100591?text=Saya ingin sewa kendaraan ${vehicles[0].name}

Nama: ${data.get('nama')}
Whatsapp: ${data.get('whatsapp')}
dari tanggal ${data.get('start_date')} sampai ${data.get('end_date')}.
Pilihan Rute: ${data.get('rute_pilihan').split('|')[3]}
Lokasi jemput: ${data.get('lokasi_jemput')}

Terima kasih!`);
		redirect(302, msg);
	}
};
