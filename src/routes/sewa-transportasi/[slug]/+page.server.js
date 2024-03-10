import naryama from '$lib/server/naryama.js';
import db from '$lib/server/db.js';
import { error, redirect } from '@sveltejs/kit';
export const ssr = true;
export const prerender = false;

export async function load({ url, params }) {
	const filter = {
		slug: params.slug
	};
	var limit = 1;
	const vehicles = await naryama.collection('vehicles').find(filter).limit(limit).toArray();
	vehicles.forEach((vehicle) => {
		delete vehicle._id;
	});

	if (vehicles.length === 0) {
		return error(404, 'Not found');
	}

	return { info: vehicles[0], slug: params.slug };
}

export const actions = {
	default: async ({ request, params }) => {
		const vehicles = await naryama
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
		const token = data.get('cf-turnstile-response');

		const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				response: token,
				secret: '0x4AAAAAAAUhmrIbS5N885MCP6lsN24n3nY'
			})
		});

		const cfr = await response.json();
		if (!cfr.success) {
			return error(403, 'Captcha terdeteksi bukan manusia');
		}

		await db.collection('order').insertOne({
			slug: params.slug,
			lokasi_jemput: data.get('lokasi_jemput').substring(0, 200),
			whatsapp: data.get('whatsapp').substring(0, 30),
			start_date: new Date(...data.get('start_date').split('-')),
			end_date: new Date(...data.get('end_date').split('-')),
			created_at: new Date(),
			ip_address: request.headers.get('cf-connecting-ip'),
			product_type: 'vehicle'
		});

		redirect(
			302,
			`https://wa.me/62812100591?text=Saya ingin sewa kendaraan ${vehicles[0].name} dari tanggal ${data.get('start_date')} sampai ${data.get('end_date')}. Terima kasih!`
		);
	}
};
