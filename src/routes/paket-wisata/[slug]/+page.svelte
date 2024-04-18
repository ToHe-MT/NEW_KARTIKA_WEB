<script>
	import { goto } from '$app/navigation';

	export let data;
	// console.log(data)

	const paket = data.info_paket;
	console.log(paket);
	const others = data.others;
	console.log(others);

	const images = paket.images;

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
	let jumlah_pax = 1;

	let features = {
		Hotel: '0',
		'Tiket Wisata': '1',
		Meal: '1',
		'Welcome Snack': '-1',
		'Dokumentasi Foto': '1'
	};
	let featureNames = Object.keys(features);

	let icons = {
		Hotel: 'hotel',
		'Tiket Wisata': 'local_activity',
		Meal: 'restaurant',
		'Welcome Snack': 'fastfood',
		'Dokumentasi Foto': 'photo_camera'
	};

	let Highlights = [
		'Wisata Alam Pinus Asri',
		'Bermain di Pantai Indrayanti',
		'Wisata Pintar di Museum GWK'
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

<div class="bg-primary-5p">
	<div class="container-fluid p-0">
		<div class="row g-0">
			<div class="col-12">
				{#if images && images.length > 1}
					<div class="swiper property-gallery-slider">
						<div class="swiper-wrapper">
							{#each paket.images as image}
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
				{:else if images && images.length === 1}
					<div class="container">
						<div class="row p-6 bg-neutral-0 rounded d-flex justify-content-end mt-8">
							<div class="col-xl-4 d-flex justify-content-center align-items-center">
								{#each paket.images as image}
									<img
										src="{import.meta.env.VITE_S3_PUBLIC_URL}/schedule/{image.picture_id}"
										alt="foto hotel"
										class="img-fluid w-auto rounded"
										style="max-height:400px !important; object-fit:cover"
									/>
								{/each}
							</div>
							<div class="col-xl-8 d-flex justify-content-end">
								<div class="p-6 rounded-4 d-flex flex-column justify-content-end">
									<div class="d-flex align-items-end justify-content-between flex-wrap gap-3 mb-6">
										<h2 class="mt-4 mb-0">{paket.title}</h2>
										<p class="mb-0">Mulai Dari {money.format(paket.base_price)}/pax</p>
									</div>
									<div class="d-flex align-items-start gap-2">
										<span class="material-symbols-outlined mat-icon clr-primary-300 fs-20">
											info
										</span>
										<p class="mb-0 clr-primary-300 fs-14">
											Harga tertera merupakan harga mulai dari dan dapat berubah sewaktu-waktu
											mengikuti harga dan ketersediaan pada saat pemesanan.
										</p>
									</div>

									<div class="hr-dashed my-4"></div>
									<ul
										class="list list-row flex-wrap align-items-center list-divider-dot gap-4 gap-md-0"
									>
										<li>
											<div class="d-flex align-items-center gap-2">
												<span class="material-symbols-outlined mat-icon clr-secondary-400">
													location_on
												</span>
												<p class="mb-0">{paket.destination}</p>
											</div>
										</li>
										<li>
											<div class="d-flex align-items-center gap-2">
												<span class="material-symbols-outlined mat-icon clr-primary-300">
													calendar_month
												</span>
												<p class="mb-0">
													Paket Berlaku: <span class="clr-primary-300"
														>{paket.booking_period.start.toISOString().split('T')[0]}</span
													>
													s/d
													<span class="clr-primary-300"
														>{paket.booking_period.end.toISOString().split('T')[0]}</span
													>
												</p>
											</div>
										</li>
										<li>
											<div class="d-flex align-items-center gap-1">
												<p class="mb-0">
													<span
														style="vertical-align: bottom;"
														class="material-symbols-outlined mat-icon clr-tertiary-300"
													>
														timer
													</span>
													{paket.duration}
													Hari
												</p>
											</div>
										</li>
									</ul>
									<div class="row">
										<div class=" class d-flex flex-column mt-8 col-lg-6">
											<h6 class="px-2 mb-1">Tour Highlights</h6>
											<div class="d-flex align-items-start gap-2">
												<ul>
													{#each Highlights as item}
														<li>
															{item}
														</li>
													{/each}
												</ul>
											</div>
										</div>
										<!-- <div class=" class d-flex mt-8 col-lg-6 align-items-end justify-content-end gap-2">
												{#each featureNames as item}
													<div  data-toggle="tooltip" data-placement="top" title={item} class="cursor-pointer">
														<span class="material-symbols-outlined mat-icon clr-primary-300 fs-2" >
															{icons[item]}
														</span>
													</div>
												{/each}
										</div> -->
									</div>
								</div>
							</div>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
	<!-- <div class="container-xl">
		{#if primaryImages && primaryImages.length > 0}
			<img
				src="{import.meta.env.VITE_S3_PUBLIC_URL}/schedule/{primaryImages[0].picture_id}"
				alt="foto kegiatan, hotel, acara, dll"
				style="height: 400px;"
			/>
		{/if}
	</div> -->
</div>

<div class="bg-primary-5p">
	<div class="container">
		<div class="row">
			<div class="col-xl-8">
				<div class="section-space--sm" style="padding-bottom: 0;">
					{#if images && images.length > 1}
						<div class="p-6 bg-neutral-0 rounded-4 mb-10">
							<div class="d-flex align-items-end justify-content-between flex-wrap gap-3 mb-6">
								<h2 class="mt-4 mb-0">{paket.title}</h2>
								<p class="mt-4 mb-0">Mulai Dari {money.format(paket.base_price)}/pax</p>
							</div>
							<div class="d-flex align-items-start gap-2">
								<span class="material-symbols-outlined mat-icon clr-primary-300 fs-20"> info </span>
								<p class="mb-0 clr-primary-300 fs-14">
									Harga tertera merupakan harga mulai dari dan dapat berubah sewaktu-waktu mengikuti
									harga dan ketersediaan pada saat pemesanan.
								</p>
							</div>

							<div class="hr-dashed my-4"></div>
							<ul
								class="list list-row flex-wrap align-items-center list-divider-dot gap-4 gap-md-0"
							>
								<li>
									<div class="d-flex align-items-center gap-2">
										<span class="material-symbols-outlined mat-icon clr-secondary-400">
											location_on
										</span>
										<p class="mb-0">{paket.destination}</p>
									</div>
								</li>
								<li>
									<p class="mb-0">
										Paket Berlaku: <span class="clr-primary-300"
											>{paket.booking_period.start.toISOString().split('T')[0]}</span
										>
										s/d
										<span class="clr-primary-300"
											>{paket.booking_period.end.toISOString().split('T')[0]}</span
										>
									</p>
								</li>
								<li>
									<div class="d-flex align-items-center gap-1">
										<p class="mb-0">
											<span
												style="vertical-align: bottom;"
												class="material-symbols-outlined mat-icon clr-tertiary-300"
											>
												timer
											</span>
											{paket.duration}
											Hari
										</p>
									</div>
								</li>
							</ul>
							<div class="row">
								<div class=" class d-flex flex-column mt-8 col-lg-6">
									<h6 class="px-2 mb-1">Tour Highlights</h6>
									<div class="d-flex align-items-start gap-2">
										<ul>
											{#each Highlights as item}
												<li>
													{item}
												</li>
											{/each}
										</ul>
									</div>
								</div>
								<!-- <div class=" class d-flex mt-8 col-lg-6 align-items-end justify-content-end gap-2">
										{#each featureNames as item}
											<div  data-toggle="tooltip" data-placement="top" title={item} class="cursor-pointer">
												<span class="material-symbols-outlined mat-icon clr-primary-300 fs-2" >
													{icons[item]}
												</span>
											</div>
										{/each}
								</div> -->
							</div>
						</div>
					{/if}
					<div class="p-6 bg-neutral-0 rounded-4 mb-10">
						<div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
							<h4 class="mt-4 mb-0">Jadwal Perjalanan</h4>
						</div>
						<!-- Section: Timeline -->
						<section class="py-5">
							<ul class="timeline">
								{#if paket.duration > 0 && paket.itinerari}
									{#each paket.itinerari as item, idx}
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
												Hari ke - {item.hari_ke}
											</h5>

											{#if item.subjudul}
												<p class="text-muted mb-2 fw-bold">{capitalizeEachWord(item.subjudul)}</p>
											{/if}
											<div class="collapse" id={`collapseExample${idx}`}>
												<div class="">
													<table class="table table-borderless">
														<thead>
															<tr>
																<th>Time</th>
																<th>Activity</th>
															</tr>
														</thead>
														<tbody>
															{#each item.activities as activity}
																<tr>
																	<td> {activity.start} - {activity.end} </td>
																	<td> {activity.activity} </td>
																</tr>
															{/each}
														</tbody>
													</table>
													<div class="">
														<h5
															class="cursor-pointer fs-14 fw-light fst-italic"
															data-bs-toggle="collapse"
															data-bs-target={`#collapseBelow${idx}`}
															aria-expanded="true"
															aria-controls={`collapseBelow${idx}`}
														>
															Deskripsi Perjalanan ->
														</h5>
														<div
															id={`collapseBelow${idx}`}
															class="accordion-collapse collapse"
															data-bs-parent="#accordionExample"
														>
															<p class="text-muted fs-14 text-justify">
																{item.description}
															</p>
														</div>
													</div>
												</div>
											</div>
										</li>
									{/each}
								{/if}
							</ul>
						</section>
						<!-- Section: Timeline -->
						<!-- <div class="row">
							{#if paket.duration > 0 && paket.itinerari}
								{#each paket.itinerari as item, idx}
									<div class="col-12 px-4">
										<table class="table">
											<thead>
												<tr>
													<th>Hari ke - {item.hari_ke}</th>
													<th>Acara</th>
												</tr>
											</thead>
											<tbody>
												{#each item.activities as activity}
													<tr>
														<th scope="row">{activity.start}</th>
														<td>{activity.activity}</td>
													</tr>
												{/each}
											</tbody>
										</table>
									</div>
								{/each}
							{/if}
						</div> -->
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
									{#if paket.included && paket.included.length > 0}
										{#each paket.included as item, idx}
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
									{#if paket.not_included && paket.not_included.length > 0}
										{#each paket.not_included as item, idx}
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
					<div class="p-6 bg-neutral-0 rounded-4">
						<div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
							<h4 class="mt-4 mb-0">Syarat dan Ketentuan</h4>
						</div>
						<div class="row">
							<div class="col-12 px-2">
								<ol class=" col-12 px-6">
									{#if paket.included && paket.included.length > 0}
										{#each paket.included as item, idx}
											<li class="px-1 py-1">{item}</li>
										{/each}
									{/if}
								</ol>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="col-xl-4">
				<form action="" method="post">
					<div class="section-space--sm pb-0 mb-6 position-relative">
						<div class="bg-neutral-0 rounded-4 py-8 px-6">
							<div class="row p-4 rounded">
								<p class="mb-3 fs-18 fw-medium">Harga Dasar per Pax</p>
								<div class="d-flex align-items-start gap-2 mb-6">
									<div class="d-flex gap-3 align-items-center">
										<span class="material-symbols-outlined mat-icon"> sell </span>
										<h3 class="mb-0 fs-3">{money.format(paket.base_price)}</h3>
									</div>
									<span class="material-symbols-outlined mat-icon"> info </span>
								</div>
							</div>
							<div class="list-group about-tab mb-7">
								<a class="list-group-item active" data-bs-toggle="list" href="#booking-list">
									Booking Form
								</a>
							</div>
							<div class="tab-content mb-4">
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
													placeholder="WhatsApp"
												/>
												<span
													class="input-group-text bg-primary-3p border border-start-0 border-neutral-40 rounded-pill rounded-start-0 py-2 pe-5 ps-0"
												>
													<span class="material-symbols-outlined mat-icon clr-neutral-100">
														perm_phone_msg
													</span>
												</span>
											</div>
										</div>
										<div class="col-12">
											<div class="d-flex align-items-center justify-content-between">
												<p class="fs-6 fw-medium">Jumlah Pax</p>
												<div class="d-flex gap-3">
													<span
														style="vertical-align: bottom;color:white"
														class="material-symbols-outlined mat-icon bg-primary-300 rounded cursor-pointer"
														on:click={() => {
															if (jumlah_pax > 1) {
																jumlah_pax = jumlah_pax - 1;
															}
														}}
													>
														remove
													</span>
													<p class="mb-0 fw-medium fs-6">
														{jumlah_pax}
													</p>
													<span
														style="vertical-align: bottom;color:white"
														class="material-symbols-outlined mat-icon bg-primary-300 rounded cursor-pointer"
														on:click={() => (jumlah_pax = jumlah_pax + 1)}
													>
														add
													</span>
												</div>
											</div>
										</div>
										<div class="hr-dashed"></div>
										<div class="col-12">
											{#if jumlah_pax > 0}
												<div class="d-flex align-items-center justify-content-between mb-10">
													<p class="mb-0 clr-neutral-500 fw-bold fs-6">Total</p>
													<p class="mb-0 fw-bold fs-6">
														{money.format(paket.base_price * jumlah_pax)}
													</p>
												</div>
											{/if}
										</div>
										<!-- <div class="col-12">
											<div class="px-2">Quad - default</div>
											<div class="input-group">
												<input
													required
													bind:value={jumlah_pax}
													name="jumlah_pax"
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
<div class="section-space--sm bg-primary-5p">
	<div class="container-xl">
		<div class="row px-10">
			{#if others && others.length > 0}
				<h3> Other Packages</h3>

				{#each others as item}
					<div class="col-md-6 col-lg-4 py-4">
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div
							class="property-card CARD cursor-pointer"
							style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;"
							on:click={() => goto(`paket-wisata/${item.slug}`)}
						>
							<div class="property-card__head" style="padding: 0px; border-radius: 10px 10px 0 0;">
								<div class="">
									<div class="r">
										{#each item.images as image}
											<div class="">
												<div class="property-card__img2" style="border-radius: 10px 10px 0 0;">
													<img
														src="{import.meta.env.VITE_S3_PUBLIC_URL}/schedule/{image.picture_id}"
														alt="foto hotel"
														class="img-fluid w-100"
														style="border-radius: 10px 10px 0 0;"
													/>
												</div>
											</div>
										{/each}
									</div>
								</div>
							</div>
							<div class="property-card__body">
								<div class="d-flex justify-content-between mb-2">
									<a
										href="/paket-wisata/{item.slug}"
										class="link d-block flex-grow-1 clr-neutral-700 :clr-primary-300 fs-20 fw-medium"
									>
										{item.title}
									</a>
								</div>
								<div class="d-flex justify-content-between mb-2">
									Duration : {item.duration} Hari
								</div>

								<!-- <ul class="list list-row row g-3">
								<li class="col-6">
									<div class="d-flex align-items-center gap-2">
										<span class="material-symbols-rounded mat-icon fw-200 clr-secondary-500">
											hotel
										</span>
										<span class="d-block"> 4/3/2 / Kamar </span>
									</div>
								</li>
								<li class="col-6">
									<div class="d-flex align-items-center gap-2">
										<span class="material-symbols-rounded mat-icon fw-200 clr-secondary-500">
											train
										</span>
										<span class="d-block"> Kereta Cepat </span>
									</div>
								</li>
								<li class="col-6">
									<div class="d-flex align-items-center gap-2">
										<span class="material-symbols-rounded mat-icon fw-200 clr-secondary-500">
											airport_shuttle
										</span>
										<span class="d-block"> Transport PP </span>
									</div>
								</li>
								<li class="col-6">
									<div class="d-flex align-items-center gap-2">
										<span class="material-symbols-rounded mat-icon fw-200 clr-secondary-500">
											wifi
										</span>
										<span class="d-block"> Wifi Gratis </span>
									</div>
								</li>
								<li class="col-6">
									<div class="d-flex align-items-center gap-2">
										<span class="material-symbols-rounded mat-icon fw-200 clr-secondary-500">
											video_camera_front
										</span>
										<span class="d-block"> Dokumentasi </span>
									</div>
								</li>
							</ul> -->
							</div>
							<div class="property-card__body py-0">
								<div class="hr-dashed"></div>
							</div>
							<div class="property-card__body">
								<div class="d-flex flex-wrap justify-content-between align-items-center">
									<span class="d-block fs-20 fw-medium clr-primary-300">
										{money.format(item.base_price)}/pax
									</span>
									<a
										href="/paket-wisata/{item.slug}"
										class="btn btn-outline-primary py-3 px-6 rounded-pill d-inline-flex align-items-center gap-1 fw-semibold"
									>
										Order
									</a>
								</div>
							</div>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
	<!-- <div class="container-xl">
		{#if primaryImages && primaryImages.length > 0}
			<img
				src="{import.meta.env.VITE_S3_PUBLIC_URL}/schedule/{primaryImages[0].picture_id}"
				alt="foto kegiatan, hotel, acara, dll"
				style="height: 400px;"
			/>
		{/if}
	</div> -->
</div>

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
