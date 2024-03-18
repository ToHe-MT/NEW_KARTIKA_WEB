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

			upgrade_kamar: data.get('upgrade_kamar').substring(0, 10),
			jumlah_pax: data.get('jumlah_pax').substring(0, 5),
			whatsapp: data.get('whatsapp').substring(0, 30),
			nama_pemesan: data.get('nama_pemesan').substring(0, 100),
			nik_pemesan: data.get('nik').substring(0, 16),
			alamat_pemesan: data.get('alamat').substring(0, 355),

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
*Upgrade Kamar*: ${newOrder.upgrade_kamar}
*Jumlah Pax*: ${newOrder.jumlah_pax}

*Nama*: ${newOrder.nama_pemesan}
*NIK*: ${newOrder.nik_pemesan}
*Alamat*: ${newOrder.alamat_pemesan}
*Whatsapp*: ${newOrder.whatsapp}`;

		redirect(302, `https://wa.me/62812100591?text=${encodeURI(text)}`);
	}
};
