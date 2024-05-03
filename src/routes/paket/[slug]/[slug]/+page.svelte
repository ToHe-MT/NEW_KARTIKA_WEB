<script>
	import { Turnstile } from 'svelte-turnstile';

	export let data;
	const info = data.umroh;
	console.log(info.itinerari);

	import Swiper from 'swiper';
	import 'swiper/css';
	import { Navigation, Pagination } from 'swiper/modules';
	import { onMount } from 'svelte';

	var swiper;
	onMount(() => {
		if (swiper) {
			swiper.destroy();
		}
		swiper = new Swiper('.property-gallery-slider', {
			loop: true,
			slidesPerView: 'auto',
			spaceBetween: 16,
			centeredSlides: true,
			centeredSlidesBounds: true,
			navigation: {
				nextEl: '.property-gallery-slider__btn-next',
				prevEl: '.property-gallery-slider__btn-prev'
			},
			modules: [Navigation, Pagination]
		});
	});

	const money = new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
		maximumFractionDigits: 0,
		minimumFractionDigits: 0
	});

	var fac1 = [];
	var fac2 = [];
	var fac3 = [];
	var fac4 = [];

	function distributeFacilities(facilities) {
		var totalFacilities = facilities.length;
		var chunkSize = Math.ceil(totalFacilities / 4);

		for (var i = 0; i < totalFacilities; i++) {
			if (i < chunkSize) {
				fac1.push(facilities[i]);
			} else if (i >= chunkSize && i < 2 * chunkSize) {
				fac2.push(facilities[i]);
			} else if (i >= 2 * chunkSize && i < 3 * chunkSize) {
				fac3.push(facilities[i]);
			} else {
				fac4.push(facilities[i]);
			}
		}
	}

	distributeFacilities(info.facility);

	let upgrade_kamar = '';

	let jumlah_pax_quad = '';
	let jumlah_pax_triple = '';
	let jumlah_pax_double = '';

	// Function to safely parse an integer
	function safeParseInt(value) {
		// Try parsing the value into an integer
		const parsedValue = parseInt(value);

		// Check if parsing was successful and the result is a number
		if (!isNaN(parsedValue)) {
			return parsedValue; // Return the parsed integer
		} else {
			return 0; // Return 0 or any default value if parsing failed
		}
	}
	$: jumlah_pax =
		safeParseInt(jumlah_pax_double) +
			safeParseInt(jumlah_pax_triple) +
			safeParseInt(jumlah_pax_quad) || '';

	let requirements = [
		'Pasport asli berlaku minimal 8 bulan sebelum keberangkatan',
		'Copy KTP (Kartu Tanda Penduduk) dan Copy KK (Kartu Keluarga)',
		'Copy Buku Nikah (untuk suami istri)',
		'Copy Akte Kelahiran asli (untuk anak-anak)',
		'Pas foto dengan background putih tampak wajah 80%. Bagi jamaah Perempuan mengenakan jilbab berwarna',
		'Membayar deposit minimal IDR. 10.000.000'
	];

	function capitalizeEachWord(sentence) {
		// Split the sentence into words
		let words = sentence.split(' ');

		// Capitalize the first letter of each word
		for (let i = 0; i < words.length; i++) {
			words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
		}

		// Join the words back into a sentence
		return words.join(' ');
	}
</script>

<svelte:head>
	<title>{info.title} - Paket Umroh Haji Termurah</title>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
	/>
</svelte:head>

<!-- Property Gallery  -->
<div class="bg-primary-5p">
	<div class="container-fluid p-0">
		<div class="row g-0">
			<div class="col-12">
				<div class="swiper property-gallery-slider">
					<div class="swiper-wrapper">
						{#each info.images as image}
							<div class="swiper-slide" style="width: auto;">
								<div class="link property-gallery paroperty-card__img">
									<img
										src="{import.meta.env.VITE_S3_PUBLIC_URL}/schedule/{image.picture_id}"
										alt="foto hotel"
										class="img-fluid w-auto"
										style="max-height:400px !important; object-fit:cover"
									/>
								</div>
							</div>
						{/each}
					</div>
					<div
						class="swiper-button-prev property-gallery-slider__btn property-gallery-slider__btn-prev"
					></div>
					<div
						class="swiper-button-next property-gallery-slider__btn property-gallery-slider__btn-next"
					></div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- /Property Gallery  -->
<!-- Property Details Body -->
<div class="bg-primary-5p">
	<div class="container">
		<div class="row">
			<div class="col-xl-8">
				<div class="section-space--sm">
					<div class="p-6 bg-neutral-0 rounded-4 mb-10">
						<div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-8">
							<h2 class="mt-4 mb-0">{info.title}</h2>
							<ul class="list list-row gap-3 align-items-center">
								<li>
									<a
										href="#"
										class="link w-8 h-8 d-grid place-content-center bg-primary-50 clr-primary-300 rounded-circle :bg-primary-300 :clr-neutral-0"
									>
										<span class="material-symbols-outlined mat-icon fs-20"> favorite </span>
									</a>
								</li>
								<li>
									<a
										href="#"
										class="link w-8 h-8 d-grid place-content-center bg-primary-50 clr-primary-300 rounded-circle :bg-primary-300 :clr-neutral-0"
									>
										<span class="material-symbols-outlined mat-icon fs-20"> compare_arrows </span>
									</a>
								</li>
								<li>
									<a
										href="#"
										class="link w-8 h-8 d-grid place-content-center bg-primary-50 clr-primary-300 rounded-circle :bg-primary-300 :clr-neutral-0"
									>
										<span class="material-symbols-outlined mat-icon fs-20"> Share </span>
									</a>
								</li>
							</ul>
						</div>
						<ul class="list list-row flex-wrap align-items-center list-divider-dot gap-4 gap-md-0">
							<li>
								<div class="d-flex align-items-center gap-2">
									<span class="material-symbols-outlined mat-icon clr-secondary-400">
										flight_takeoff
									</span>
									<p class="mb-0">{info.departure_from}</p>
								</div>
							</li>
							<li>
								<p class="mb-0">
									Dari <span class="clr-primary-300">{info.departure_date}</span>
									s/d
									<span class="clr-primary-300">{info.return_date}</span>
								</p>
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
						<div class="hr-dashed my-8"></div>
						<div class="row px-2">
							{#if info.bonus && info.bonus.length > 0}
								{#each info.bonus as item}
									<div class="col-4 d-flex justify-content-start align-items-center p-1 gap-2">
										<span class="material-symbols-outlined mat-icon fs-20 clr-primary-300">
											{item.logo}
										</span>
										{item.title}
									</div>
								{/each}
							{/if}
						</div>
					</div>
					<div class="p-6 bg-neutral-0 rounded-4 mb-10">
						<div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
							<h4 class="mt-4 mb-0">Jadwal Perjalanan</h4>
						</div>
						<!-- Section: Timeline -->
						<section class="py-5">
							<ul class="timeline">
								{#if info.itinerari && info.itinerari.length > 0}
									{#each info.itinerari as item, idx}
										<li class="timeline-item mb-5">
											<!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role -->
											<h5
												class="fw-bold"
												data-bs-toggle="collapse"
												href={`#collapseExample${idx}`}
												role="button"
												aria-expanded="false"
												aria-controls={`collapseExample${idx}`}
											>
												Hari ke - {item.hari}
											</h5>
											<p class="text-muted mb-2 fw-bold">{capitalizeEachWord(item.route)}</p>

											<div class="collapse" id={`collapseExample${idx}`}>
												<div class="">
													<div class="">
														{#if item.deskripsi}
															<!-- content here -->
															<p class="text-muted fs-14 text-justify">
																{item.deskripsi}
															</p>
														{:else}
															<p class="text-muted fs-14 text-justify">-</p>
														{/if}
													</div>
												</div>
											</div>
										</li>
									{/each}
								{/if}
							</ul>
						</section>
						<div class="d-flex align-items-start gap-2">
							<span class="material-symbols-outlined mat-icon fs-20"> info </span>
							<p class="mb-0 fs-16">
								Note: program acara dapat berubah sewaktu – waktu tergantung kondisi cuaca pada saat
								tour berlangsung.
							</p>
						</div>
					</div>
					<div class="p-6 bg-neutral-0 rounded-4 mb-10">
						<div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
							<h4 class="mt-4 mb-0">What's Included</h4>
						</div>
						<div class="row">
							<div class="col-12 px-2">
								<ol class=" col-12 px-2 list-unstyled">
									{#if info.included && info.included.length > 0}
										{#each info.included as item, idx}
											<div class="d-flex align-items-center gap-4 py-1">
												<span
													class="material-symbols-outlined mat-icon clr-secondary-400 rounded-circle fs-20 my-1"
													style="background-color: #e4ffe2; font-weight:700;"
												>
													check
												</span>
												<p class="mb-0 fs-14">{item}</p>
											</div>
										{/each}
									{/if}
								</ol>
							</div>
						</div>
					</div>
					<div class="p-6 bg-neutral-0 rounded-4 mb-10">
						<div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
							<h4 class="mt-4 mb-0">What's Not Included</h4>
						</div>
						<div class="row">
							<div class="col-12 px-2">
								<ol class=" col-12 px-2 list-unstyled">
									{#if info.not_included && info.not_included.length > 0}
										{#each info.not_included as item, idx}
											<div class="d-flex align-items-center gap-4 py-1">
												<span
													class="material-symbols-outlined mat-icon text-danger rounded-circle fs-20 my-1"
													style="background-color: #FFE5E5; font-weight:700;"
												>
													close
												</span>
												<p class="mb-0 fs-14">{item}</p>
											</div>
										{/each}
									{/if}
								</ol>
							</div>
						</div>
					</div>
					<div class="p-6 bg-neutral-0 rounded-4 mb-10">
						<h4 class="mb-5">Persyaratan</h4>
						<ul class="list gap-4 mb-5">
							{#each requirements as item}
								<li>
									<div class="d-flex gap-4">
										<div
											class="w-6 h-6 d-grid place-content-center rounded-circle flex-shrink-0 bg-primary-50"
										>
											<span class="material-symbols-outlined mat-icon fs-20 clr-primary-300">
												check
											</span>
										</div>
										<span class="d-inline-block"> {item} </span>
									</div>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
			<div class="col-xl-4">
				<form action="" method="post">
					<Turnstile siteKey="0x4AAAAAAAUhmoBRUzWB63Iy" />
					<div class="section-space--sm pb-0 mb-6 position-relative">
						<div class="bg-neutral-0 rounded-4 py-8 px-6">
							<p class="mb-3 fs-18 fw-medium">Harga Dasar per Pax</p>
							<div class="d-flex align-items-start gap-2 mb-6">
								<div class="d-flex gap-3 align-items-center">
									<span class="material-symbols-outlined mat-icon"> sell </span>
									<h3 class="mb-0">{money.format(info.base_price)}</h3>
								</div>
								<span class="material-symbols-outlined mat-icon"> info </span>
							</div>
							<div class="list-group about-tab mb-7">
								<a class="list-group-item active" data-bs-toggle="list" href="#booking-list">
									Booking Form
								</a>
							</div>
							<div class="tab-content mb-8">
								<div class="tab-pane fade show active" id="booking-list">
									<div class="row g-3">
										<div class="col-12" style="display: none !important;">
											<div class="property-search__select property-search__col rounded-pill px-6">
												<select
													name="level_paket"
													class="form-select"
													aria-label="Default select example"
												>
													<option value="" selected="">Gunakan Personal Assistant</option>
													<option value="">Tidak</option>
													<option value="1">Gunakan</option>
												</select>
											</div>
										</div>
										<div class="col-12">
											<div class="input-group">
												<input
													required
													name="nama_pemesan"
													type="text"
													class="form-control bg-primary-3p border border-end-0 border-neutral-40 rounded-pill rounded-end-0 py-2 px-5"
													placeholder="Nama Pemesan"
												/>
												<span
													class="input-group-text bg-primary-3p border border-start-0 border-neutral-40 rounded-pill rounded-start-0 py-2 pe-5 ps-0"
												>
													<span class="material-symbols-outlined mat-icon clr-neutral-100">
														person
													</span>
												</span>
											</div>
										</div>
										<div class="col-12">
											<div class="input-group">
												<input
													required
													name="nik"
													type="number"
													maxlength="16"
													class="form-control bg-primary-3p border border-end-0 border-neutral-40 rounded-pill rounded-end-0 py-2 px-5"
													placeholder="NIK"
												/>
												<span
													class="input-group-text bg-primary-3p border border-start-0 border-neutral-40 rounded-pill rounded-start-0 py-2 pe-5 ps-0"
												>
													<span class="material-symbols-outlined mat-icon clr-neutral-100">
														badge
													</span>
												</span>
											</div>
										</div>
										<div class="col-12">
											<div class="input-group">
												<input
													required
													name="alamat"
													type="text"
													class="form-control bg-primary-3p border border-end-0 border-neutral-40 rounded-pill rounded-end-0 py-2 px-5"
													placeholder="Alamat"
												/>
												<span
													class="input-group-text bg-primary-3p border border-start-0 border-neutral-40 rounded-pill rounded-start-0 py-2 pe-5 ps-0"
												>
													<span class="material-symbols-outlined mat-icon clr-neutral-100">
														home
													</span>
												</span>
											</div>
										</div>
										<div class="col-12">
											<div class="input-group">
												<input
													required
													name="whatsapp"
													type="number"
													class="form-control bg-primary-3p border border-end-0 border-neutral-40 rounded-pill rounded-end-0 py-2 px-5"
													placeholder="No WhatsApp"
												/>
												<span
													class="input-group-text bg-primary-3p border border-start-0 border-neutral-40 rounded-pill rounded-start-0 py-2 pe-5 ps-0"
												>
													<span class="material-symbols-outlined mat-icon clr-neutral-100">
														chat
													</span>
												</span>
											</div>
										</div>
										<div class="col-12">
											<div class="px-2">Quad - default</div>
											<div class="input-group">
												<input
													required
													bind:value={jumlah_pax_quad}
													name="jumlah_pax_quad"
													min="1"
													type="number"
													class="form-control bg-primary-3p border border-end-0 border-neutral-40 rounded-pill rounded-end-0 py-2 px-5"
													placeholder="Jumlah Pax"
												/>
												<span
													class="input-group-text bg-primary-3p border border-start-0 border-neutral-40 rounded-pill rounded-start-0 py-2 pe-5 ps-0"
												>
													<span class="material-symbols-outlined mat-icon clr-neutral-100">
														group
													</span>
												</span>
											</div>
										</div>
										<div class="col-12">
											<div class="px-2">
												Triple <span class="text-body-tertiary fs-6"
													>(+{money.format(parseInt(info.hotel_price_triple))}/pax)</span
												>
											</div>
											<div class="input-group">
												<input
													required
													bind:value={jumlah_pax_triple}
													name="jumlah_pax_triple"
													min="1"
													type="number"
													class="form-control bg-primary-3p border border-end-0 border-neutral-40 rounded-pill rounded-end-0 py-2 px-5"
													placeholder="Jumlah Pax"
												/>
												<span
													class="input-group-text bg-primary-3p border border-start-0 border-neutral-40 rounded-pill rounded-start-0 py-2 pe-5 ps-0"
												>
													<span class="material-symbols-outlined mat-icon clr-neutral-100">
														group
													</span>
												</span>
											</div>
										</div>
										<div class="col-12">
											<div class="px-2">
												Double <span class="text-body-tertiary fs-6"
													>(+{money.format(parseInt(info.hotel_price_double))}/pax)</span
												>
											</div>
											<div class="input-group">
												<input
													required
													bind:value={jumlah_pax_double}
													name="jumlah_pax_double"
													min="1"
													type="number"
													class="form-control bg-primary-3p border border-end-0 border-neutral-40 rounded-pill rounded-end-0 py-2 px-5"
													placeholder="Jumlah Pax"
												/>
												<span
													class="input-group-text bg-primary-3p border border-start-0 border-neutral-40 rounded-pill rounded-start-0 py-2 pe-5 ps-0"
												>
													<span class="material-symbols-outlined mat-icon clr-neutral-100">
														group
													</span>
												</span>
											</div>
										</div>
										<!-- <div class="col-12">
											<div class="property-search__select property-search__col rounded-pill px-6">
												<select
													name="upgrade_kamar"
													class="form-select"
													aria-label="Default select example"
													bind:value={upgrade_kamar}
												>
													<option value="" selected="">Upgrade Kamar (Dari Quad)</option>
													<option value="triple">Triple - 3 orang 1 kamar</option>
													<option value="double">Double - 2 orang 1 kamar</option>
												</select>
											</div>
										</div> -->
									</div>
								</div>
								<div class="tab-pane fade" id="enquiry-list">
									<div class="row g-3">
										<div class="col-12">
											<div class="input-group">
												<input
													type="text"
													class="form-control bg-primary-3p border border-end-0 border-neutral-40 rounded-pill rounded-end-0 py-3 px-5"
													placeholder="Location"
												/>
												<span
													class="input-group-text bg-primary-3p border border-start-0 border-neutral-40 rounded-pill rounded-start-0 py-3 pe-5 ps-0"
												>
													<span class="material-symbols-outlined mat-icon clr-neutral-100">
														distance
													</span>
												</span>
											</div>
										</div>
										<div class="col-12">
											<div class="input-group">
												<input
													type="text"
													class="form-control bg-primary-3p border border-end-0 border-neutral-40 rounded-pill rounded-end-0 py-3 px-5"
													placeholder="Check In"
												/>
												<span
													class="input-group-text bg-primary-3p border border-start-0 border-neutral-40 rounded-pill rounded-start-0 py-3 pe-5 ps-0"
												>
													<span class="material-symbols-outlined mat-icon clr-neutral-100">
														calendar_month
													</span>
												</span>
											</div>
										</div>
										<div class="col-12">
											<div class="input-group">
												<input
													type="text"
													class="form-control bg-primary-3p border border-end-0 border-neutral-40 rounded-pill rounded-end-0 py-3 px-5"
													placeholder="Check Out"
												/>
												<span
													class="input-group-text bg-primary-3p border border-start-0 border-neutral-40 rounded-pill rounded-start-0 py-3 pe-5 ps-0"
												>
													<span class="material-symbols-outlined mat-icon clr-neutral-100">
														alarm_on
													</span>
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="d-flex align-items-center justify-content-between mb-4">
								<p class="mb-0 clr-neutral-500">Total Pax</p>
								<p class="mb-0 fw-medium">
									{jumlah_pax}
								</p>
							</div>
							<div class="d-flex align-items-center justify-content-between mb-4">
								<p class="mb-0 clr-neutral-500">Base Price</p>
								<p class="mb-0 fw-medium">{money.format(info.base_price)}</p>
							</div>
							<div class="d-flex align-items-center justify-content-between mb-4">
								<p class="mb-0 clr-neutral-500 fw-semibold">Total Base Price</p>
								<p class="mb-0 fw-bold">{money.format(info.base_price * jumlah_pax)}</p>
							</div>

							{#if jumlah_pax_double || jumlah_pax_triple}
								<div class="hr-dashed my-4"></div>
							{/if}
							{#if jumlah_pax_triple}
								<div class="d-flex align-items-center justify-content-between mb-4">
									<p class="mb-0 clr-neutral-500">Triple - {jumlah_pax_triple} pax</p>
									<p class="mb-0 fw-medium">
										{money.format(jumlah_pax_triple * info.hotel_price_triple)}
									</p>
								</div>
							{/if}
							{#if jumlah_pax_double}
								<div class="d-flex align-items-center justify-content-between mb-4">
									<p class="mb-0 clr-neutral-500">Double - {jumlah_pax_double} pax</p>
									<p class="mb-0 fw-medium">
										{money.format(jumlah_pax_double * info.hotel_price_double)}
									</p>
								</div>
							{/if}
							{#if jumlah_pax_double || jumlah_pax_triple}
								<div class="d-flex align-items-center justify-content-between mb-4">
									<p class="mb-0 clr-neutral-500 fw-semibold fs-6">Total Upgrade Kamar</p>
									<p class="mb-0 fw-semibold">
										{money.format(
											jumlah_pax_triple * info.hotel_price_triple +
												jumlah_pax_double * info.hotel_price_double
										)}
									</p>
								</div>
							{/if}
							<div class="hr-dashed my-4"></div>
							<div class="d-flex align-items-center justify-content-between mb-10">
								<p class="mb-0 clr-neutral-500 fw-bold">Total</p>
								<p class="mb-0 fw-bold">
									{#if jumlah_pax > 0}
										{money.format(
											jumlah_pax_triple * info.hotel_price_triple +
												jumlah_pax_double * info.hotel_price_double +
												info.base_price * jumlah_pax
										)}
									{:else}
										<i>tuliskan jumlah pax</i>
									{/if}
								</p>
							</div>
							<input
								type="text"
								style="display: none;"
								name="price"
								value={upgrade_kamar == ''
									? parseInt(info.base_price) * parseInt(jumlah_pax)
									: (parseInt(info.base_price) + parseInt(info['hotel_price_' + upgrade_kamar])) *
										parseInt(jumlah_pax)}
							/>
							<button
								type="submit"
								class="link d-inline-flex align-items-center gap-2 py-3 px-6 rounded-pill bg-primary-300 clr-neutral-0 :bg-primary-400 :clr-neutral-0 fw-medium w-100 justify-content-center mb-6"
							>
								<span class="d-inline-block"> Pesan Sekarang </span>
							</button>
							<ul class="list list-row justify-content-center gap-3 flex-wrap">
								<li>
									<img
										loading="lazy"
										src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png"
										style="width: 83px;height:27px;"
										alt="bca"
										class="img-fluid"
									/>
								</li>
								<li>
									<img
										loading="lazy"
										src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/BANK_BRI_logo.svg/1280px-BANK_BRI_logo.svg.png"
										style="width: 100px;height:27px;"
										alt="bri"
										class="img-fluid"
									/>
								</li>
								<li>
									<img
										loading="lazy"
										src="https://seeklogo.com/images/A/atm-bersama-logo-0CE85215D0-seeklogo.com.png"
										style="height:27px;"
										alt="bca"
										class="img-fluid"
									/>
								</li>
								<li>
									<img
										loading="lazy"
										src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
										style="width: 83px;height:27px;"
										alt="bca"
										class="img-fluid"
									/>
								</li>
							</ul>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>

<!-- /Property Details Body -->

<style>
	.timeline {
		border-left: 1px solid hsl(0, 0%, 77%);
		position: relative;
		list-style: none;
	}

	.timeline .timeline-item {
		position: relative;
	}

	.timeline .timeline-item:after {
		position: absolute;
		display: block;
		top: 0;
	}

	.timeline .timeline-item:after {
		background-color: hsl(0, 62%, 39%);
		left: -38px;
		border-radius: 50%;
		height: 11px;
		width: 11px;
		content: '';
	}
</style>
