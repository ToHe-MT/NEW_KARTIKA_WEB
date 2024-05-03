<script>
	import PaketTransport from './PaketTransport.svelte';
	import Category from './Category.svelte';
	import PaketUmroh from './PaketUmroh.svelte';
	import { onMount } from 'svelte';
	import UmrohProcess from './UmrohProcess.svelte';
	import PaketWisata from './PaketWisata.svelte';

	export let data;
	console.log(data.umroh);
	let form_action = {
		umroh: '/paket/umroh',
		'umroh plus': '/paket/umroh-plus',
		haji: '/paket/haji',
		'sewa armada': '/sewa-transportasi'
	};
	let jenis_produk = 'umroh';

	let selectedVehicle = '';
	let isBigBusJetbusSelected = false;
	let isHiacePremioLuxurySelected = false;
	let isHiacePremioSelected = false;
	let isElfGigaLongSelected = false;

	// Watch for changes in selectedVehicle and update checkbox states
	$: isBigBusJetbusSelected = selectedVehicle === 'BIGBUS JETBUS';
	$: isHiacePremioLuxurySelected = selectedVehicle === 'HIACE PREMIO LUXURY';
	$: isHiacePremioSelected = selectedVehicle === 'HIACE PREMIO';
	$: isElfGigaLongSelected = selectedVehicle === 'ELF GIGA LONG';

	let minPrice = 20;
	let minPriceVehicle = 1;
	const money = new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
		maximumFractionDigits: 0,
		minimumFractionDigits: 0
	});
	function getDifferenceInDaysAndNights(start, end) {
		const startDate = new Date(start);
		const endDate = new Date(end);
		endDate.setDate(endDate.getDate() + 1); // Include the end date in the calculation
		const differenceInMilliseconds = endDate - startDate;
		const differenceInDays = Math.ceil(differenceInMilliseconds / (1000 * 3600 * 24));
		const differenceInNights = differenceInDays - 1;
		return `${differenceInDays} hari ${differenceInNights} malam`;
		// return { days: differenceInDays, nights: differenceInNights };
	}
	let contents = [
		{
			title: 'Konsumsi',
			description: 'Konsumsi yang terjamin dari memulai perjalanan sampai selesai.',
			icon: 'local_dining'
		},
		{
			title: 'Visa haji & umrah',
			description: 'Pengurusan visa haji & umrah untuk keperluan ibadah di tanah suci.',
			icon: 'flight'
		},
		{
			title: 'Perlengkapan Umrah',
			description: 'Paket umroh dengan perlengkapan kebutuhan ibadah yang lengkap.',
			icon: 'shopping_bag'
		},
		{
			title: 'TL/ Mutawwif',
			description: 'Umroh ditemani oleh leader dan Mutawwif yang tersertifikasi.',
			icon: 'group'
		},
		{
			title: 'Hotel Penginapan',
			description: 'Akomodasi hotel / penginapan terbaik dan ternyaman.',
			icon: 'hotel'
		},
		{
			title: 'Transportasi',
			description: 'Transportasi untuk memudahkan perjalanan jamaah.',
			icon: 'directions_car'
		},
		{
			title: 'Tim Profesional Saudi',
			description: 'Tim profesional dari Saudi untuk melancarkan kegiatan para jamaah.',
			icon: 'person_pin_circle'
		},
		{
			title: 'Tiket Pesawat',
			description: 'Tiket pesawat PP untuk keperluan berangkat ke tanah suci.',
			icon: 'airplane_ticket'
		},
		{
			title: 'Dokumentasi',
			description: 'Dokumentasi untuk jamaah selama ibadah di tanah suci.',
			icon: 'camera_alt'
		}
	];
	function formatDate(dateStr) {
		// Convert string to Date object
		let date = new Date(dateStr);

		// Format the date
		let options = { day: 'numeric', month: 'long', year: 'numeric' };
		let formattedDate = date.toLocaleDateString('en-US', options);

		return formattedDate;
	}
</script>

<svelte:head>
	<title>Kartika Mas Tours &amp; Travel | Umroh dan Haji Plus Murah</title>
</svelte:head>

<div class="primary-hero bg-primary-3p">
	<div class="container w-100">
		<div class="row g-2 w-100">
			<div class="col-lg-8 col-xl-10 title">
				<h1 class="d2 mb-6 title">Kartika Mas Tour and Travel</h1>
				<p class="fs-20 mb-4">
					Kartikamas mengakomodir kebutuhan umat mulai dari Umroh, Haji, hingga Penyewaan
					transportasi pariwisata.
				</p>
				<div class="button-tentang">
					<button type="button" class="btn bg-primary-300 text-white">Lihat Paket</button>
				</div>
			</div>
		</div>
	</div>
	<div class="background-image-hero">
		<img
			src="/assets/img/DEPAN.jpg"
			alt="makkah"
			class="img-fluid primary-hero__el primary-hero__img-1"
		/>
	</div>
</div>

<div class="d-flex justify-content-center align-items-center ngambang">
	<form action={form_action[jenis_produk]}>
		<div class="property-search p-6 rounded-3 bg-neutral-0 py-12 px-12">
			<div
				class="property-search__content d-flex flex-wrap justify-content-center align-items-center gap-4"
			>
				<div
					class="property-search__select property-search__col rounded-pill d-flex align-items-center gap-2 px-6"
				>
					<span class="material-symbols-outlined mat-icon"> navigation </span>
					<select bind:value={jenis_produk} class="form-select" aria-label="Default select example">
						<option selected value="">Jenis Produk</option>
						<option value="umroh">UMROH</option>
						<option value="umroh plus" selected>UMROH PLUS</option>
						<option value="haji">HAJI PLUS/FURODA</option>
						<option value="sewa armada">SEWA ARMADA</option>
					</select>
				</div>
				{#if jenis_produk == 'sewa armada'}
					<div
						class="property-search__select property-search__col rounded-pill d-flex align-items-center gap-2 px-6"
					>
						<span class="material-symbols-outlined mat-icon">car_rental</span>
						<select
							bind:value={selectedVehicle}
							class="form-select"
							aria-label="Default select example"
						>
							<option selected value="">Jenis Kendaraan</option>
							<option value="BIGBUS JETBUS">BIGBUS JETBUS</option>
							<option value="HIACE PREMIO LUXURY">HIACE PREMIO LUXURY</option>
							<option value="ELF GIGA LONG">ELF GIGA LONG</option>
						</select>
					</div>
					<div style="display: none;">
						<input
							bind:checked={isBigBusJetbusSelected}
							name="BIGBUS JETBUS"
							class="custom-checkbox custom-checkbox--rounded flex-shrink-0"
							type="checkbox"
							id="bus"
						/>
						<input
							bind:checked={isHiacePremioLuxurySelected}
							name="HIACE PREMIO LUXURY"
							class="custom-checkbox custom-checkbox--rounded flex-shrink-0"
							type="checkbox"
							id="honda-civic"
						/>
						<input
							bind:checked={isHiacePremioSelected}
							name="HIACE PREMIO"
							class="custom-checkbox custom-checkbox--rounded flex-shrink-0"
							type="checkbox"
							id="ford-mustung"
						/>
						<input
							bind:checked={isElfGigaLongSelected}
							name="ELF GIGA LONG"
							class="custom-checkbox custom-checkbox--rounded flex-shrink-0"
							type="checkbox"
							id="ford-mustung"
						/>
					</div>
					<div
						class="property-search__price property-search__col rounded-pill d-flex align-items-center gap-2 px-6 py-3"
					>
						<div class="d-flex gap-2 align-items-center">
							<span class="material-symbols-rounded mat-icon"> add_card </span>
							<span class="d-inline-block fs-14"> Biaya </span>
						</div>
						<div class="property-search__range d-grid">
							<input
								name="price_start"
								type="range"
								min="0"
								max="5"
								bind:value={minPriceVehicle}
								class="property-search__range-input"
								id="myRange"
								oninput="rangevalue.value=value"
								style="background-size: {minPriceVehicle * 20}% 100%;"
							/>
						</div>
						<div class="property-search__range-price">
							<span class="d-inline-block fs-10 clr-primary-300">
								Mulai Dari {minPriceVehicle} JT
							</span>
						</div>
					</div>
				{:else}
					<div
						class="property-search__select property-search__col rounded-pill d-flex align-items-center gap-2 px-6"
					>
						<span class="material-symbols-outlined mat-icon"> person </span>
						<select name="level_paket" class="form-select" aria-label="Default select example">
							<option selected value="">Paket</option>
							<option value="reguler">Silver (⭐️⭐️⭐️)</option>
							<option value="vip">Gold (⭐️⭐️⭐️⭐️)</option>
							<option value="vvip">Platinum (⭐️⭐️⭐️⭐️⭐️)</option>
							<option value="private">PRIVATE (CUSTOM)</option>
						</select>
					</div>
					<div
						class="property-search__price property-search__col rounded-pill d-flex align-items-center gap-2 px-6 py-3"
					>
						<div class="d-flex gap-2 align-items-center">
							<span class="material-symbols-rounded mat-icon"> add_card </span>
							<span class="d-inline-block fs-14"> Biaya </span>
						</div>
						<div class="property-search__range d-grid">
							<input
								name="price_start"
								type="range"
								min="1"
								max="50"
								bind:value={minPrice}
								class="property-search__range-input"
								id="myRange"
								oninput="rangevalue.value=value"
								style="background-size: {minPrice * 2}% 100%;"
							/>
						</div>
						<div class="property-search__range-price">
							<span class="d-inline-block fs-10 clr-primary-300">
								Mulai Dari {minPrice} JT
							</span>
						</div>
					</div>
				{/if}

				<button class="btn rounded-pill property-search__btn property-search__col">
					<span class="material-symbols-rounded mat-icon"> search </span>
				</button>
			</div>
		</div>
	</form>
</div>

<div class="container py-30">
	<div class="row">
		<div class="col-12 col-lg-6 p-4 d-flex justify-content-start">
			<img
				src="/assets/img/DEPANKECIL.jpg"
				alt="makkah"
				class="img-fluid"
				style="max-height: 400px; object-fit:cover"
			/>
		</div>
		<div
			class="col-lg-6 p-4 d-flex flex-column justify-content-center align-items-start d-lg-block"
		>
			<div class="px-4"><h6>TENTANG KAMI</h6></div>
			<div class="px-4">
				<h4>Memberikan Pelayanan Haji & Umrah Yang Terbaik Untuk Para Jamaah</h4>
			</div>
			<div class="p-4">
				<p>
					Kartika Mas tour and travel adalah perusahaan yang beroperasi dalam industri Travel agen
					yang memberikan berbagai macam pilihan wisata dari domestik hingga internasional. Seperti
					umroh, haji, trip luar negeri hingga dalam negeri.
				</p>
				<br>
				<p>
					Berlokasi di Jakarta Selatan, Kartika Mas tour and travel bergerak di bidang biro dan jasa
					yang mengedepankan kualitas pelayanan terbaik dan profesionalisme dalam setiap perjalanan
					wisata agar terjaga kenyamanannya. Kartika mas tour and travel juga menawarkan berbagai
					macam pilihan sewa armada demi mewujudkan pelayanan yang terbaik.
				</p>
			</div>
			<div class="p-4 button-tentang">
				<button type="button" class="btn bg-primary-300 text-white">Tentang Kami</button>
			</div>
		</div>
	</div>
</div>

<div class="hr-dashed"></div>
<div class="container py-10">
	<div class="row px-4">
		<div class="col-12 d-flex justify-content-center align-items-center flex-column">
			<h5>Paket Umrah</h5>
			<h2>Layanan Paket Umrah</h2>
		</div>
		{#if data.umroh && data.umroh.length > 0}
			{#each data.umroh.slice(0, 2) as item}
				<div class="col-12 col-xl-6 p-4">
					<div class="property-card border shadow">
						<div class="property-card__head">
							<div class="swiper property-card-slider">
								<div class="swiper-wrapper">
									{#if item.images && item.images.length > 0}
										{#each item.images as image}
											<div class="swiper-slide">
												<div class="property-card__img">
													<img
														src="{import.meta.env.VITE_S3_PUBLIC_URL}/schedule/{image.picture_id}"
														alt="foto hotel"
														class="img-fluid w-100"
													/>
												</div>
											</div>
										{/each}
									{/if}
								</div>
								<div class="swiper-pagination property-card-pagination"></div>
								<div class="swiper-button-prev property-card-prev"></div>
								<div class="swiper-button-next property-card-next"></div>
							</div>
							<a
								style="display: none !imaportant;"
								href="#"
								class="link property-card__tag d-inline-block bg-neutral-0 :bg-primary-300 clr-primary-300 :clr-neutral-0 py-2 px-4 rounded-pill fw-medium"
							>
								<div class="d-flex align-items-center gap-2">
									<span class="material-symbols-rounded mat-icon fw-200 clr-secondary-500">
										dark_mode
									</span>
									<span class="d-block">
										{getDifferenceInDaysAndNights(item.departure_date, item.return_date)}
									</span>
								</div>
							</a>
						</div>
						<div class="property-card__body">
							<!-- <div class="d-flex align-items-center gap-1 mb-4">
							 <span class="material-symbols-outlined mat-icon clr-tertiary-400"> flight_takeoff </span>
							 <span class="d-inline-block"> {item.departure_from} </span>
						 </div> -->
							<div class="d-flex justify-content-between mb-2">
								<a
									href="/paket/{item.jenis_paket}/{item.slug}"
									class="link d-block flex-grow-1 clr-neutral-700 :clr-primary-300 fs-20 fw-medium"
								>
									{item.title}
								</a>
								<div class="d-flex justify-content-end align-items-center gap-2 badge bg-danger">
									10 Seats Left
								</div>
							</div>
							<ul class="list list-row flex-wrap align-items-center justify-content-between py-4">
								<li>
									<div class="d-flex align-items-center gap-2">
										<span class="material-symbols-outlined mat-icon clr-black">
											flight_takeoff
										</span>
										<p class="mb-0">{item.departure_from}</p>
									</div>
								</li>
								<li>
									<div class="d-flex align-items-center gap-2">
										<span class="clr-black">{formatDate(item.departure_date)}</span>
										-
										<span class="clr-black">{formatDate(item.return_date)}</span>
									</div>
								</li>
								<!-- <li>
									<div class="d-flex align-items-center gap-1">
										<p class="mb-0">
											{info.hotel_star}
											<span
												style="vertical-align: bottom;"
												class="material-symbols-outlined mat-icon solid clr-tertiary-300"
											>
												star_rate
											</span> Hotel
										</p>
									</div>
								</li> -->
							</ul>
							<div class="hr-dashed"></div>
							<ul class="list list-row row g-1 py-4">
								{#if item.hotel && item.hotel.length > 0}
									{#each item.hotel as item}
										<li class="col-12">
											<div class="d-flex align-items-center gap-2">
												<span class="material-symbols-rounded mat-icon fw-200 clr-secondary-500">
													hotel
												</span>
												<span class="d-block"> {item.city}, {item.name}</span>
												<div class="d-flex gap-0">
													{#each Array.from({ length: parseInt(item.star) }) as _, i}
														<!-- Content here -->
														<span
															class="material-symbols-rounded mat-icon fw-200 clr-secondary-500"
														>
															star
														</span>
													{/each}
												</div>
											</div>
										</li>
									{/each}
								{/if}
								<div class="hr-dashed my-4"></div>
								{#if item.bonus && item.bonus.length > 0}
									{#each item.bonus as item}
										<li class="col-12">
											<div class="d-flex align-items-center gap-2">
												<span class="material-symbols-rounded mat-icon fw-200 clr-secondary-500">
													{item.logo}
												</span>
												<span class="d-block"> {item.title} </span>
											</div>
										</li>
									{/each}
								{/if}
							</ul>
						</div>
						<div class="property-card__body py-0">
							<div class="hr-dashed"></div>
						</div>
						<div class="property-card__body">
							<div class="d-flex flex-wrap justify-content-between align-items-center">
								<div>
									<span>Harga Mulai Dari</span>
									<span class="d-block fs-20 fw-medium clr-primary-300">
										{money.format(item.hotel_price_quad)}
									</span>
								</div>
								<a
									href="/paket/{item.jenis_paket}/{item.slug}"
									class="btn btn-outline-primary py-3 px-6 d-inline-flex align-items-center gap-1 fw-semibold"
								>
									Detail Paket
								</a>
							</div>
						</div>
					</div>
				</div>
			{/each}
		{/if}
	</div>
</div>
<div class="hr-dashed"></div>
<div class="container py-10">
	<div class="row px-20">
		<div class="col-12 d-flex justify-content-center align-items-center flex-column">
			<h5>FASILITAS JAMAAH</h5>
			<h2>Fasilitas Yang Disediakan</h2>
		</div>
	</div>
	<div class="container py-10">
		<div class="row">
			{#each contents as content}
				<div class="col-lg-4 col-xs-12 py-8 px-4">
					<div class="komponen-sll-ready">
						<div
							class="sub-komponen-sll skssl-box-icon"
							style="color: #424242; text-align: left; background-color: #ffffff;"
						>
							<div class="mc-box-icon mc-box-icon-top">
								<div class="mcbi-image">
									<div
										class="d-flex justify-content-center align-items-center bg-primary-300 h-100 rounded shadow-sm"
									>
										<span class="material-symbols-outlined mat-icon clr-primary-50 fs-1">
											{content.icon}
										</span>
									</div>
								</div>
								<div class="mcbi-text py-3">
									<div class="fs-5 pt-4 fw-bold">{content.title}</div>
									<div class="fs-6">{content.description}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<div class="py-10 position-relative">
	<img
		src="assets/img/DEPANKECIL.jpg"
		alt=""
		class="w-100"
		style="max-width: 100%; height: auto;"
	/>
	<div class="position-absolute top-50 start-50 text-center text-white responsiveTranslate">
		<div class="col-sm-10 col-xs-12 bg-white p-10" style="opacity: 80%;">
			<div style="color: #ffffff; text-align: left; opacit:100%">
				<h3 class="fw-bold">Dapatkan pengalaman Umrah terbaik bersama kami</h3>
				<p class="fw-bold clr-primary-300 p-2">Pelayanan terbaik Kartika Mas Tour &amp; Travel</p>
				<div class="button-tentang p-2">
					<button type="button" class="btn bg-primary-300 text-white">Daftar</button>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Category Section  -->
<Category />
<!-- /Category Section  -->

<PaketUmroh data={data.umroh} />

<UmrohProcess />

<PaketTransport data={data.vehicle} />
<PaketWisata paketWisata={data.paketWisata} />

<style>
	.button-tentang button {
		width: 200px;
		padding: 10px;
		font-size: 16px;
		font-weight: 600;
	}
	.button-tentang button:hover {
		background-color: rgb(60, 1, 1);
	}
	.primary-hero {
		position: relative;
		overflow: hidden;
	}

	.background-image-hero {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	.background-image-hero img {
		object-fit: cover;
		width: 100%;
		height: 100%;
		filter: brightness(30%);
	}
	.title {
		color: #660000;
	}
	@media (min-width: 1370px) {
		.title {
			color: white;
		}
	}
	.title h1 {
		font-size: 60px;
	}

	.ngambang {
		margin-top: -40px;
		z-index: 1000;
	}

	.ngambang * {
		z-index: 10;
	}
	.card-overflow {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}
	.overflow-logo {
		width: 60px;
		height: 60px;
		position: relative;
		background-color: var(--primary-color);
		margin: 0 auto;
		margin-top: -50px;
		border-radius: var(--border-radius);
		background-size: 50%;
		/* outline: 12px solid #c5c5c51a !important; */
	}
	.skssl-box-icon {
		margin-bottom: 0;
		padding: 20px 20px;
		/* padding: 0; */
		-webkit-box-shadow: 0 7px 37px 5px rgb(0 0 0 / 8%);
		box-shadow: 0 7px 37px 5px rgb(0 0 0 / 8%);
		border: 1px solid var(--border-produk);
		border-radius: 5px;
		/* overflow: hidden; */
	}
	.mc-box-icon.mc-box-icon-top {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}
	.mc-box-icon-top .mcbi-image {
		width: 60px;
		height: 60px;
		position: relative;
		background-color: var(--primary-color);
		margin: 0 auto;
		margin-top: -50px;
		border-radius: var(--border-radius);
		background-size: 50%;
		/* outline: 12px solid #c5c5c51a !important; */
	}
	.mc-box-icon-top .mcbi-text {
		text-align: center;
		padding: 0;
	}
	.mcbi-title {
		font-size: 18px;
		font-weight: 600;
		font-family: var(--font-title);
	}
	.mcbi-text .mcbi-description {
		font-size: 14px;
		color: var(--paragraph-text-color);
		line-height: 1.8;
	}

	.responsiveTranslate {
		transform: translate(-50%, -50%);
		min-width: 80%;
		max-width: 1000px;
	}
	@media (min-width: 1370px) {
		.responsiveTranslate {
			transform: translate(-50%, -50%);
			min-width: none;
			max-width: none;
		}
	}
	.property-card__head {
		padding: 0;
	}
	.property-card__img {
		border-radius: 0;
	}
	.property-card {
		border-radius: 0;
	}
</style>
