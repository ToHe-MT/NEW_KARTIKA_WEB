<script>
	import PaketTransport from './PaketTransport.svelte';
	import Category from './Category.svelte';
	import PaketUmroh from './PaketUmroh.svelte';
	import { onMount, onDestroy } from 'svelte';
	import UmrohProcess from './UmrohProcess.svelte';
	import PaketWisata from './PaketWisata.svelte';
	import { goto } from '$app/navigation';

	import Swiper from 'swiper';
	import 'swiper/css';
	import { Navigation, Pagination } from 'swiper/modules';

	export let data;
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
	let testimonialSliderTwo;

	onMount(() => {
		testimonialSliderTwo = new Swiper('.testimonial-slider-two', {
			loop: true,
			navigation: {
				nextEl: '.testimonial-slider-two__btn-next',
				prevEl: '.testimonial-slider-two__btn-prev'
			},
			modules: [Navigation],
			autoplay: {
				delay: 5000
			}
		});
	});

	let gambarSlider;

	onMount(() => {
		gambarSlider = new Swiper('.property-card-slider', {
			loop: true,
			pagination: {
				el: '.swiper-pagination'
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-next'
			},
			modules: [Navigation, Pagination]
		});
	});

	onDestroy(() => {
		if (gambarSlider) {
			gambarSlider = null;
		}
	});

	onMount(() => {
		const button = document.querySelector('#popup');
		button.click();
	});
</script>

<svelte:head>
	<title>Kartika Mas Tours &amp; Travel | Umroh dan Haji Plus Murah</title>
</svelte:head>

<div class="primary bg-primary-3p">
	<div class="container w-100">
		<div class="row g-2 w-100">
			<div class="col-lg-8 col-xl-10 p-10 title">
				<h1 class="d2 mb-6 title">Kartika Mas Tour and Travel</h1>
				<p class="fs-20 mb-4">
					Kartikamas mengakomodir kebutuhan umat mulai dari Umroh, Haji, hingga Penyewaan
					transportasi pariwisata.
				</p>
				<div class="button-tentang">
					<button
						type="button"
						class="btn bg-primary-300 text-white"
						on:click={() => goto('paket/umroh')}>Lihat Paket</button
					>
				</div>
			</div>
		</div>
	</div>
	<div class="background-image-hero">
		<img src="/assets/img/DEPAN.jpg" alt="makkah" class="img-fluid" />
	</div>
	<div class="background-image-bawah">
		<img src="/assets/img/shape.svg" alt="makkah" class="img-fluid" />
	</div>
</div>

<div class="d-flex justify-content-center align-items-center ngambang">
	<form action={form_action[jenis_produk]} class="p-10">
		<div class="property-search p-6 rounded-md-3 bg-neutral-0 py-12 px-sm-12 mx-auto w-100">
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
							<option value="silver">Silver (⭐️⭐️⭐️)</option>
							<option value="gold">Gold (⭐️⭐️⭐️⭐️)</option>
							<option value="platinum">Platinum (⭐️⭐️⭐️⭐️⭐️)</option>
							<option value="private">PRIVATE (CUSTOM)</option>
						</select>
					</div>
					<div
						class="property-search__price property-search__col rounded-pill d-flex align-items-center justify-content-between gap-2 px-6 py-3"
					>
						<div class="d-flex gap-4 align-items-center">
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
				<br />
				<p>
					Berlokasi di Jakarta Selatan, Kartika Mas tour and travel bergerak di bidang biro dan jasa
					yang mengedepankan kualitas pelayanan terbaik dan profesionalisme dalam setiap perjalanan
					wisata agar terjaga kenyamanannya. Kartika mas tour and travel juga menawarkan berbagai
					macam pilihan sewa armada demi mewujudkan pelayanan yang terbaik.
				</p>
			</div>
			<div class="p-4 button-tentang">
				<button
					type="button"
					class="btn bg-primary-300 text-white"
					on:click={() => goto('tentang-kartikamas')}>Tentang Kami</button
				>
			</div>
		</div>
	</div>
</div>

<div class="hr-dashed"></div>
<div class="container py-5">
	<div class="row px-1 px-md-4 py-15">
		<div class="col-12 d-flex justify-content-center align-items-center flex-column container">
			<h5>Paket Umrah</h5>
			<h2>Layanan Paket Umrah</h2>
		</div>
		{#if data.umroh && data.umroh.length > 0}
			{#each data.umroh.slice(0, 2) as item}
				<div class="col-12 col-xl-6 p-1 p-md-4">
					<div class="property-card border shadow">
						<div class="property-card__head">
							<div class="swiper property-card-slider">
								<div class="swiper-wrapper">
									{#if item.images && item.images.length > 0}
										{#each item.images as image}
											{#if image.primary === true}
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="{import.meta.env.VITE_S3_PUBLIC_URL}/schedule/{image.picture_id}"
															alt="foto hotel"
															class="img-fluid w-100"
														/>
													</div>
												</div>
											{/if}
										{/each}
										{#each item.images as image}
											{#if image.primary === false}
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="{import.meta.env.VITE_S3_PUBLIC_URL}/schedule/{image.picture_id}"
															alt="foto hotel"
															class="img-fluid w-100"
														/>
													</div>
												</div>
											{/if}
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
										<p class="mb-0 fontcard">{item.departure_from}</p>
									</div>
								</li>
								<li>
									<div class="d-flex align-items-center gap-2">
										<span class="clr-black fontcard">{formatDate(item.departure_date)}</span>
										-
										<span class="clr-black fontcard">{formatDate(item.return_date)}</span>
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
							<ul class="list list-row row g-1 pt-4">
								{#if item.hotel && item.hotel.length > 0}
									{#each item.hotel as item}
										<li class="col-12">
											<div class="d-flex align-items-center gap-2">
												<span class="material-symbols-rounded mat-icon fw-200 clr-secondary-500">
													hotel
												</span>
												<span class="d-block fontcard"> {item.city}, {item.name}</span>
												<div class="d-flex gap-0">
													{#each Array.from({ length: parseInt(item.star) }) as _, i}
														<!-- Content here -->
														<span
															class="material-symbols-rounded mat-icon fw-200 clr-secondary-500 fontcard"
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
												<span
													class=" fontcard material-symbols-rounded mat-icon fw-200 clr-secondary-500"
												>
													{item.logo}
												</span>
												<span class="fontcard d-block"> {item.title} </span>
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
									<span class="fontcard">Harga Mulai Dari</span>
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
		{:else}
			<div class="col-12">
				<div class="bg-neutral-0 rounded-2 py-3 px-6 box-shadow">
					<div class="text-center">
						<h2 class="mt-10 mb-5">Paket tidak ditemukan</h2>
						<p class="mb-8">Mohon Maaf Saat ini ada Error di Katalog kami</p>
					</div>
				</div>
			</div>
		{/if}
		<div class="col-12 d-flex justify-content-center align-items-center p-4 mt-4">
			<div class="button-tentang">
				<button
					type="button"
					class="btn bg-primary-300 text-white fs-6 fw-bold p-3"
					on:click={() => goto('paket/umroh')}>Lihat Paket Umroh</button
				>
			</div>
		</div>
	</div>
</div>

<div class="hr-dashed"></div>
<!-- FASILITAS -->
<div class="pt-30 bg-primary-3p w-100">
	<div class="container">
		<div class="row py-5">
			<div class="col-12 d-flex justify-content-center align-items-center flex-column">
				<h5>FASILITAS JAMAAH</h5>
				<h2 class="text-center">Fasilitas Yang Disediakan</h2>
			</div>
		</div>
	</div>
	<div class="container py-10">
		<div class="row">
			{#each contents as content}
				<div class="col-lg-4 col-sm-6 py-8 px-12 px-sm-4">
					<div class="komponen-sll-ready">
						<div
							class="sub-komponen-sll skssl-box-icon"
							style="color: #424242; background-color: #ffffff;"
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
								<div class="mcbi-text py-3 mt-2">
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

<div class="position-relative">
	<img
		src="assets/img/DEPANKECIL.jpg"
		alt=""
		class="w-100"
		style="max-width: 100%; height: auto;"
	/>
	<div class="position-absolute top-50 start-50 text-center text-white responsiveTranslate">
		<div class="p-4 p-md-10 responbody w-100 h-100">
			<div style="color: #ffffff; text-align: left;" class="respondalam">
				<h3 class="fw-bold p-md-2">Dapatkan pengalaman Umrah terbaik bersama kami</h3>
				<p class="fw-bold clr-primary-300 p-md-2">
					Pelayanan terbaik Kartika Mas Tour &amp; Travel
				</p>
				<div class="button-tentang p-md-2">
					<button type="button" class="btn bg-primary-300 text-white">Daftar</button>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- GALERRY Perlengkapan -->
<div class="p-2 pt-30 bg-primary-3p">
	<div class="container">
		<div class="row py-5">
			<div class="col-12 d-flex justify-content-center align-items-center flex-column">
				<h5>GALLERY PERLENGKAPAN</h5>
				<h2>Perlengkapan Ekslusif</h2>
			</div>
		</div>
	</div>
	<div class="container px-10">
		<div class="row">
			<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 pb-8">
				<div class="card-gallery">
					<img src="/perlengkapan/BajuCewe-1.JPG" class="card-img-top top" alt="..." />
					<img src="/perlengkapan/BajuCewe-2.JPG" class="card-img-top bottom" alt="..." />
				</div>
				<div class="d-flex justify-content-center align-items-center p-0 m-0">
					<h6 class="text-center clr-primary-300 p-0 m-0">Kain Seragam Eksklusif</h6>
				</div>
			</div>

			<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 pb-8">
				<div class="card-gallery">
					<img src="/perlengkapan/Banner-1.JPG" class="card-img-top top" alt="..." />
					<img src="/perlengkapan/Banner-2.JPG" class="card-img-top bottom" alt="..." />
				</div>
				<div class="d-flex justify-content-center align-items-center p-0 m-0">
					<h6 class="text-center clr-primary-300 p-0 m-0">Syal Rajut</h6>
				</div>
			</div>
			<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 pb-8">
				<div class="card-gallery">
					<img src="/perlengkapan/BajuCowo-1.JPG" class="card-img-top top" alt="..." />
					<img src="/perlengkapan/BajuCowo-2.JPG" class="card-img-top bottom" alt="..." />
				</div>
				<div class="d-flex justify-content-center align-items-center p-0 m-0">
					<h6 class="text-center clr-primary-300 p-0 m-0">Kain Ihram Eksklusif</h6>
				</div>
			</div>
			<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 pb-8">
				<div class="card-gallery">
					<img src="/perlengkapan/Bantal-1.JPG" class="card-img-top top" alt="..." />
					<img src="/perlengkapan/Bantal-2.JPG" class="card-img-top bottom" alt="..." />
				</div>
				<div class="d-flex justify-content-center align-items-center p-0 m-0">
					<h6 class="text-center clr-primary-300 p-0 m-0">Bantal Leher</h6>
				</div>
			</div>
			<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 pb-8">
				<div class="card-gallery">
					<img src="/perlengkapan/Kalender-1.JPG" class="card-img-top top" alt="..." />
					<img src="/perlengkapan/Kalender-2.JPG" class="card-img-top bottom" alt="..." />
				</div>
				<div class="d-flex justify-content-center align-items-center p-0 m-0">
					<h6 class="text-center clr-primary-300 p-0 m-0">Guide Book</h6>
				</div>
			</div>
			<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 pb-8">
				<div class="card-gallery">
					<img src="/perlengkapan/Koper-1.JPG" class="card-img-top top" alt="..." />
					<img src="/perlengkapan/Koper-2.JPG" class="card-img-top bottom" alt="..." />
				</div>
				<div class="d-flex justify-content-center align-items-center p-0 m-0">
					<h6 class="text-center clr-primary-300 p-0 m-0">Koper Bagasi & Cabin</h6>
				</div>
			</div>
			<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 pb-8">
				<div class="card-gallery">
					<img src="/perlengkapan/Mukena-1.JPG" class="card-img-top top" alt="..." />
					<img src="/perlengkapan/Mukena-2.JPG" class="card-img-top bottom" alt="..." />
				</div>
				<div class="d-flex justify-content-center align-items-center p-0 m-0">
					<h6 class="text-center clr-primary-300 p-0 m-0">Mukenah Silk</h6>
				</div>
			</div>
			<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 pb-8">
				<div class="card-gallery">
					<img src="/perlengkapan/Ransel-1.JPG" class="card-img-top top" alt="..." />
					<img src="/perlengkapan/Ransel-2.JPG" class="card-img-top bottom" alt="..." />
				</div>
				<div class="d-flex justify-content-center align-items-center p-0 m-0">
					<h6 class="text-center clr-primary-300 p-0 m-0">Tas Ransel Exclusive</h6>
				</div>
			</div>
			<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 pb-8">
				<div class="card-gallery">
					<img src="/perlengkapan/Serut-1.JPG" class="card-img-top top" alt="..." />
					<img src="/perlengkapan/Serut-2.JPG" class="card-img-top bottom" alt="..." />
				</div>
				<div class="d-flex justify-content-center align-items-center p-0 m-0">
					<h6 class="text-center clr-primary-300 p-0 m-0">Tas Serut Exclusive</h6>
				</div>
			</div>
			<div class="col-12 d-flex justify-content-center align-items-center p-4">
				<div class="button-tentang">
					<button
						type="button"
						class="btn bg-primary-300 text-white fs-6 fw-bold p-3"
						on:click={() => goto('perlengkapan-umroh')}>Lihat Perlengkapan Umroh</button
					>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="hr-dashed"></div>

<div class="section-space testimoni">
	<div class="section-space--sm-bottom">
		<div class="container">
			<div class="row align-items-center g-4">
				<div class="col-12 d-flex justify-content-center align-items-center flex-column">
					<h5>TESTIMONIAL</h5>
					<h2>Mereka yang sudah berangkat</h2>
				</div>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="row d-flex">
			<div class="col-1 d-none d-sm-flex justify-content-center align-items-center">
				<div
					class="swiper-button-prev testimonial-slider-two__btn testimonial-slider-two__btn-prev"
				></div>
			</div>

			<div class="col-sm-10 p-2">
				<div class="swiper testimonial-slider-two">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="p-sm-2 rounded-4">
								<div class="bg-primary-3p rounded-4 p-4 p-sm-6">
									<ul class="list list-row align-items-center justify-content-center mb-2">
										<li>
											<span class="material-symbols-outlined mat-icon solid fs-32 clr-tertiary-300">
												star_rate
											</span>
										</li>
										<li>
											<span class="material-symbols-outlined mat-icon solid fs-32 clr-tertiary-300">
												star_rate
											</span>
										</li>
										<li>
											<span class="material-symbols-outlined mat-icon solid fs-32 clr-tertiary-300">
												star_rate
											</span>
										</li>
										<li>
											<span class="material-symbols-outlined mat-icon solid fs-32 clr-tertiary-300">
												star_rate
											</span>
										</li>
										<li>
											<span class="material-symbols-outlined mat-icon solid fs-32 clr-tertiary-300">
												star_rate
											</span>
										</li>
									</ul>
									<p class="fs-20 mb-0">
										Baru pertama kali, umroh, selama aktifitas disediakan WiFi gratis dari kartika,
										semoga bisa kembali.
									</p>
									<div class="hr-dashed my-8"></div>
									<div class="d-flex align-items-end justify-content-center">
										<div class="d-flex justify-content-between align-items-center gap-4 w-100">
											<div class="d-flex gap-4 justify-content-center align-items-center">
												<span class="d-inline-block"> 15 April 2024 </span>
											</div>
											<span class="d-block fs-20 fw-semibold mb-1 text-start"> Abdul Sodiq </span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="swiper-slide">
							<div class="p-sm-2 rounded-4">
								<div class="bg-primary-3p rounded-4 p-4 p-sm-6">
									<ul class="list list-row align-items-center justify-content-center mb-2">
										<li>
											<span class="material-symbols-outlined mat-icon solid fs-32 clr-tertiary-300">
												star_rate
											</span>
										</li>
										<li>
											<span class="material-symbols-outlined mat-icon solid fs-32 clr-tertiary-300">
												star_rate
											</span>
										</li>
										<li>
											<span class="material-symbols-outlined mat-icon solid fs-32 clr-tertiary-300">
												star_rate
											</span>
										</li>
										<li>
											<span class="material-symbols-outlined mat-icon solid fs-32 clr-tertiary-300">
												star_rate
											</span>
										</li>
										<li>
											<span class="material-symbols-outlined mat-icon solid fs-32 clr-tertiary-300">
												star_half
											</span>
										</li>
									</ul>
									<p class="fs-20 mb-0">
										Alhamdulillah pelayanan memuaskan, hotel dekat dengan Masjidil haram tinggal
										jalan saja.
									</p>
									<div class="hr-dashed my-8"></div>
									<div class="d-flex align-items-end justify-content-center">
										<div class="d-flex justify-content-between align-items-center gap-4 w-100">
											<div class="d-flex gap-4 justify-content-center align-items-center">
												<span class="d-inline-block"> 15 April 2024 </span>
											</div>
											<span class="d-block fs-20 fw-semibold mb-1 text-start"> Fatiha Jara </span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-1 d-none d-sm-flex justify-content-center align-items-center">
				<div
					class="swiper-button-next testimonial-slider-two__btn testimonial-slider-two__btn-next"
				></div>
			</div>
		</div>
	</div>
</div>
<div class="hr-dashed"></div>

<!-- Category Section  -->
<!-- <Category /> -->
<!-- /Category Section  -->

<!-- <PaketUmroh data={data.umroh} /> -->

<!-- <UmrohProcess /> -->

<!-- <PaketTransport data={data.vehicle} />
<PaketWisata paketWisata={data.paketWisata} /> -->

<!-- Button trigger modal -->
<button
	type="button"
	class="btn btn-primary"
	data-bs-toggle="modal"
	data-bs-target="#exampleModal"
	style="display: none;"
	id="popup"
>
	Launch demo modal
</button>

<!-- Modal -->
<div
	class="modal fade"
	id="exampleModal"
	tabindex="-1"
	aria-labelledby="exampleModalLabel"
	aria-hidden="true"
>
	<div class="modal-dialog modal-dialog-centered modal-lg">
		<div class="modal-content">
			<img src="/perlengkapan/silver1.png" alt="" class="img-fluid popup" />
		</div>
	</div>
</div>

<style>
	.modal-body {
		height: 80vh;
		background: white;
		padding: 0;
	}
	.popup {
		width: 100%;
	}
	.button-tentang button {
		min-width: 200px;
		padding: 10px;
		font-size: 16px;
		font-weight: 600;
		transition: transform 0.4s;
	}
	.button-tentang button:hover {
		background: #660000;
		transform: scale(1.1);
	}
	.primary {
		padding-top: clamp(3.75rem, 6.5vw, 7.5rem);
		padding-bottom: clamp(3.75rem, 6.5vw, 7.5rem);
		background-color: hsl(var(--primary-300) / 0.03);
		overflow: hidden;
		position: relative;
		display: grid;
		place-content: center;
		min-height: calc(100vh - 10.75rem);
	}

	.background-image-hero {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}
	.background-image-bawah {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 25%;
		z-index: 10;
	}
	.background-image-bawah img {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	.background-image-hero img {
		object-fit: cover;
		width: 100%;
		height: 100%;
		filter: brightness(30%);
	}
	.title {
		color: white;
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
		margin-top: -150px;
		z-index: 50;
	}

	@media (max-width: 1370px) {
		.ngambang {
			margin-top: -100px;
			z-index: 1000;
		}
		.background-image-bawah {
			display: none;
		}
	}

	@media (max-width: 1370px) {
		.title h1 {
			font-size: 32px;
		}
	}
	@media (max-width: 1000px) {
		.title h1 {
			font-size: 28px;
		}
		.fs-20 {
			font-size: 16px;
		}
		.button-tentang button {
			width: 200px;
			padding: 10px;
			font-size: 14px;
		}
		.skssl-box-icon {
		}
		h5 {
			font-size: 18px;
		}
		h2 {
			font-size: 24px;
		}
		h3 {
			font-size: 26px;
		}
		.fontcard {
			font-size: 14px;
		}
	}
	@media (max-width: 700px) {
		.form-select {
			padding: 10px;
			font-size: 12px;
		}
		.property-search__price {
			padding-block: 8px !important;
			font-size: 12px;
		}
		.property-search__price .fs-10 {
			font-size: 8px;
		}
		.property-search__price .fs-14 {
			font-size: 12px;
		}
		.title h1 {
			font-size: 20px;
		}
		.fs-20 {
			font-size: 14px;
		}
		.button-tentang button {
			width: 100px;
			padding: 10px;
			font-size: 12px;
		}
		h5 {
			font-size: 14px;
		}
		h2 {
			font-size: 18px;
		}
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
		min-height: 200px;
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
	@media (max-width: 700px) {
		.responsiveTranslate {
			width: 100%;
			height: 100%;
		}
		.responsiveTranslate h3 {
			font-size: 18px;
		}
		.responsiveTranslate p {
			font-size: 14px;
		}
		.respondalam {
			display: flex;
			justify-content: center;
			align-items: start;
			flex-direction: column;
			gap: 0px;
			padding-top: 10px;
		}
		.responbody .btn {
			padding: 4px;
		}
	}
	.responbody {
		background-color: #ffffffb8;
		display: flex;
		justify-content: start;
		height: 105%;
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
	.card-gallery {
		transition: all 1s;
		padding: 20px;
		margin: 20px;
		overflow: hidden;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
		position: relative;
		height: auto;
	}
	.card-gallery img {
		width: 100%;
		height: auto;
		border: 1px solid #ddd;
		transition: 0.5s;
	}
	.card-gallery img.top {
		z-index: 1;
	}
	.card-gallery img.bottom {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 0;
		opacity: 0;
		padding: 20px;
	}
	.card-gallery:hover img.top {
		opacity: 0;
		transform: scale(1.05);
		z-index: -1;
	}
	.card-gallery:hover img.bottom {
		opacity: 1;
		transform: scale(1.05);
	}
	.testimoni {
		/* box-shadow: inset 0 10px 10px -10px gray; */
	}
	.swiper-wrapper {
		/* max-height: 250px; */
	}
</style>
