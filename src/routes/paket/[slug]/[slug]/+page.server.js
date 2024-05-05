import db from '$lib/server/db.js';
import { error, redirect } from '@sveltejs/kit';
import { customAlphabet } from 'nanoid';
const nanoid = customAlphabet('123456789ABCDEFGHJKLMNPQRSTUWXYZ', 6);

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
	console.log(umroh[0]);
	return { umroh: umroh[0], slug: params.slug };
}

export const actions = {
	default: async ({ request, params }) => {
		const infos = await db
			.collection('schedule')
			.find({
				slug: params.slug
			})
			.limit(1)
			.toArray();
		if (infos.length == 0) {
			return error(404, 'Kendaraan tidak ditemukan');
		}
		const info = infos[0];

		const data = await request.formData();

		const newOrder = {
			order_id: nanoid(),
			slug: params.slug,

			jumlah_pax_quad: data.get('jumlah_pax_quad').substring(0, 5),
			jumlah_pax_triple: data.get('jumlah_pax_triple').substring(0, 5),
			jumlah_pax_double: data.get('jumlah_pax_double').substring(0, 5),
			whatsapp: data.get('whatsapp').substring(0, 30),
			nama_pemesan: data.get('nama_pemesan').substring(0, 100),

			created_at: new Date(),
			ip_address: request.headers.get('cf-connecting-ip'),
			product_type: info['type'],
			product_name: info['title'],
			product_id: info['uuid'],
			suggested_price: parseInt(info['price']),
			final_price: 0,
			payment_status: 'pending'
		};
		await db.collection('order').insertOne(newOrder);

		const text = `
*Pemesanan Baru*

*ID*: ${newOrder.order_id}
*Paket*: ${info['title']}
*Pax Quad Room*: ${newOrder.jumlah_pax_quad}
*Pax Double Room*: ${newOrder.jumlah_pax_double}
*Pax Triple Room*: ${newOrder.jumlah_pax_triple}

*Nama*: ${newOrder.nama_pemesan}
*Whatsapp*: ${newOrder.whatsapp}`;

		redirect(302, `https://wa.me/62812100591?text=${encodeURI(text)}`);
	}
};
