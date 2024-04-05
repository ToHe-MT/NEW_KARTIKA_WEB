<script>
	import PaketItem from '../../PaketItem.svelte';

	export let data;
	const changePage = (page) => {
		const urlParams = new URLSearchParams(window.location.search);
		urlParams.set('page', page);
		goto(`?${urlParams.toString()}`);
	};

	let minPrice = 10;
	let maxPrice = 100;
</script>

<svelte:head>
	<title>Listing Paket Umroh dan Haji Termurah & Jaminan Berangkat</title>
</svelte:head>
<!-- Property List -->
<div class="section-space--sm bg-primary-5p">
	<div class="container-lg">
		<form action="">
			<div class="row g-4">
				<div class="col-md-4">
					<div class="py-6 px-8 bg-neutral-0 rounded-4 box-shadow">
						<h4 class="mb-0">Filter</h4>
						<div class="hr-dashed my-6 opacity-50"></div>
						<div
							class="d-flex align-items-center justify-content-between rounded-pill border border-neutral-40 bg-primary-3p px-5 py-3"
						>
							<input
								name="q"
								type="text"
								class="form-control bg-transparent border-0 focus-outline-0"
								placeholder="Keywords..."
							/>
							<button type="button" class="border-0 bg-transparent p-0 lh-1">
								<span class="material-symbols-outlined mat-icon clr-neutral-600"> search </span>
							</button>
						</div>
						<div class="hr-dashed my-6 opacity-50"></div>
						<!-- <p class="mb-4 clr-neutral-700 fs-20 fw-medium">Select Types</p> -->
						<ul class="list gap-4">
							{#if data.slug == 'umroh' || data.slug == 'umroh-plus'}
								<li>
									<div class="property-search__select property-search__col rounded-pill px-6">
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
						</ul>
						<div class="hr-dashed my-6 opacity-50"></div>
						<p class="mb-4 clr-neutral-700 fs-20 fw-medium">Range Harga Dasar</p>
						<div class="range-slider">
							<div class="range-slider__progress" style="left: {minPrice}%; right: {100-maxPrice}%;"></div>
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
						</div>
						<div class="d-flex align-items-center justify-content-center gap-2 mt-3">
							<div class="min-value range-slider__value">
								Rp <input type="number" min="0" max="100" bind:value={minPrice} disabled />jt
							</div>
							<span>-</span>
							<div class="max-value range-slider__value">
								Rp <input type="number" min="0" max="100" bind:value={maxPrice} disabled />jt
							</div>
						</div>
						<div class="hr-dashed my-6 opacity-50"></div>
						<p class="mb-4 clr-neutral-700 fs-20 fw-medium">Include</p>
						<div class="row g-4">
							<div class="col-xl-6">
								<ul class="list gap-4">
									<li>
										<div class="d-flex align-items-center gap-3">
											<input
												name="kereta_cepat"
												class="custom-checkbox custom-checkbox--rounded flex-shrink-0"
												type="checkbox"
												id="kereta_cepat"
											/>
											<label class="clr-neutral-500" for="kereta_cepat">Kereta Cepat</label>
										</div>
									</li>
								</ul>
							</div>
							<!-- <div class="col-xl-6">
								<ul class="list gap-4">
									<li>
										<div class="d-flex align-items-center gap-3">
											<input
												name="laundry"
												class="custom-checkbox custom-checkbox--rounded flex-shrink-0"
												type="checkbox"
												id="laundry"
											/>
											<label class="clr-neutral-500" for="laundry">Laundry</label>
										</div>
									</li>
								</ul>
							</div> -->
						</div>
						<div class="hr-dashed my-6 opacity-50"></div>
						<button
							type="submit"
							href="#"
							class="btn btn-outline-primary py-3 px-6 rounded-pill d-inline-flex align-items-center justify-content-center gap-2 fw-semibold w-100 text-center"
						>
							<span class="material-symbols-outlined mat-icon fw-300"> search </span> Cari Paket
						</button>
					</div>
				</div>
				<div class="col-md-8">
					<div class="row g-4">
						<div class="col-12">
							<div class="bg-neutral-0 rounded-2 py-3 px-6 box-shadow">
								<ul class="list list-row align-items-center flex-wrap gap-3">
									<li class="d-none d-xl-block">
										<p class="mb-0 clr-neutral-500">
											Menampilkan {data.umroh.length} dari total {data.total} paket
										</p>
									</li>
									<li class="flex-grow-1">
										<ul
											class="list list-row flex-wrap justify-content-center justify-content-lg-start justify-content-xl-center gap-4"
										></ul>
									</li>
									<li class="d-none d-lg-flex align-items-center">
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

						{#if data.umroh.length > 0}
							<PaketItem data={data.umroh} page="paket-list" />
						{:else}
							<div class="col-12">
								<div class="bg-neutral-0 rounded-2 py-3 px-6 box-shadow">
									<div class="text-center">
										<h2 class="mt-10 mb-5">Paket tidak ditemukan</h2>
										<p class="mb-8">
											Mohon rubah filter anda atau tunggu kartikamas membuat jadwal keberangkatan
											baru
										</p>
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
