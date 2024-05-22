import db from '$lib/server/db.js';
import { error, redirect } from '@sveltejs/kit';
import { customAlphabet } from 'nanoid';
const nanoid = customAlphabet('123456789ABCDEFGHJKLMNPQRSTUWXYZ', 6);

const money = new Intl.NumberFormat('id-ID', {
	style: 'currency',
	currency: 'IDR',
	maximumFractionDigits: 0,
	minimumFractionDigits: 0
});

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
			slug: params.slug,

			jumlah_pax_quad: data.get('jumlah_pax_quad'),
			jumlah_pax_triple: data.get('jumlah_pax_triple'),
			jumlah_pax_double: data.get('jumlah_pax_double'),
			whatsapp: data.get('whatsapp'),
			nama_pemesan: data.get('nama_pemesan'),
			total_pax: data.get('total_pax'),
			total_harga: data.get('total_harga'),
			jenis_kamar: data.get('jenis_kamar'),
			product_type: info['type'],
			product_name: info['title'],
			product_id: info['uuid'],
			suggested_price: parseInt(info['price'])
		};

		let text_jenis_kamar;
		if (newOrder.jenis_kamar === 'quad') {
			text_jenis_kamar = `*Jenis Kamar*: ${newOrder.jenis_kamar}

*Pax Quad Room*: ${newOrder.jumlah_pax_quad}`;
		} else if (newOrder.jenis_kamar === 'triple') {
			text_jenis_kamar = `*Jenis Kamar*: ${newOrder.jenis_kamar}

*Pax Triple Room*: ${newOrder.jumlah_pax_triple}`;
		} else if (newOrder.jenis_kamar === 'double') {
			text_jenis_kamar = `*Jenis Kamar*: ${newOrder.jenis_kamar}

*Pax Double Room*: ${newOrder.jumlah_pax_double}`;
		} else if (newOrder.jenis_kamar === 'custom') {
			text_jenis_kamar = `*Jenis Kamar*: ${newOrder.jenis_kamar}

*Pax Quad Room*: ${newOrder.jumlah_pax_quad}
*Pax Triple Room*: ${newOrder.jumlah_pax_triple}
*Pax Double Room*: ${newOrder.jumlah_pax_double}`;
		}
		const text = `*Pemesanan Baru*

*Paket*: ${info['title']}
*Total Pax*: ${newOrder.total_pax}

${text_jenis_kamar}

*Total Harga*: ${money.format(newOrder.total_harga)}

*Nama*: ${newOrder.nama_pemesan}
*Whatsapp*: ${newOrder.whatsapp}`;

		const url = `https://wa.me/62812100591?text=${encodeURI(text)}`;
		return { url };
	}
};
