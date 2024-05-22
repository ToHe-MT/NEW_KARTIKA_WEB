<script>
	export let data;
	import { goto } from '$app/navigation';

	const changePage = (page) => {
		const urlParams = new URLSearchParams(window.location.search);
		urlParams.set('page', page);
		goto(`?${urlParams.toString()}`);
	};

	const money = new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
		maximumFractionDigits: 0,
		minimumFractionDigits: 0
	});
	let valueHargaMin = 0;
	let valueHargaMax = 5;
	let valueSeatMin = 0;
	let valueSeatMax = 100;

	function handleUrutkan(e) {
		const submitButton = document.getElementById('submitButton');
		submitButton.click();
	}
	
</script>

<svelte:head>
	<title>Sewa Transportasi BUS/ELF/SUV Murah Include supir - kartikamas</title>
</svelte:head>
<!-- Cab List -->
<div class="section-space--sm bg-primary-5p">
	<div class="container-xl">
		<form action="">
			<div class="row g-4">
				<div class="col-lg-4 order-2 order-lg-1">
					<div class="py-6 px-8 bg-neutral-0 rounded-4 box-shadow">
						<h4 class="mb-0">Filter</h4>
						<div class="hr-dashed my-6 opacity-50"></div>
						<div
							class="d-flex align-items-center justify-content-between rounded-pill border border-neutral-40 bg-primary-3p px-5 py-2"
						>
							<input
								name="q"
								type="text"
								class="form-control bg-transparent border-0 focus-outline-0"
								placeholder="Cari kendaraan"
							/>
							<button type="button" class="border-0 bg-transparent p-0 lh-1">
								<span class="material-symbols-outlined mat-icon clr-neutral-600"> search </span>
							</button>
						</div>
						<div class="hr-dashed my-6 opacity-50"></div>
						<p class="mb-4 clr-neutral-700 fs-20 fw-medium">Jenis Kendaraan</p>
						<ul class="list gap-3">
							<li>
								<div class="d-flex align-items-center gap-3">
									<input
										name="BIGBUS JETBUS"
										class="custom-checkbox custom-checkbox--rounded flex-shrink-0"
										type="checkbox"
										id="BIGBUS JETBUS"
									/>
									<label
										class="clr-neutral-500 flex-grow-1 d-flex align-items-center justify-content-between"
										for="BIGBUS JETBUS"
									>
										<span class="d-inline-block"> Bigbus Jetbus </span>
									</label>
								</div>
							</li>
							<li>
								<div class="d-flex align-items-center gap-3">
									<input
										name="HIACE PREMIO LUXURY"
										class="custom-checkbox custom-checkbox--rounded flex-shrink-0"
										type="checkbox"
										id="HIACE PREMIO LUXURY"
									/>
									<label
										class="clr-neutral-500 flex-grow-1 d-flex align-items-center justify-content-between"
										for="HIACE PREMIO LUXURY"
									>
										<span class="d-inline-block"> Hiace Premio Luxury </span>
									</label>
								</div>
							</li>
							<li>
								<div class="d-flex align-items-center gap-3">
									<input
										name="ELF GIGA LONG"
										class="custom-checkbox custom-checkbox--rounded flex-shrink-0"
										type="checkbox"
										id="ELF GIGA LONG"
									/>
									<label
										class="clr-neutral-500 flex-grow-1 d-flex align-items-center justify-content-between"
										for="ELF GIGA LONG"
									>
										<span class="d-inline-block"> Elf Giga Long </span>
									</label>
								</div>
							</li>
						</ul>
						<div class="hr-dashed my-6 opacity-50"></div>
						<p class="mb-4 clr-neutral-700 fs-20 fw-medium">Fasilitas</p>
						<ul class="list gap-3">
							<li>
								<div class="d-flex align-items-center gap-3">
									<input
										name="tv"
										class="custom-checkbox custom-checkbox--rounded flex-shrink-0"
										type="checkbox"
										id="tv"
									/>
									<label
										class="clr-neutral-500 flex-grow-1 d-flex align-items-center justify-content-between"
										for="tv"
									>
										<span class="d-inline-block"> TV Set (Netflix/Youtube) </span>
									</label>
								</div>
							</li>
							<li>
								<div class="d-flex align-items-center gap-3">
									<input
										name="ps5"
										class="custom-checkbox custom-checkbox--rounded flex-shrink-0"
										type="checkbox"
										id="ps5"
									/>
									<label
										class="clr-neutral-500 flex-grow-1 d-flex align-items-center justify-content-between"
										for="ps5"
									>
										<span class="d-inline-block"> PS 5 </span>
									</label>
								</div>
							</li>
							<li>
								<div class="d-flex align-items-center gap-3">
									<input
										name="karaoke"
										class="custom-checkbox custom-checkbox--rounded flex-shrink-0"
										type="checkbox"
										id="karaoke"
									/>
									<label
										class="clr-neutral-500 flex-grow-1 d-flex align-items-center justify-content-between"
										for="karaoke"
									>
										<span class="d-inline-block"> Karaoke Set </span>
									</label>
								</div>
							</li>
							<li>
								<div class="d-flex align-items-center gap-3">
									<input
										name="kulkas"
										class="custom-checkbox custom-checkbox--rounded flex-shrink-0"
										type="checkbox"
										id="kulkas"
									/>
									<label
										class="clr-neutral-500 flex-grow-1 d-flex align-items-center justify-content-between"
										for="kulkas"
									>
										<span class="d-inline-block"> Kulkas Mini </span>
									</label>
								</div>
							</li>
						</ul>
						<div class="hr-dashed my-6 opacity-50"></div>
						<p class="mb-4 clr-neutral-700 fs-20 fw-medium">Range Harga Harian</p>
						<div class="range-slider">
							<div
								class="range-slider__progress"
								style="left: {`${valueHargaMin * 20}%`}; right: {`${100 - valueHargaMax * 20}%`}"
							></div>

							<span class="range-min-wrapper">
								<input
									name="price_start"
									class="range-slider__input range-slider__min"
									type="range"
									min="0"
									max="5"
									bind:value={valueHargaMin}
								/>
							</span>
							<span class="range-max-wrapper">
								<input
									name="price_end"
									class="range-slider__input range-slider__max"
									type="range"
									min="0"
									max="5"
									bind:value={valueHargaMax}
								/>
							</span>
						</div>
						<div class="d-flex align-items-center justify-content-center gap-2 mt-3">
							<div class="min-value range-slider__value">
								Rp. <input type="number" min="0" max="5" bind:value={valueHargaMin} disabled />
							</div>
							<span>-</span>
							<div class="max-value range-slider__value">
								Rp. <input type="number" min="0" max="5" bind:value={valueHargaMax} disabled /> jt
							</div>
						</div>
						<div class="hr-dashed my-6 opacity-50"></div>
						<p class="mb-4 clr-neutral-700 fs-20 fw-medium">Jumlah Kursi</p>
						<div class="range-slider">
							<div
								class="range-slider__progress"
								style="left: {`${valueSeatMin}%`}; right: {`${100 - valueSeatMax}%`} "
							></div>
							<span class="range-min-wrapper">
								<input
									name="seat_min"
									class="range-slider__input range-slider__min"
									type="range"
									min="0"
									max="100"
									bind:value={valueSeatMin}
								/>
							</span>
							<span class="range-max-wrapper">
								<input
									name="seat_max"
									class="range-slider__input range-slider__max"
									type="range"
									min="0"
									max="100"
									bind:value={valueSeatMax}
								/>
							</span>
						</div>
						<div class="d-flex align-items-center justify-content-center gap-2 mt-3">
							<div class="min-value range-slider__value">
								<input type="number" min="0" max="100" bind:value={valueSeatMin} disabled />
							</div>
							<span>-</span>
							<div class="max-value range-slider__value">
								<input type="number" min="0" max="100" bind:value={valueSeatMax} disabled />
							</div>
						</div>
						<div class="hr-dashed my-6 opacity-50"></div>
						<button
							id="submitButton"
							type="submit"
							class="btn btn-outline-primary py-3 px-6 rounded-pill d-inline-flex align-items-center justify-content-center gap-2 fw-semibold w-100 text-center"
						>
							<span class="material-symbols-outlined mat-icon fw-300"> search </span> Cari Transportasi
						</button>
					</div>
				</div>
				<div class="col-lg-8 order-1 order-lg-2">
					<div class="row g-4">
						<div class="col-12">
							<div class="bg-neutral-0 rounded-2 py-3 px-6 box-shadow">
								{#if data.vehicles.length}
									<ul class="list list-row align-items-center flex-wrap gap-3">
										<!-- content here -->
										<li class="d-block d-lg-block">
											<p class="mb-0 clr-neutral-500">
												Menampilkan {data.vehicles.length} dari {data.total} kendaraan
											</p>
										</li>
										<li class="flex-grow-1"></li>
										<li class="d-none d-lg-flex align-items-center">
											<p class="mb-0 clr-neutral-500 flex-grow-1">Urutkan Berdasar :</p>
											<select
												class="form-select py-0 border-0 w-auto"
												name="sort_by"
												on:change={handleUrutkan}
											>
												<option value="terbaru" selected>Listing Terbaru</option>
												<option value="kursi_terbanyak">Kursi Paling Banyak</option>
												<option value="kursi_tersedikit">Kursi Paling Sedikit</option>
												<option value="termurah">Termurah</option>
												<option value="termahal">Termahal</option>
											</select>
										</li>
									</ul>
								{:else}
									<div class="col-12">
										<div class="text-center">
											<h2 class="mt-10 mb-5">Paket tidak ditemukan</h2>
											<p class="mb-8">
												Mohon rubah filter anda atau tunggu kartikamas membuat jadwal keberangkatan
												baru
											</p>
										</div>
									</div>
								{/if}
							</div>
						</div>

						{#each data.vehicles as vehicle}
							<div class="col-12">
								<div class="property-card property-card--row property-card--row-sm">
									<div class="property-card__head">
										<div class="property-card__img">
											{#if vehicle.images.length > 0}
												<img
													src="{import.meta.env.VITE_S3_PUBLIC_URL}/vehicle/{vehicle.images[0]
														.picture_id}"
													alt="vehicle"
													class="img-fluid w-100"
												/>
											{/if}
										</div>
									</div>
									<div class="property-card__content overflow-hidden">
										<div class="property-card__body">
											<div class="row g-4 justify-content-between">
												<div class="col-xl-8">
													<div class="d-flex gap-6 mb-2">
														<a
															href="/sewa-transportasi/{vehicle.slug}"
															class="link d-block clr-neutral-700 :clr-primary-300 fs-20 fw-medium"
														>
															{vehicle.name}
														</a>
														<div class="d-flex align-items-center flex-shrink-0">
															<span
																class="material-symbols-outlined mat-icon solid clr-tertiary-300"
															>
																star_rate
															</span>
															<span class="d-block clr-neutral-700"> 4.5 </span>
														</div>
													</div>
													<ul class="list list-disc flex-wrap list-row g-3 row ps-md-2">
														<li class="ps-0 pe-4 col-md-6">Termaksud Supir</li>
														<li class="ps-0 pe-4 col-md-6">Termaksud Toll</li>
														<li class="ps-0 pe-4 col-md-6">Makanan Ringan</li>
														<!-- <li class="ps-0 col-md-6">Minuman Gratis</li> -->
													</ul>
												</div>
												<div class="col-xl-4 text-xl-end">
													<span class="d-block mb-1">
														<!-- <span class="clr-tertiary-500">20% off</span> -->
														<span class="clr-neutral-500">Per Hari</span>
													</span>
													<span class="d-block mb-5">
														<span class="clr-primary-400 fw-medium fs-20"
															>{money.format(vehicle.base_price)}</span
														>
														<!-- <span class="clr-neutral-100">$332</span> -->
													</span>
													<a
														href="/sewa-transportasi/{vehicle.slug}"
														class="btn btn-outline-primary py-2 px-6 rounded-pill d-inline-flex align-items-center gap-1 fw-semibold"
													>
														Detail
													</a>
												</div>
											</div>
											<ul class="list list-row dotted-divider mt-8 bg-secondary-5p overflow-x-auto">
												<li class="p-6 m-0 text-center flex-grow-1">
													<span
														class="material-symbols-outlined mat-icon fs-32 clr-secondary-400 d-inline-block mb-1"
													>
														group
													</span>
													<span class="d-block fs-14 max-width mx-auto">
														{vehicle.capacity} Org
													</span>
												</li>
												<li class="p-6 m-0 text-center flex-grow-1">
													<span
														class="material-symbols-outlined mat-icon fs-32 clr-secondary-400 d-inline-block mb-1"
													>
														tv
													</span>
													<span class="d-block fs-14 max-width mx-auto"> 24 Inch </span>
												</li>
												<li class="p-6 m-0 text-center flex-grow-1">
													<span
														class="material-symbols-outlined mat-icon fs-32 clr-secondary-400 d-inline-block mb-1"
													>
														mic
													</span>
													<span class="d-block fs-14 max-width mx-auto"> Karaoke </span>
												</li>
												<li class="p-6 m-0 text-center flex-grow-1">
													<span
														class="material-symbols-outlined mat-icon fs-32 clr-secondary-400 d-inline-block mb-1"
													>
														stadia_controller
													</span>
													<span class="d-block fs-14 max-width mx-auto"> PS 5 </span>
												</li>
												<li class="p-6 m-0 text-center flex-grow-1">
													<span
														class="material-symbols-outlined mat-icon fs-32 clr-secondary-400 d-inline-block mb-1"
													>
														ac_unit
													</span>
													<span class="d-block fs-14 max-width mx-auto"> Full AC </span>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						{/each}

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
<!-- /Cab List -->
