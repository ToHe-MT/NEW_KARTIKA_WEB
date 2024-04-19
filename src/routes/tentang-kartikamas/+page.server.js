export async function load({ url, params }) {
	const layanan = [
		{
			nama: 'Akses Penjemputan',
			icon: 'hail',
			desc: 'kami memiliki aksesibilitas penjemputan yang mudah dijangkau pelanggan.'
		},
		{
			nama: 'Harga Kompetitif',
			icon: 'payments',
			desc: 'Kami menawarkan paket harga yang kompetitif di pasaran'
		},
		{
			nama: 'Variasi Pilihan',
			icon: 'category',
			desc: 'Kami menawarkan paket yang bervariasi dari tipe standar sampai luxury,'
		},
		{
			nama: 'Pelayanan Terlatih',
			icon: 'verified',
			desc: 'Kami menyediakan [elayanan jasa dengan pekerja yang terlatih'
		},
	];
    return {layanan}
}