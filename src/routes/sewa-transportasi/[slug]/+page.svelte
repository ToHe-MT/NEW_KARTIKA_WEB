<script>
	import { Turnstile } from 'svelte-turnstile';
	import Swiper from 'swiper';
	import 'swiper/css';
	import { Navigation, Pagination } from 'swiper/modules';
	import { onMount } from 'svelte';

	var swiper;
	onMount(() => {
		if (swiper) {
			swiper.destroy();
		}
		swiper = new Swiper('.swiper', {
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

	export let data;

	const info = data.info;
	console.log(info);
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

	distributeFacilities(info.feature);

	let date = new Date();
	let minStartDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
	minStartDate.setDate(minStartDate.getDate() + 1);
	minStartDate = minStartDate.toISOString().split('T')[0];

	let startDate;
	let endDate;
	let endDateMin;

	// Function to calculate the difference in days
	function getDifferenceInDays(start, end) {
		const startDate = new Date(start);
		const endDate = new Date(end);
		endDate.setDate(endDate.getDate() + 1); // Include the end date in the calculation
		const difference = endDate - startDate;
		return difference / (1000 * 3600 * 24);
	}

	// Reactive statement to calculate difference in days
	$: differenceInDays = startDate && endDate ? getDifferenceInDays(startDate, endDate) : 0;

	// Reactive validation to check if the end date is before the start date
	$: isValidDateRange = !startDate || !endDate || new Date(endDate) >= new Date(startDate);

	let selectedRoute = '';
	let basePrice = 0;
	let minimumDays = 1;

	$: if (selectedRoute && selectedRoute !== 'custom') {
		const [routeId, vehiclePrice, minimalDays] = selectedRoute.split('|');
		basePrice = parseInt(vehiclePrice);
		info.base_price = basePrice;
		minimumDays = parseInt(minimalDays);
	}

	$: {
		if (startDate) {
			endDateMin = new Date(startDate);
			endDateMin.setDate(endDateMin.getDate() + minimumDays - 1);
			endDateMin = endDateMin.toISOString().split('T')[0];
			console.log(endDateMin);
		}
	}
</script>

<!-- Property Gallery  -->

<svelte:head>
	<title>{info.name} - Paket Umroh Haji Termurah</title>
</svelte:head>

<div class="container-fluid p-0">
	<div class="row g-0">
		<div class="col-12">
			<div class="swiper property-gallery-slider">
				<div class="swiper-wrapper property-gallery-slider">
					{#each info.images as image}
						<div class="swiper-slide" style="width: auto;">
							<div class="link property-gallery paroperty-card__img">
								<img
									src="{import.meta.env.VITE_S3_PUBLIC_URL}/vehicle/{image.picture_id}"
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

<!-- /Property Gallery  -->
<!-- Property Details Body -->
<div class="bg-primary-5p">
	<div class="container">
		<div class="row">
			<div class="col-xl-8">
				<div class="section-space--sm">
					<div class="p-6 bg-neutral-0 rounded-4 mb-10">
						<div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
							<h5 class="clr-primary-300 d-inline-block mb-0">Sewa Harian</h5>
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
						<h2 class="mt-4 mb-8">{info.name}</h2>
						<div class="hr-dashed my-8"></div>
						<ul class="list list-row flex-wrap align-items-center list-divider-dot gap-4 gap-md-0">
							<li>
								<div class="d-flex align-items-center gap-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										height="24"
										viewBox="0 -960 960 960"
										width="24"
										><path
											d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-84v-120q-60-12-102-54t-54-102H164q12 109 89.5 185T440-164Zm80 0q109-12 186.5-89.5T796-440H676q-12 60-54 102t-102 54v120ZM164-520h116l120-120h160l120 120h116q-15-121-105-200.5T480-800q-121 0-211 79.5T164-520Z"
										/></svg
									>
									<p class="mb-0">Incl. Supir</p>
								</div>
							</li>
							<li>
								<div class="d-flex align-items-center gap-2">
									<span class="material-symbols-outlined mat-icon clr-secondary-500"> toll </span>
									<p class="mb-0">Incl. Toll</p>
								</div>
							</li>
							<li>
								<div class="d-flex align-items-center gap-2">
									<span class="material-symbols-outlined mat-icon clr-secondary-500">
										social_distance
									</span>
									<p class="mb-0">{info.capacity} Org</p>
								</div>
							</li>
						</ul>
					</div>
					<div class="p-6 bg-neutral-0 rounded-4 mb-10">
						<h4 class="mb-5">Deskripsi</h4>
						<p class="mb-5 clr-neutral-500" style="white-space: pre-wrap;">
							{info.desc_2}
						</p>
					</div>
					<div class="p-6 bg-neutral-0 rounded-4 mb-10">
						<h4 class="mb-5">Fasilitas</h4>
						<div class="mb-10">
							<div class="row g-4">
								<div class="col-md-4 col-lg-3">
									<ul class="list gap-4">
										{#each fac1 as fac}
											<li>
												<div class="d-flex align-items-center gap-2">
													<div
														class="w-6 h-6 d-grid place-content-center rounded-circle flex-shrink-0 bg-primary-50"
													>
														<span class="material-symbols-outlined mat-icon fs-20 clr-primary-300">
															check
														</span>
													</div>
													<span class="d-inline-block"> {fac.replace('_', ' ')} </span>
												</div>
											</li>
										{/each}
									</ul>
								</div>
								<div class="col-md-4 col-lg-3">
									<ul class="list gap-4">
										{#each fac2 as fac}
											<li>
												<div class="d-flex align-items-center gap-2">
													<div
														class="w-6 h-6 d-grid place-content-center rounded-circle flex-shrink-0 bg-primary-50"
													>
														<span class="material-symbols-outlined mat-icon fs-20 clr-primary-300">
															check
														</span>
													</div>
													<span class="d-inline-block"> {fac.replace('_', ' ')} </span>
												</div>
											</li>
										{/each}
									</ul>
								</div>
								<div class="col-md-4 col-lg-3">
									<ul class="list gap-4">
										{#each fac3 as fac}
											<li>
												<div class="d-flex align-items-center gap-2">
													<div
														class="w-6 h-6 d-grid place-content-center rounded-circle flex-shrink-0 bg-primary-50"
													>
														<span class="material-symbols-outlined mat-icon fs-20 clr-primary-300">
															check
														</span>
													</div>
													<span class="d-inline-block"> {fac.replace('_', ' ')} </span>
												</div>
											</li>
										{/each}
									</ul>
								</div>
								<div class="col-md-4 col-lg-3">
									<ul class="list gap-4">
										{#each fac4 as fac}
											<li>
												<div class="d-flex align-items-center gap-2">
													<div
														class="w-6 h-6 d-grid place-content-center rounded-circle flex-shrink-0 bg-primary-50"
													>
														<span class="material-symbols-outlined mat-icon fs-20 clr-primary-300">
															check
														</span>
													</div>
													<span class="d-inline-block"> {fac.replace('_', ' ')} </span>
												</div>
											</li>
										{/each}
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="p-6 bg-neutral-0 rounded-4 mb-10">
						<h4 class="mb-5">Informasi Supir dan Kendaraan</h4>
						<ul class="list gap-4 mb-5">
							<li>
								<div class="d-flex gap-4">
									<div
										class="w-6 h-6 d-grid place-content-center rounded-circle flex-shrink-0 bg-primary-50"
									>
										<span class="material-symbols-outlined mat-icon fs-20 clr-primary-300">
											check
										</span>
									</div>
									<span class="d-inline-block">
										Nama dan Foto Pengemudi: Kami akan memberikan nama dan foto pengemudi, sehingga
										anda tidak perlu khawatir dan dapat melakukan verifikasi.
									</span>
								</div>
							</li>
							<li>
								<div class="d-flex gap-4">
									<div
										class="w-6 h-6 d-grid place-content-center rounded-circle flex-shrink-0 bg-primary-50"
									>
										<span class="material-symbols-outlined mat-icon fs-20 clr-primary-300">
											check
										</span>
									</div>
									<span class="d-inline-block">
										Nomor plat dan model mobil: Anda akan menerima nomor plat dan model kendaraan.
										Ini akan membantu Anda mengidentifikasi kendaraan yang tepat.
									</span>
								</div>
							</li>
							<li>
								<div class="d-flex gap-4">
									<div
										class="w-6 h-6 d-grid place-content-center rounded-circle flex-shrink-0 bg-primary-50"
									>
										<span class="material-symbols-outlined mat-icon fs-20 clr-primary-300">
											check
										</span>
									</div>
									<span class="d-inline-block">
										Driver rating: Anda dapat memberikan rating terhadap driver nanti
									</span>
								</div>
							</li>
						</ul>
						<a href="#" class="link d-flex align-items-center gap-2 clr-primary-300">
							<span class="fw-semibold d-inline-block"> Read More </span>
							<span class="material-symbols-outlined mat-icon"> arrow_right_alt </span>
						</a>
					</div>
					<div class="p-6 bg-neutral-0 rounded-4 mb-10">
						<h4 class="mb-5">Cab Video</h4>
						<blockquote
							class="instagram-media"
							data-instgrm-permalink="https://www.instagram.com/reel/C4PaMryq1p3/?utm_source=ig_embed&amp;utm_campaign=loading"
							data-instgrm-version="14"
							style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"
						>
							<div style="padding:16px;">
								<a
									href="https://www.instagram.com/reel/C4PaMryq1p3/?utm_source=ig_embed&amp;utm_campaign=loading"
									style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;"
									target="_blank"
								>
									<div style=" display: flex; flex-direction: row; align-items: center;">
										<div
											style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"
										></div>
										<div
											style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"
										>
											<div
												style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"
											></div>
											<div
												style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"
											></div>
										</div>
									</div>
									<div style="padding: 19% 0;"></div>
									<div style="display:block; height:50px; margin:0 auto 12px; width:50px;">
										<svg
											width="50px"
											height="50px"
											viewBox="0 0 60 60"
											version="1.1"
											xmlns="https://www.w3.org/2000/svg"
											xmlns:xlink="https://www.w3.org/1999/xlink"
											><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
												><g transform="translate(-511.000000, -20.000000)" fill="#000000"
													><g
														><path
															d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"
														></path></g
													></g
												></g
											></svg
										>
									</div>
									<div style="padding-top: 8px;">
										<div
											style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"
										>
											View this post on Instagram
										</div>
									</div>
									<div style="padding: 12.5% 0;"></div>
									<div
										style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"
									>
										<div>
											<div
												style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"
											></div>
											<div
												style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"
											></div>
											<div
												style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"
											></div>
										</div>
										<div style="margin-left: 8px;">
											<div
												style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"
											></div>
											<div
												style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"
											></div>
										</div>
										<div style="margin-left: auto;">
											<div
												style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"
											></div>
											<div
												style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"
											></div>
											<div
												style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"
											></div>
										</div>
									</div>
									<div
										style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"
									>
										<div
											style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"
										></div>
										<div
											style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"
										></div>
									</div></a
								>
								<p
									style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"
								>
									<a
										href="https://www.instagram.com/reel/C4PaMryq1p3/?utm_source=ig_embed&amp;utm_campaign=loading"
										style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;"
										target="_blank"
										>A post shared by Kartika Mas Tour And Travel (@kartikamastour)</a
									>
								</p>
							</div>
						</blockquote>
						<script async src="//www.instagram.com/embed.js"></script>
					</div>
				</div>
			</div>
			<div class="col-xl-4">
				<form action="" method="post">
					<Turnstile siteKey="0x4AAAAAAAUhmoBRUzWB63Iy" />
					<div class="section-space--sm pb-0 mb-6 position-relative">
						<div class="bg-neutral-0 rounded-4 py-8 px-6">
							<p class="mb-3 fs-18 fw-medium">Tarif Harian</p>
							<div class="d-flex align-items-start gap-2 mb-6">
								<div class="d-flex gap-3 align-items-center">
									<span class="material-symbols-outlined mat-icon"> sell </span>
									<p class="mb-0">Dari</p>
									<h3 class="mb-0">{money.format(info.base_price)}</h3>
								</div>
								<span class="material-symbols-outlined mat-icon"> info </span>
							</div>
							<div class="list-group about-tab mb-7">
								<a class="list-group-item active" data-bs-toggle="list" href="#booking-list">
									Formulir Pemesanan
								</a>
							</div>
							<div class="tab-content mb-8">
								<div class="tab-pane fade show active" id="booking-list">
									<div class="row g-3">
										<div class="col-12" title="Masukkan Nama anda">
											<div class="input-group">
												<input
													required
													name="nama"
													type="text"
													class="form-control bg-primary-3p border border-end-0 border-neutral-40 rounded-pill rounded-end-0 py-3 px-5"
													placeholder="Masukkan Nama anda"
												/>
												<span
													class="input-group-text bg-primary-3p border border-start-0 border-neutral-40 rounded-pill rounded-start-0 py-3 pe-5 ps-0"
												>
													<span class="material-symbols-outlined mat-icon clr-neutral-100">
														person
													</span>
												</span>
											</div>
										</div>
										<div class="col-12" title="Masukkan No. whatsapp anda">
											<div class="input-group">
												<input
													required
													name="whatsapp"
													type="text"
													class="form-control bg-primary-3p border border-end-0 border-neutral-40 rounded-pill rounded-end-0 py-3 px-5"
													placeholder="Masukkan No. whatsapp anda"
												/>
												<span
													class="input-group-text bg-primary-3p border border-start-0 border-neutral-40 rounded-pill rounded-start-0 py-3 pe-5 ps-0"
												>
													<span class="material-symbols-outlined mat-icon clr-neutral-100">
														call
													</span>
												</span>
											</div>
										</div>
										<div class="col-12" title="Tulis Kecamatan & Kab Penjemputan">
											<div class="input-group">
												<input
													required
													name="lokasi_jemput"
													type="text"
													class="form-control bg-primary-3p border border-end-0 border-neutral-40 rounded-pill rounded-end-0 py-3 px-5"
													placeholder="Tulis Kecamatan & Kab Penjemputan"
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
											<div class="property-search__select property-search__col rounded-pill px-6">
												<select
													name="rute_pilihan"
													class="form-select"
													aria-label="Default select example"
													bind:value={selectedRoute}
													required
												>
													<option value="" selected="">Pilih Rute Perjalanan</option>
													<option value="custom">Custom</option>
													<option value="BALI">BALI (⭐️⭐️⭐️)</option>
													<option value="JOGJA">JOGJA (⭐️⭐️⭐️)</option>
													<option value="BANDUNG">BANDUNG (⭐️⭐️⭐️)</option>
													{#each data.route_list as route}
														<option
															value="{route.route_id}|{route.vehicle_price[info.spec.model]}|{route
																.route_information.minimal_days}|{route.title}"
															>{route.title} - {money.format(
																route.vehicle_price[info.spec.model]
															)}/hari</option
														>
													{/each}
												</select>
											</div>
										</div>
										{#if selectedRoute != 'custom' && selectedRoute != 'BALI' && selectedRoute != 'JOGJA' && selectedRoute != 'BANDUNG' && selectedRoute != ''}
											<div class="hr-dashed my-4"></div>
											<div class="d-flex align-items-center justify-content-between mb-4">
												<p class="mb-0 clr-neutral-500 ps-2 pb-1">Minimal Hari</p>
												<p class="mb-0 fw-medium">
													{selectedRoute.split('|')[2]} Hari / {money.format(
														parseInt(selectedRoute.split('|')[1]) *
															parseInt(selectedRoute.split('|')[2])
													)}
												</p>
											</div>
										{/if}
										{#if selectedRoute == 'custom'}
											<div class="col-12" title="Tulis Alamat Tujuan">
												<div class="input-group">
													<input
														name="lokasi_tujuan"
														type="text"
														class="form-control bg-primary-3p border border-end-0 border-neutral-40 rounded-pill rounded-end-0 py-3 px-5"
														placeholder="Tulis alamat tujuan"
													/>
													<span
														class="input-group-text bg-primary-3p border border-start-0 border-neutral-40 rounded-pill rounded-start-0 py-3 pe-5 ps-0"
													>
														<span class="material-symbols-outlined mat-icon clr-neutral-100">
															tour
														</span>
													</span>
												</div>
											</div>
										{/if}
										<div class="hr-dashed"></div>
										<div class="col-12">
											<p class="mb-0 clr-neutral-500 ps-2 pb-1">Jalan di tanggal:</p>
											<div class="input-group">
												<input
													required
													name="start_date"
													bind:value={startDate}
													min={minStartDate}
													type="date"
													class="form-control bg-primary-3p border border-end-0 border-neutral-40 rounded-pill rounded-end-0 py-3 px-5"
													placeholder="Booking dari tanggal"
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
											<p class="mb-0 clr-neutral-500 ps-2 pb-1">Sampai dengan:</p>
											<div class="input-group">
												<input
													name="end_date"
													bind:value={endDate}
													min={endDateMin}
													type="date"
													class="form-control bg-primary-3p border border-end-0 border-neutral-40 rounded-pill rounded-end-0 py-3 px-5"
													placeholder="Pickup Date"
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
										<div class="hr-dashed my-4"></div>
									</div>
								</div>
							</div>
							{#if selectedRoute == 'custom' || selectedRoute == 'BALI' || selectedRoute == 'JOGJA' || selectedRoute == 'BANDUNG'}
								<div class="d-flex align-items-center justify-content-center" style="height: 5vh;">
									<p>Hubungi admin untuk penawaran</p>
								</div>
							{:else}
								<div class="d-flex align-items-center justify-content-between mb-4">
									<p class="mb-0 clr-neutral-500">Minimal Hari</p>
									{#if selectedRoute != 'custom' && selectedRoute != ''}
										<p class="mb-0 fw-medium">
											{minimumDays} hari / {money.format(
												info.base_price * parseInt(selectedRoute.split('|')[2])
											)}
										</p>
									{:else}
										<p class="mb-0 fw-medium">
											{minimumDays} hari / {money.format(info.base_price)}
										</p>
									{/if}
								</div>
								<div class="d-flex align-items-center justify-content-between mb-4">
									<p class="mb-0 clr-neutral-500">Tambahan Durasi/Hari</p>
									<p class="mb-0 fw-medium">
										{differenceInDays > minimumDays
											? `${differenceInDays - minimumDays} hari / ${money.format((differenceInDays - minimumDays) * info.base_price)}`
											: '0 hari / Rp. 0'}
									</p>
								</div>
								<div class="hr-dashed my-4"></div>
								<div class="d-flex align-items-center justify-content-between mb-10">
									<p class="mb-0 clr-neutral-500">Total</p>
									<p class="mb-0 fw-medium">
										{money.format(differenceInDays * info.base_price)}
									</p>
								</div>
							{/if}
							<button
								type="submit"
								class="link d-inline-flex align-items-center gap-2 py-3 px-6 rounded-pill bg-primary-300 clr-neutral-0 :bg-primary-400 :clr-neutral-0 fw-medium w-100 justify-content-center mb-6"
							>
								<span class="d-inline-block"> Booking Sekarang! </span>
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
