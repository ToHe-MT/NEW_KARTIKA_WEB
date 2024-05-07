<script>
	import Category from '../../Category.svelte';
	import PaketItem from '../../PaketItem.svelte';

	import Swiper from 'swiper';
	import 'swiper/css';
	import { Navigation, Pagination } from 'swiper/modules';
	import { onMount, onDestroy } from 'svelte';
	export let data;
	const changePage = (page) => {
		const urlParams = new URLSearchParams(window.location.search);
		urlParams.set('page', page);
		goto(`?${urlParams.toString(f)}`);
	};

	let minPrice;
	let maxPrice;
	let priceRange;

	$: if (priceRange) {
		if (priceRange === '') {
			minPrice = 0;
			maxPrice = 100;
		} else if (priceRange === '<30') {
			minPrice = 0;
			maxPrice = 30;
		} else if (priceRange === '30-40') {
			minPrice = 30;
			maxPrice = 40;
		} else {
			minPrice = 0;
			maxPrice = 100;
		}
	}
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
	function formatDate(dateStr) {
		// Convert string to Date object
		let date = new Date(dateStr);

		// Format the date
		let options = { day: 'numeric', month: 'long', year: 'numeric' };
		let formattedDate = date.toLocaleDateString('en-US', options);

		return formattedDate;
	}
	const money = new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
		maximumFractionDigits: 0,
		minimumFractionDigits: 0
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
</script>

<svelte:head>
	<title>Listing Paket Umroh dan Haji Termurah & Jaminan Berangkat</title>
</svelte:head>
<!-- Property List -->
<div class="section-space--sm bg-primary-3p p-4 p-md-10 pt-md-20">
	<div class="container-lg p-4 p-md-10 shadow-sm bg-white">
		<form action="">
			<div class="row g-4">
				<div class="col-12">
					<div class="py-2 bg-neutral-0 rounded-4">
						<h4 class="mb-0">
							{#if data.slug === 'umroh'}
								Paket Umrah
							{:else if data.slug === 'umroh-plus'}
								Paket Umrah Plus
							{:else if data.slug === 'haji'}
								Paket Haji
							{/if}
						</h4>
						<div class="hr-dashed my-6"></div>

						<div class="row d-flex justify-content-center align-items-end mb-10">
							<div class= "col-md-11 row m-0 p-0 d-flex justify-content-center align-items-end">
								{#if data.slug == 'umroh' || data.slug == 'umroh-plus'}
									<div
										class="col-sm-6 col-md-3 d-flex flex-column justify-content-center align-items-start gap-1"
									>
										<div class="p-1 px-1 fw-bold">Jenis Paket</div>
										<div class="property-search__select property-search__col rounded px-0 w-100">
											<select
												name="level_paket"
												class="form-select"
												aria-label="Default select example"
											>
												<option selected value="">Paket Umroh</option>
												<option value="silver">Silver (⭐️⭐️⭐️)</option>
												<option value="gold">Gold (⭐️⭐️⭐️⭐️)</option>
												<option value="platinum">Platinum (⭐️⭐️⭐️⭐️⭐️)</option>
												<option value="private">PRIVATE (CUSTOM)</option>
											</select>
										</div>
									</div>
								{/if}
								<div
									class="col-sm-6 col-md-3 d-flex flex-column justify-content-center align-items-start gap-1"
								>
									<div class="p-1 px-1 fw-bold">Bandara</div>
									<div class="property-search__select property-search__col rounded px-0 w-100">
										<select
											name="departure_from"
											class="form-select"
											aria-label="Default select example"
										>
											<option value="" selected="">Departure From</option>
											<option value="Jakarta">Jakarta</option>
										</select>
									</div>
								</div>
								<div
									class="col-sm-6 col-md-3 d-flex flex-column justify-content-center align-items-start gap-1"
								>
									<div class="p-1 px-1 fw-bold">Range Harga</div>
									<div class="property-search__select property-search__col rounded px-0 w-100">
										<select
											class="form-select"
											aria-label="Default select example"
											bind:value={priceRange}
										>
											<option value="" selected=""> Semua Paket </option>
											<option value="<30"> Dibawah 30 Jt </option>
											<option value="30-40">
												{'30 jt - 40 jt'}
											</option>
										</select>
									</div>
								</div>
								<div
									class="col-sm-6 col-md-3 d-flex flex-column justify-content-center align-items-start gap-1"
								>
									<div class="p-1 px-1 fw-bold">Judul Paket</div>
									<div
										class="d-flex align-items-center justify-content-between rounded border border-neutral-40 bg-primary-3p px-2 py-1 w-100"
									>
										<input
											name="q"
											type="text"
											class="form-control bg-transparent border-0 focus-outline-0 w-100"
											placeholder="Keywords..."
										/>
									</div>
								</div>
							</div>
							<div
								class="col-md-1 py-4 py-md-0 px-3 px-md-0 d-flex flex-column justify-content-center align-items-start gap-1 h-100 "
							>
								<button
									style="min-height: 36px;"
									type="submit"
									href="#"
									class="btn btn-outline-primary py-2 rounded d-inline-flex align-items-center justify-content-center gap-2 fw-semibold h-100 w-100 text-center"
								>
									<span class="material-symbols-outlined mat-icon fw-300"> search </span>
								</button>
							</div>
						</div>
						<input
							type="number"
							name="price_start"
							min="0"
							max="100"
							bind:value={minPrice}
							style="display: none;"
						/>
						<input
							type="number"
							name="price_end"
							min="0"
							max="100"
							bind:value={maxPrice}
							style="display: none;"
						/>

						<!-- 
						<div class="hr-dashed my-6"></div> -->
						<!-- <p class="mb-4 clr-neutral-700 fs-20 fw-medium">Select Types</p> -->
						<!-- <ul class="list gap-4">
							{#if data.slug == 'umroh' || data.slug == 'umroh-plus'}
								<li>
									<div class="property-search__select property-search__col rounded px-6">
										<select
											name="level_paket"
											class="form-select"
											aria-label="Default select example"
										>
											<option value="" selected="">Paket Umroh</option>
											<option value="reguler">Reguler (⭐️⭐️⭐️)</option>
											<option value="vip">VIP (⭐️⭐️⭐️⭐️)</option>
											<option value="vvip">VVIP (⭐️⭐️⭐️⭐️⭐️)</option>
											<option value="private">Private (custom)</option>
										</select>
									</div>
								</li>
							{/if}
							<li>
								<div class="property-search__select property-search__col rounded-pill px-6">
									<select
										name="departure_from"
										class="form-select"
										aria-label="Default select example"
									>
										<option value="" selected="">Departure From</option>
										<option value="cgk">CGK, Cengkareng</option>
									</select>
								</div>
							</li>
						</ul> -->
						<!-- <div class="hr-dashed my-6 opacity-50"></div> -->
						<!-- <p class="mb-4 clr-neutral-700 fs-20 fw-medium">Range Harga Dasar</p> -->
						<!-- <div class="range-slider">
							<div
								class="range-slider__progress"
								style="left: {minPrice}%; right: {100 - maxPrice}%;"
							></div>
							<span class="range-min-wrapper">
								<input
									name="price_start"
									class="range-slider__input range-slider__min"
									type="range"
									min="0"
									max="100"
									bind:value={minPrice}
								/>
							</span>
							<span class="range-max-wrapper">
								<input
									name="price_end"
									class="range-slider__input range-slider__max"
									type="range"
									min="0"
									max="100"
									bind:value={maxPrice}
								/>
							</span>
						</div> -->
						<!-- <div class="hr-dashed my-6 opacity-50"></div> -->
						<!-- <p class="mb-4 clr-neutral-700 fs-20 fw-medium">Include</p> -->
					</div>
				</div>
				<div class="col-12 mt-0">
					<div class="row g-4">
						<div class="col-12 mt-1">
							<div class="bg-neutral-0 rounded-2 py-3 px-md-6">
								<ul class="list list-row align-items-center flex-wrap gap-3">
									<li class="d-block">
										<p class="mb-0 clr-neutral-500">
											Menampilkan {data.umroh.length} dari total {data.total} paket
										</p>
									</li>
									<li class="flex-grow-1">
										<ul
											class="list list-row flex-wrap justify-content-center justify-content-lg-start justify-content-xl-center gap-4"
										></ul>
									</li>
									<li class="d-flex align-items-center">
										<p class="mb-0 clr-neutral-500 flex-grow-1">Urutkan Berdasar :</p>
										<select name="sort_by" class="form-select py-0 border-0 w-auto">
											<option value="terbaru" selected>Terbaru</option>
											<option value="termurah">Termurah</option>
											<option value="termahal">Termahal</option>
											<option value="waktu_dekat">Berangkat Waktu Dekat</option>
											<option value="waktu_lama">Berangkat Masih Lama</option>
										</select>
									</li>
								</ul>
							</div>
						</div>

						{#if data.umroh && data.umroh.length > 0}
							{#each data.umroh as item}
								<div class="col-12 col-md-6 col-xl-4 p-0 p-md-6">
									<div class="property-card border shadow-sm">
										<div class="property-card__head">
											<div class="swiper property-card-slider">
												<div class="swiper-wrapper">
													{#if item.images && item.images.length > 0}
														{#each item.images as image}
															{#if image.primary === true}
																<div class="swiper-slide">
																	<div class="property-card__img">
																		<img
																			src="{import.meta.env
																				.VITE_S3_PUBLIC_URL}/schedule/{image.picture_id}"
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
																			src="{import.meta.env
																				.VITE_S3_PUBLIC_URL}/schedule/{image.picture_id}"
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
													class="link d-block flex-grow-1 clr-neutral-700 :clr-primary-300 title fw-medium"
												>
													{item.title}
												</a>
												<div
													class="d-flex justify-content-end align-items-center gap-2 badge bg-danger"
												>
													10 Seats Left
												</div>
											</div>
											<ul
												class="list list-row flex-wrap align-items-center justify-content-between py-4"
											>
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
														<span class="clr-black fontcard">{formatDate(item.departure_date)}</span
														>
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
																<span
																	class="material-symbols-rounded mat-icon fw-200 clr-secondary-500"
																>
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
													<span class="d-block fs-20 fw-medium clr-primary-300 fontcard">
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

						<div class="col-12">
							<nav>
								<ul class="pagination gap-3 justify-content-center">
									{#each Array.from({ length: Math.ceil(data.total / data.limit) }, (_, i) => i + 1) as page}
										{#if page >= data.page - 2 && page <= data.page + 2}
											<li class="page-item">
												<a
													class="{data.page === page
														? 'clr-neutral-0 :clr-neutral-0 active-bg'
														: ''} page-link p-0 w-10 h-10 d-grid place-content-center lh-1 rounded-circle border border-primary-300 clr-primary-300"
													on:click={changePage(page)}
													href="#page">{page}</a
												>
											</li>
										{/if}
									{/each}
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</form>
	</div>
</div>
<!-- /Property List -->

<style>
	@media (max-width: 1000px) {
		.btn{
			padding: 8px !important;
			font-size: 12px;
		}
		.title {
			font-size: 16px;
		}
		.badge{
			font-size:10px;
		}
		h2 {
			font-size: 24px;
		}
		.fontcard {
			font-size: 14px;
		}
		.list.list-row{
			font-size: 16px;
		}
		.list.list-row .form-select{
			font-size: 16px;
			
		}
		
		
	}
	@media (max-width: 600px) {
		.list.list-row{
			font-size: 14px;
		}
		.list.list-row .form-select{
			font-size: 14px;
			max-width:100px ;
			padding-inline-end: 2px;
		}
	}
</style>