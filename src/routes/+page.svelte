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

<div class="tour-hero bg-primary-3p">
	<a
		href="https://vimeo.com/115041822"
		class="video-popup link d-grid tour-hero__el tour-hero__el-1"
	>
		<img src="/assets/img/video-btn.png" alt="image" class="img-fluid" />
	</a>
	<div class="container">
		<div class="row g-4">
			<div class="col-lg-8 col-xl-6">
				<span
					class="d-inline-flex align-items-center bg-primary-50 gap-4 rounded-pill py-1 ps-1 pe-5"
				>
					<span
						class="w-9 h-9 rounded-circle d-grid place-content-center bg-primary-300 clr-neutral-0 flex-shrink-0"
					>
						<span class="material-symbols-outlined mat-icon fw-200"> arrow_right_alt </span>
					</span>
					<span class="h5 lh-1 m-0 clr-primary-400 fw-semibold"> tanah suci memanggil </span>
				</span>
				<h1 class="d2 mt-4 mb-6 max-text-16">
					Jalankan Ibadah dengan <span class="clr-primary-300">Ketenangan</span>
				</h1>
				<p class="mb-5 fs-20">
					Kartikamas mengakomodir kebutuhan umat dalam menjalankan ibadah mulai dari keberangkatan
					hingga kepulangan dengan nyaman dan tenang.
				</p>
			</div>
			<div class="col-xxl-10">
				<form action="/paket/umroh">
					<div class="property-search p-6 rounded-3 bg-neutral-0">
						<div
							class="property-search__content d-flex flex-wrap justify-content-center align-items-center gap-4"
						>
							<div
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
									<option value="reguler">Reguler</option>
									<option value="plus">Plus</option>
									<option value="premium">Premium</option>
								</select>
							</div>
							<div
								class="property-search__select property-search__col rounded-pill d-flex align-items-center gap-2 px-6"
							>
								<span class="material-symbols-rounded mat-icon"> grid_view </span>
								<select name="perlanjutan" class="form-select" aria-label="Default select example">
									<option selected>Perlanjutan</option>
									<option value="mesir">Mesir</option>
									<option value="turki">Turki</option>
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
				<div class="d-flex align-items-center gap-4 align-items-center flex-wrap mt-10">
					<ul class="list user-group">
						<li>
							<div class="w-13 h-13 border border-neutral-0 rounded-circle overflow-hidden">
								<img
									src="https://i.pinimg.com/originals/2c/e8/14/2ce8149afc6347bcc437cc40bdafb67d.jpg"
									alt="image"
									class="w-100 h-100 object-fit-cover"
								/>
							</div>
						</li>
						<li>
							<div class="w-13 h-13 border border-neutral-0 rounded-circle overflow-hidden">
								<img
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaWaW7q4R3s74oDOf7qhz9EBj2OTwS34Amg8IUoskkED3QSqCbnTfBC2vv6micHr3jq-A&usqp=CAU"
									alt="image"
									class="w-100 h-100 object-fit-cover"
								/>
							</div>
						</li>
						<li>
							<div class="w-13 h-13 border border-neutral-0 rounded-circle overflow-hidden">
								<img
									src="https://storage.nu.or.id/storage/post/16_9/big/1604553085.jpg"
									alt="image"
									class="w-100 h-100 object-fit-cover"
								/>
							</div>
						</li>
						<li>
							<div
								class="w-13 h-13 border border-neutral-0 rounded-circle overflow-hidden position-relative"
							>
								<img
									src="https://i.pinimg.com/originals/2c/e8/14/2ce8149afc6347bcc437cc40bdafb67d.jpg"
									alt="image"
									class="w-100 h-100 object-fit-cover"
								/>
								<span class="d-grid place-content-center position-absolute inset-0 bg-primary-70p">
									<span class="material-symbols-outlined mat-icon clr-neutral-0"> add </span>
								</span>
							</div>
						</li>
					</ul>
					<p class="mb-0 fs-18">
						16 orang melakukan <span class="clr-primary-300 fw-semibold">booking</span> dalam 24jam terakhir
					</p>
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
