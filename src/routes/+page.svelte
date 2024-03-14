<script>
	import PaketTransport from './PaketTransport.svelte';
	import Category from './Category.svelte';
	import PaketUmroh from './PaketUmroh.svelte';
	import { onMount } from 'svelte';
	import UmrohProcess from './UmrohProcess.svelte';

	export let data;
</script>

<svelte:head>
	<title>Kartika Mas Tours &amp; Travel | Umroh dan Haji Plus Murah</title>
</svelte:head>

<div class="primary-hero">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-8">
				<h1 class="d2 text-center mb-6"><span class="clr-primary-300">Haji</span>, Umroh & <span class="clr-primary-300">Wisata</span> dengan KartikaMas</h1>
				<p class="max-text-40 mx-auto text-center fs-20 mb-10">
					Kartikamas mengakomodir kebutuhan umat mulai dari umroh, haji hingga penyewaan transportasi pariwisata.
				</p>
			</div>
			<div class="col-xxl-10">
				<form action="/paket/umroh">
					<div class="property-search p-6 rounded-3 bg-neutral-0">
						<div
							class="property-search__content d-flex flex-wrap justify-content-center align-items-center gap-4"
						>
							<div
								style="display: none !important;"
								class="property-search__select property-search__col rounded-pill d-flex align-items-center gap-2 px-6"
							>
								<span class="material-symbols-outlined mat-icon"> navigation </span>
								<select class="form-select" aria-label="Default select example">
									<option value="1" selected>Umroh</option>
									<option value="2">Haji</option>
									<option value="3">Wisata</option>
								</select>
							</div>
							<div
								class="property-search__select property-search__col rounded-pill d-flex align-items-center gap-2 px-6"
							>
								<span class="material-symbols-outlined mat-icon"> person </span>
								<select name="level_paket" class="form-select" aria-label="Default select example">
									<option selected>Paket</option>
									<option value="reguler">Reguler (⭐️⭐️⭐️)</option>
									<option value="vip">VIP (⭐️⭐️⭐️⭐️)</option>
									<option value="vvip">VVIP (⭐️⭐️⭐️⭐️⭐️)</option>
									<option value="private">Private (custom)</option>
								</select>
							</div>
							<div
								class="property-search__select property-search__col rounded-pill d-flex align-items-center gap-2 px-6"
							>
								<span class="material-symbols-rounded mat-icon"> grid_view </span>
								<select
									name="bandara_keberangkatan"
									class="form-select"
									aria-label="Default select example"
								>
									<option selected>Bandara Keberangkatan</option>
									<option value="cgk">CGK</option>
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
										value="20"
										class="property-search__range-input"
										id="myRange"
										oninput="rangevalue.value=value"
									/>
								</div>
								<div class="property-search__range-price">
									<span class="d-inline-block fs-10 clr-primary-300">
										Mulai Dari <output class="property-search__range-value" id="rangevalue"
											>20JT</output
										>
									</span>
								</div>
							</div>
							<button class="btn rounded-pill property-search__btn property-search__col">
								<span class="material-symbols-rounded mat-icon"> search </span>
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
	<img
		src="https://pbs.twimg.com/media/DvrULZLWwAEipPc.jpg"
		style="width: 508px;height: 642px;"
		alt="makkah"
		class="img-fluid primary-hero__el primary-hero__img-1"
	/>
	<img
		src="https://storage2.kartikamas.id/vehicle/5181d686-dad4-4739-9ee5-d32cedcb206e.jpg"
		style="width: 508px;height: 642px;"
		alt="travel car"
		class="img-fluid primary-hero__el primary-hero__img-2"
	/>
	<img
		src="/assets/img/hotel-hero-el-4.png"
		alt="2"
		class="img-fluid primary-hero__el primary-hero__el-3"
	/>
	<img
		src="/assets/img/hotel-hero-el-1.png"
		alt="4"
		class="img-fluid primary-hero__el primary-hero__el-4"
	/>
	<img
		src="/assets/img/hotel-hero-el-3.png"
		alt="1"
		class="img-fluid primary-hero__el primary-hero__el-5"
	/>
	<img
		src="/assets/img/hotel-hero-el-4.png"
		alt="3"
		class="img-fluid primary-hero__el primary-hero__el-6"
	/>
	<img
		src="/assets/img/primary-hero-el-7.png"
		alt="8"
		class="img-fluid primary-hero__el primary-hero__el-7"
	/>
	<img
		src="/assets/img/primary-hero-el-8.png"
		alt="25"
		class="img-fluid primary-hero__el primary-hero__el-8"
	/>
</div>

<!-- Category Section  -->
<Category />
<!-- /Category Section  -->

<PaketUmroh data={data.umroh} />

<UmrohProcess />

<PaketTransport data={data.vehicle} />
