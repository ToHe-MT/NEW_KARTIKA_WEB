<script>
	import PaketTransport from './PaketTransport.svelte';
	import Category from './Category.svelte';
	import PaketUmroh from './PaketUmroh.svelte';
	import { onMount } from 'svelte';
	import UmrohProcess from './UmrohProcess.svelte';
	import PaketWisata from './PaketWisata.svelte';

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
</script>

<svelte:head>
	<title>Kartika Mas Tours &amp; Travel | Umroh dan Haji Plus Murah</title>
</svelte:head>

<div class="primary-hero bg-primary-3p">
	<div class="container">
		<div class="row g-4">
			<div class="col-lg-8 col-xl-7">
				<h1 class="d2 mb-6">
					<span class="clr-primary-300">Haji</span>, Umroh &
					<span class="clr-primary-300">Wisata</span> dengan Kartika Mas.
				</h1>
				<p class="fs-20 mb-10">
					Kartikamas mengakomodir kebutuhan umat mulai dari Umroh, Haji, hingga Penyewaan
					transportasi pariwisata.
				</p>
			</div>
			<div class="col-xxl-10">
				<form action={form_action[jenis_produk]}>
					<div class="property-search p-6 rounded-3 bg-neutral-0">
						<div
							class="property-search__content d-flex flex-wrap justify-content-center align-items-center gap-4"
						>
							<div
								class="property-search__select property-search__col rounded-pill d-flex align-items-center gap-2 px-6"
							>
								<span class="material-symbols-outlined mat-icon"> navigation </span>
								<select
									bind:value={jenis_produk}
									class="form-select"
									aria-label="Default select example"
								>
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
									<select
										name="level_paket"
										class="form-select"
										aria-label="Default select example"
									>
										<option selected value="">Paket</option>
										<option value="reguler">REGULER (⭐️⭐️⭐️)</option>
										<option value="vip">VIP (⭐️⭐️⭐️⭐️)</option>
										<option value="vvip">VVIP (⭐️⭐️⭐️⭐️⭐️)</option>
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
		</div>
	</div>
	<div class="background-image-hero">
		<img
			src="/Hero.png"
			style="width: 638px;height: 684px;"
			alt="makkah"
			class="img-fluid primary-hero__el primary-hero__img-1"
		/>
	</div>
</div>

<!-- Category Section  -->
<Category />
<!-- /Category Section  -->

<PaketUmroh data={data.umroh} />

<UmrohProcess />

<PaketTransport data={data.vehicle} />
<PaketWisata paketWisata={data.paketWisata}/>
