<script>
	import { goto } from '$app/navigation';
	export let data;
	$: paket_wisata = data.paket_wisata;

	const destinations = data.destinations;

	const durations = data.durations;
	let currentPage = data.page;

	$: limit = data.limit;

	$: totalData = data.totalData;
	$:  durasi = data.hari;
	$:  destinasi = data.destinasi;

	const money = new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
		maximumFractionDigits: 0,
		minimumFractionDigits: 0
	});

	const changePage = async()  => {
		try {
			await goto (`/paket-wisata?page=${currentPage}&hari=${durasi}&destinasi=${destinasi}`,{ replaceState: true, invalidateAll: true });
		} catch (error) {
			console.log(error);
		}
	};

	
</script>

<div class="section-space--sm bg-primary-5p">
	<div class="container-xl">
		<div class="row px-10">
			<div class="col-12 mb-3">
				<div class="bg-neutral-0 rounded-2 py-3 px-6 box-shadow">
					<ul
						class="nav nav-pills nav-fill gap-2 p-1 small bg-neutral-0 fs-6"
						id="pillNav2"
						role="tablist"
						style="--bs-nav-link-color: var(--bs-black); --bs-nav-pills-link-active-color: hsl(var(--neutral-0)); --bs-nav-pills-link-active-bg: hsl(var(--primary-300)); --bs-nav-link-hover-color:hsl(var(--primary-300)); "
					>
						<li class="nav-item" role="presentation">
							<button
								on:click={() => {
									durasi = 'all';
									changePage();
								}}
								class="nav-link rounded-5 {durasi === 'all' ? 'active' : ''}"
								id="all-tab2"
								data-bs-toggle="tab"
								type="button"
								role="tab"
								aria-selected="true">All</button
							>
						</li>
						<li class="nav-item" role="presentation">
							<button
								on:click={() => {
									durasi = 1;
									changePage();
								}}
								class="nav-link rounded-5 {durasi === 1 ? 'active' : ''}"
								id="1-tab2"
								data-bs-toggle="tab"
								type="button"
								role="tab"
								aria-selected="false">1 Hari</button
							>
						</li>
						<li class="nav-item" role="presentation">
							<button
								on:click={() => {
									durasi = 2;
									changePage();
								}}
								class="nav-link rounded-5 {durasi === 2 ? 'active' : ''}"
								id="2-tab2"
								data-bs-toggle="tab"
								type="button"
								role="tab"
								aria-selected="false">2 Hari</button
							>
						</li>
						<li class="nav-item" role="presentation">
							<button
								on:click={() => {
									durasi = 3;
									changePage();
								}}
								class="nav-link rounded-5 {durasi === 3 ? 'active' : ''}"
								id="3-tab2"
								data-bs-toggle="tab"
								type="button"
								role="tab"
								aria-selected="false">3 Hari</button
							>
						</li>
					</ul>
				</div>
			</div>
			<div class="col-12">
				<div class="bg-neutral-0 rounded-2 py-3 px-6 box-shadow">
					{#if paket_wisata.length}
						<ul class="list list-row align-items-center flex-wrap gap-3">
							<!-- content here -->
							<li class="d-block d-lg-block">
								<p class="mb-0 clr-neutral-500">
									Menampilkan {paket_wisata.length} dari {totalData} paket wisata
								</p>
							</li>
							<li class="flex-grow-1"></li>
							<li class="d-none d-lg-flex align-items-center">
								<p class="mb-0 clr-neutral-500 flex-grow-1">Destinasi :</p>
								<select
									class="form-select py-0 border-0 w-auto"
									name="sort_by"
									on:change={() => {
										destinasi = event.target.value;
										changePage();
									}}
								>
									<option value="all" selected={destinasi === ''}>Semua</option>
									<option value="Lembang - Bandung" selected={destinasi === 'Lembang - Bandung'}
										>Bandung</option
									>
									<option value="Bali" selected={destinasi === 'Bali'}>Bali</option>
									<option value="Bromo" selected={destinasi === 'Bromo'}>Bromo</option>
									<option value="Yogyakarta" selected={destinasi === 'Yogyakarta'}
										>Yogyakarta</option
									>
									<option value="Dieng" selected={destinasi === 'Dieng'}>Dieng</option>
								</select>
							</li>
						</ul>
					{:else}
						<ul class="list list-row align-items-center flex-wrap gap-3">
							<!-- content here -->
							<li class="d-none d-xl-block">
								<p class="mb-0 clr-neutral-500">Paket dengan durasi {durasi} hari tidak tersedia</p>
							</li>
						</ul>
					{/if}
				</div>
			</div>
			{#each paket_wisata as item}
				<div class="col-md-6 col-lg-4 py-4">
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						class="property-card CARD cursor-pointer"
						style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;"
						on:click={() => goto(`paket-wisata/${item.slug}`)}
					>
						<div class="property-card__head" style="padding: 0px; border-radius: 10px 10px 0 0;">
							<div class="swiper property-card-slider">
								<div class="swiper-wrapper">
									{#each item.images.slice(0,1) as image}
										<div class="swiper-slide">
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
			<div class="col-12">
				<nav>
					<ul class="pagination gap-3 justify-content-center">
						{#each Array.from({ length: Math.ceil(totalData / limit) }, (_, i) => i + 1) as page}
							{#if page >= currentPage - 2 && page <= currentPage + 2}
								<li class="page-item">
									<a
										class="{currentPage === page
											? 'clr-neutral-0 :clr-neutral-0 active-bg'
											: ''} page-link p-0 w-10 h-10 d-grid place-content-center lh-1 rounded-circle border border-primary-300 clr-primary-300"
										on:click={() => {
											currentPage = page;
											changePage(page);
										}}
										href="#">{page}</a
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

<style>
	.CARD:hover {
		transform: scale(1.02);
		z-index: 100;
	}
</style>
