<script>
	import Category from '../Category.svelte';

	import { onMount, onDestroy } from 'svelte';
	let gambarSlider;
	let gambarSlider2;
	import Swiper from 'swiper';
	import 'swiper/css';
	import { Navigation, Pagination } from 'swiper/modules';
	import { fade } from 'svelte/transition';
	let status = 'wanita';
	function toggleStatus(param) {
		status = param;
	}

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
		gambarSlider2 = new Swiper('.image-slider', {
			loop: true,
			slidesPerView: 1,
			breakpoints: {
				1300: {
					slidesPerView: 3
				},
				768: {
					slidesPerView: 2
				}
			},
			spaceBetween: 15,
			pagination: {
				el: '.swiper-pagination'
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			modules: [Navigation, Pagination]
		});
	});

	onDestroy(() => {
		if (gambarSlider) {
			gambarSlider = null;
		}
	});
	export let data;
	let categories = {
		'Haji dan Umrah': [
			'Paket Umroh',
			'Badal Umroh',
			'Paket Haji',
			'Badal Haji',
			'Paket Catering Umroh'
		],
		'Luar Negeri': ['Paket Tour Internasional', 'Paket Land Arrangement (LA)'],
		'Dalam Negeri': ['Paket Tour Domestik', 'Sewa Armada'],
		Others: ['Visa', 'Pemesanan Hotel', 'Pemesanan Tiket Pesawat', 'Pemesanan Tiket Kereta']
	};
</script>

<!-- ABOUT KARTIKA -->
<div class="section-space--sm d-flex justify-items-center align-items-center" style="height: 75vh;">
	<div class="container-xl">
		<!-- ABOUT US AND LOGO -->
		<div class="row px-3 px-md-10 gap-4 gap-md-0 CompanyProfile">
			<div class="col-md-4 d-flex justify-content-center align-items-center">
				<enhanced:img src="../../../static/kartikamas-logo.png?w=200" alt="assets" class="img-fluid" style="max-height: 200px; max-width:200px" />
			</div>
			<div class="col-md-8 d-flex justify-content-end fs-6 flex-column gap-2">
				<h3 class="fw-light clr-primary-300 text-md-start text-center">COMPANY PROFILE</h3>
				<h4 class="fw-bold clr-primary-300 text-center text-md-start">
					PT. KARTIKA MAS JAYA AGUNG
				</h4>
				<h5 class="fw-light m-0 text-center text-md-start">
					Jl. Barito II No.47, Kramat Pela, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus
					Ibukota Jakarta 1213 0
				</h5>
			</div>
		</div>
		<!-- MOTTO -->
		<div class="row m-md-10 m-2 rounded bg-primary-300 p-4 contact">
			<div class="col-md-6 col-lg-3 py-1">
				<a
					target="_blank"
					href="https://wa.me/+62812100591"
					class="d-flex gap-2 button-about justify-content-center"
				>
					<span class="material-symbols-outlined mat-icon fw-200 clr-neutral-0">
						perm_phone_msg
					</span>
					<h6 class="clr-neutral-0 m-0">0812 100 591</h6>
				</a>
			</div>

			<div class="col-md-6 col-lg-3 py-1">
				<a
					target="_blank"
					href="https://www.twitter.com/KartikaMas_ID"
					class="d-flex gap-2 button-about justify-content-center align-items-center"
				>
					<i class="fab fa-twitter clr-neutral-0 fs-6"></i>
					<h6 class="clr-neutral-0 m-0">@kartikamas_id</h6>
				</a>
			</div>
			<div class="col-md-6 col-lg-3 py-1">
				<a
					target="_blank"
					href="https://kartikamas.com"
					class="d-flex gap-2 button-about justify-content-center"
				>
					<span class="material-symbols-outlined mat-icon fw-200 clr-neutral-0"> language </span>
					<h6 class="clr-neutral-0 m-0">kartikamas.com</h6>
				</a>
			</div>
			<div class="col-md-6 col-lg-3 py-1">
				<div class="d-flex gap-3 justify-content-center">
					<a
						target="_blank"
						href="https://www.facebook.com/kartikamas.id"
						class="clr-neutral-0 fs-6"
					>
						<i class="fab fa-facebook-f"></i>
					</a>
					<a
						target="_blank"
						href="https://www.youtube.com/@kartikamasid"
						class="clr-neutral-0 fs-6"
					>
						<i class="fab fa-youtube"></i>
					</a>
					<a
						target="_blank"
						href="https://www.instagram.com/kartikamastour/"
						class="clr-neutral-0 fs-6"
					>
						<i class="fab fa-instagram"></i>
					</a>
					<a target="_blank" href="https://www.tiktok.com/@kartikamas" class="clr-neutral-0 fs-6">
						<i class="fab fa-tiktok"></i>
					</a>
					<h6 class="clr-neutral-0 m-0 d-md-block d-none">@kartikamas_id</h6>
				</div>
			</div>
		</div>
		<!-- VISI MISI -->
	</div>
</div>
<!-- ABOUT KARTIKA -->
<!-- IZIN SISKO PATUH -->
<div class="section-space--sm bg-primary-5p py-30">
	<div class="container-fluid">
		<div class="container-xl">
			<div
				class="izin d-flex justify-content-center align-items-center gap-4 gap-md-10"
				style="width: 100%;"
			>
				<enhanced:img
					src="../../../static/tentang/5pasti.png"
					alt="assets"
					class="img-fluid w-auto"
					style="max-height:100px;width:auto"
				/>

				<enhanced:img src="../../../static/tentang/IATA.png" alt="assets" class="img-fluid" style="max-height:100px;width:auto" />

				<enhanced:img src="../../../static/tentang/Kan.png" alt="assets" class="img-fluid" style="max-height:100px;width:auto" />

				<enhanced:img src="../../../static/tentang/Kemenga.png" alt="assets" class="img-fluid" style="max-height:100px;width:auto" />

				<enhanced:img src="../../../static/tentang/SiskoPatuh.png" alt="assets" class="img-fluid" style="max-height:100px;width:auto" />
			</div>
			<div class="izinppu d-flex justify-content-center pt-10">
				<h5 class="clr-primary-300">PPIU NO IZIN: 91205049813140002 TAHUN 2022</h5>
			</div>
		</div>
	</div>
</div>
<!-- IZIN SISKO PATUH -->
<!-- OUR SERVICES-->
<div class="py-20 w-100">
	<div class="container">
		<div class="row py-5">
			<div class="col-12 d-flex justify-content-center align-items-center flex-column">
				<h5>OUR SERVICES</h5>
				<h2 class="text-center">Layanan Kartika Mas</h2>
			</div>
		</div>
	</div>
	<div class="container py-4">
		<div class="row">
			{#each Object.keys(categories) as category}
				<div class="col-md-3 text-center text-md-start py-4 py-md-1">
					<h5>{category}</h5>
					{#each categories[category] as content}
						<p>{content}</p>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</div>
<!-- OUR SERVICES-->
<!-- UMROH SERVICE-->
<div class="py-10 w-100 bg-primary-3p">
	<div class="container">
		<div class="row py-5">
			<div class="col-12 d-flex justify-content-center align-items-center flex-column">
				<h5>UMROH FACILITY</h5>
				<h2 class="text-center">Layanan Umroh Kartika Mas</h2>
			</div>
		</div>
	</div>
	<div class="container py-4">
		<div class="row">
			<div class="col-md-4 text-center py-4 py-md-1">
				<h5>Hotel Makkah</h5>
				<div class="swiper property-card-slider">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="property-card__img">
								<enhanced:img src="../../../static/tentang/Makkah1.png?w=500px" alt="foto hotel" class="img-fluid w-100" />
							</div>
						</div>
						<div class="swiper-slide">
							<div class="property-card__img">
								<enhanced:img src="../../../static/tentang/Makkah1.png?w=500px" alt="foto hotel" class="img-fluid w-100" />
							</div>
						</div>
					</div>
					<div class="swiper-pagination property-card-pagination"></div>
					<div class="swiper-button-prev property-card-prev"></div>
					<div class="swiper-button-next property-card-next"></div>
				</div>
			</div>
			<div class="col-md-4 text-center py-4 py-md-1">
				<h5>Hotel Madinah</h5>
				<div class="swiper property-card-slider">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="property-card__img">
								<enhanced:img src="../../../static/tentang/Madinah1.png?w=500" alt="foto hotel" class="img-fluid w-100" />
							</div>
						</div>
						<div class="swiper-slide">
							<div class="property-card__img">
								<enhanced:img src="../../../static/tentang/Madinah1.png?w=500" alt="foto hotel" class="img-fluid w-100" />
							</div>
						</div>
					</div>
					<div class="swiper-pagination property-card-pagination"></div>
					<div class="swiper-button-prev property-card-prev"></div>
					<div class="swiper-button-next property-card-next"></div>
				</div>
			</div>
			<div class="col-md-4 text-center py-4 py-md-1">
				<h5>Bonus</h5>
				<div class="swiper property-card-slider">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="property-card__img">
								<enhanced:img src="../../../static/tentang/Bonus1.png?w=500" alt="foto hotel" class="img-fluid w-100" />
							</div>
						</div>
						<div class="swiper-slide">
							<div class="property-card__img">
								<enhanced:img src="../../../static/tentang/Bonus2.png?w=500" alt="foto hotel" class="img-fluid w-100" />
							</div>
						</div>
						<div class="swiper-slide">
							<div class="property-card__img">
								<enhanced:img src="../../../static/tentang/Bonus3.png?w=500" alt="foto hotel" class="img-fluid w-100" />
							</div>
						</div>
					</div>
					<div class="swiper-pagination property-card-pagination"></div>
					<div class="swiper-button-prev property-card-prev"></div>
					<div class="swiper-button-next property-card-next"></div>
				</div>
			</div>
			<div class="col-md-2 d-none d-md-block"></div>
			<!-- <div class="col-md-8 py-10">
				
				<div class="swiper image-slider">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="property-card__img img-center">
								<img src="tentang/Airlines1.png" alt="foto hotel" class="img-fluid" />
							</div>
						</div>
						<div class="swiper-slide">
							<div class="property-card__img img-center">
								<img src="tentang/Airlines2.png" alt="foto hotel" class="img-fluid" />
							</div>
						</div>
						<div class="swiper-slide">
							<div class="property-card__img img-center">
								<img src="tentang/Airlines3.png" alt="foto hotel" class="img-fluid" />
							</div>
						</div>
						<div class="swiper-slide">
							<div class="property-card__img img-center">
								<img src="tentang/Airlines4.png" alt="foto hotel" class="img-fluid" />
							</div>
						</div>
					</div>
					<div class="swiper-pagination property-card-pagination"></div>
					<div class="swiper-button-prev property-card-prev"></div>
					<div class="swiper-button-next property-card-next"></div>
				</div>
			</div> -->
			<div class="col-md-2 d-none d-md-block"></div>
		</div>
		<div class="row py-10">
			<div class="">
				<div class="p-0">
					<div class="container box-shadow bg-white rounded">
						<div class="row">
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<div class="col-6 p-0">
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<!-- svelte-ignore a11y-no-static-element-interactions -->
								<div
									on:click={() => toggleStatus('wanita')}
									class="d-flex justify-content-center align-items-center button-gender p-4 cursor-pointer {status ===
									'wanita'
										? 'active'
										: ''}"
								>
									Wanita
								</div>
							</div>
							<div class="col-6 p-0">
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<!-- svelte-ignore a11y-no-static-element-interactions -->
								<div
									on:click={() => toggleStatus('pria')}
									class="d-flex justify-content-center align-items-center button-gender p-4 cursor-pointer {status ===
									'pria'
										? 'active'
										: ''}"
								>
									Pria
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="box-shadow p-0 bg-white rounded">
					<div class="container p-10">
						{#if status === 'wanita'}
							<!-- content here -->
							<div class="row" transition:fade>
								<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 pb-8">
									<div class="card-gallery">
										<enhanced:img src="../../../static/perlengkapan/BajuCewe-1.png?w=1000" class="card-img-top top" alt="..." />
										<enhanced:img src="../../../static/perlengkapan/BajuCewe-2.png?w=1000" class="card-img-top bottom" alt="..." />
									</div>
									<div class="d-flex justify-content-center align-items-center p-0 m-0">
										<h6 class="text-center clr-primary-300 p-0 m-0">Kain Seragam Eksklusif</h6>
									</div>
								</div>
								<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 pb-8">
									<div class="card-gallery">
										<enhanced:img src="../../../static/perlengkapan/Mukena-1.png?w=1000" class="card-img-top top" alt="..." />
										<enhanced:img src="../../../static/perlengkapan/Mukena-2.png?w=1000" class="card-img-top bottom" alt="..." />
									</div>
									<div class="d-flex justify-content-center align-items-center p-0 m-0">
										<h6 class="text-center clr-primary-300 p-0 m-0">Mukenah Silk</h6>
									</div>
								</div>
							</div>
						{:else}
							<div class="row" transition:fade>
								<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 pb-8">
									<div class="card-gallery">
										<enhanced:img src="../../../static/perlengkapan/KainCowo-1.png?w=1000" class="card-img-top top" alt="..." />
										<enhanced:img src="../../../static/perlengkapan/KainCowo-2.png?w=1000" class="card-img-top bottom" alt="..." />
									</div>
									<div class="d-flex justify-content-center align-items-center p-0 m-0">
										<h6 class="text-center clr-primary-300 p-0 m-0">Kain Seragam Eksklusif</h6>
									</div>
								</div>
								<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 pb-8">
									<div class="card-gallery">
										<enhanced:img src="../../../static/perlengkapan/BajuCowo-1.png?w=1000" class="card-img-top top" alt="..." />
										<enhanced:img src="../../../static/perlengkapan/BajuCowo-2.png?w=1000" class="card-img-top bottom" alt="..." />
									</div>
									<div class="d-flex justify-content-center align-items-center p-0 m-0">
										<h6 class="text-center clr-primary-300 p-0 m-0">Kain Ihram Eksklusif</h6>
									</div>
								</div>
							</div>
						{/if}
						<div class="col-12 d-flex justify-content-center align-items-center p-4">
							<div class="button-tentang">
								<button
									type="button"
									class="btn bg-primary-300 text-white fs-6 fw-bold p-3"
									on:click={() => goto('perlengkapan-umroh')}>Lihat Perlengkapan Umroh</button
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- Umroh SERVICES-->

<!-- Contact Us-->
<div class="py-30 w-100">
	<div class="container Contact">
		<div
			class="d-flex justify-content-centar align-items-center box-shadow flex-column gap-8 py-20 mx-4 mx-md-30 border"
		>
			<div class="d-flex justify-content-center align-items-center flex-column">
				<h5>CONTACT US</h5>
				<h2 class="text-center">Kartika Mas</h2>
			</div>
			<a
				href="mailto:admin@kartikamas.com"
				class="d-flex justify-content-center align-items-center gap-5 :clr-primary-300"
			>
				<span class="material-symbols-outlined mat-icon fw-200 fs-3"> email </span>
				<h6 class="m-0">admin@kartikamas.com</h6>
			</a>
			<a
				href="https://maps.app.goo.gl/SmofqqxQzWGUVTpL6?g_st=ic"
				target="_blank"
				class="d-flex justify-content-center align-items-center gap-5 :clr-primary-300"
			>
				<span class="material-symbols-outlined mat-icon fw-200 fs-3"> location_on </span>
				<h6 class="m-0">Jl. Barito II No.47, Kramat Pela</h6>
			</a>
			<div class="d-flex justify-content-center align-items-center gap-5 :clr-primary-300">
				<span class="material-symbols-outlined mat-icon fw-200 fs-3"> phone </span>
				<div>
					<a href="https://wa.me/62812100591" target="_blank">
						<h6 class="m-0">Admin 1 (62) 812-100-591</h6>
					</a>
					<a href="https://wa.me/62812100592" target="_blank">
						<h6 class="m-0">Admin 2 (62) 812-100-592</h6>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- OUR SERVICES-->

<!-- KENAPA KAMi -->
<!-- <section class="section-space featured-property-selection">
	<div class="section-space--sm-bottom px-10">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-8 col-xxl-6">
					<div class="text-center">
						<span
							class="d-inline-flex align-items-center bg-primary-50 gap-4 rounded-pill py-1 ps-1 pe-5"
						>
							<span
								class="w-9 h-9 rounded-circle d-grid place-content-center bg-primary-300 clr-neutral-0 flex-shrink-0"
							>
								<span class="material-symbols-outlined mat-icon fw-200"> arrow_right_alt </span>
							</span>
							<span class="h5 lh-1 m-0 clr-primary-400 fw-semibold"> Kenapa Kami? </span>
						</span>
						<h2 class="mt-4 mb-6">Satu Layanan Banyak Untungnya</h2>
					</div>
				</div>
			</div>
			<div class="container">
				<div class="row g-4">
					{#each data.layanan as item}
						<div class="col-sm-12 col-md-6 col-lg-3">
							<div class=" rounded-4 p-4 p-md-8 text-center">
								<div
									class="d-grid place-content-center clr-primary-300 mx-auto"
									style="width: 9rem; height:9rem"
								>
									<span class="material-symbols-outlined mat-icon fw-200 color-primary-300 fs-120">
										{item.icon}
									</span>
								</div>
								<h3 class="mt-8 mb-5">{item.nama}</h3>
								<p class="mb-0" style="min-height: 6rem;">
									{item.desc}
								</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section> -->

<!-- PAKET KAMI -->
<!-- <section class="section-space position-relative z-1 bg-primary-5p">
	<img
		src="/assets/img/category-section-el.png"
		alt="image"
		class="img-fluid d-none d-xxl-block position-absolute category-section-element"
	/>
	<div class="section-space--sm-bottom">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-8 col-xxl-6">
					<div class="text-center">
						<span
							class="d-inline-flex align-items-center bg-primary-50 gap-4 rounded-pill py-1 ps-1 pe-5"
						>
							<span
								class="w-9 h-9 rounded-circle d-grid place-content-center bg-primary-300 clr-neutral-0 flex-shrink-0"
							>
								<span class="material-symbols-outlined mat-icon fw-200"> arrow_right_alt </span>
							</span>
							<span class="h5 lh-1 m-0 clr-primary-400 fw-semibold"> Paket </span>
						</span>
						<h2 class="mt-4 mb-6">Pilih Paket Servis Kami</h2>
						<p class="mb-0">
							Tak hanya menyediakan layanan umroh dan haji, kartikamas juga melayani reservasi
							transportasi untuk tour dan travel.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="row g-4">
			<div class="col-md-6 col-lg-6 col-xl-3">
				<div
					class="category-card border rounded-4 transition bg-neutral-0 :bg-primary-300 :clr-neutral-0"
				>
					<div class="p-8">
						<span class="material-symbols-outlined fs-60 clr-primary-300 lh-1 transition">
							groups
						</span>
						<h5 class="mt-5 transition">Umroh</h5>
						<p class="mb-0">Paket umroh murah bintang 5 jaminan berangkat</p>
					</div>
					<div class="category-card__footer transition">
						<a
							href="/paket/umroh"
							class="link d-flex gap-1 align-items-center fw-semibold clr-primary-400 transition p-8"
						>
							Lihat Paket <span class="material-symbols-outlined mat-icon fw-200">
								arrow_right_alt
							</span>
						</a>
					</div>
				</div>
			</div>
			<div class="col-md-6 col-lg-6 col-xl-3">
				<div
					class="category-card border rounded-4 transition bg-neutral-0 :bg-primary-300 :clr-neutral-0"
				>
					<div class="p-8">
						<span class="material-symbols-outlined fs-60 clr-secondary-500 lh-1 transition">
							mosque
						</span>
						<h5 class="mt-5 transition">Haji Khusus</h5>
						<p class="mb-0">haji khusus premium berangkat tahun ini.</p>
					</div>
					<div class="category-card__footer transition">
						<a
							href="/paket/haji"
							class="link d-flex gap-1 align-items-center fw-semibold clr-primary-400 transition p-8"
						>
							Lihat Paket <span class="material-symbols-outlined mat-icon fw-200">
								arrow_right_alt
							</span>
						</a>
					</div>
				</div>
			</div>
			<div class="col-md-6 col-lg-6 col-xl-3">
				<div
					class="category-card border rounded-4 transition bg-neutral-0 :bg-primary-300 :clr-neutral-0"
				>
					<div class="p-8">
						<span class="material-symbols-outlined fs-60 clr-tertiary-500 lh-1 transition">
							emoji_transportation
						</span>
						<h5 class="mt-5 transition">Sewa Kendaraan</h5>
						<p class="mb-0">Sewa bus, elf, suv dengan fasilitas tv, ps5, netflix.</p>
					</div>
					<div class="category-card__footer transition">
						<a
							href="/sewa-transportasi"
							class="link d-flex gap-1 align-items-center fw-semibold clr-primary-400 transition p-8"
						>
							Lihat Kendaraan <span class="material-symbols-outlined mat-icon fw-200">
								arrow_right_alt
							</span>
						</a>
					</div>
				</div>
			</div>
			<div class="col-md-6 col-lg-6 col-xl-3">
				<div
					class="category-card border rounded-4 transition bg-neutral-0 :bg-primary-300 :clr-neutral-0"
				>
					<div class="p-8">
						<span class="material-symbols-outlined fs-60 clr-tertiary-500 lh-1 transition">
							attractions
						</span>
						<h5 class="mt-5 transition">Paket Wisata</h5>
						<p class="mb-0">Paket Tour Wisata dengan 25+ pilihan paket</p>
					</div>
					<div class="category-card__footer transition">
						<a
							href="/paket-wisata"
							class="link d-flex gap-1 align-items-center fw-semibold clr-primary-400 transition p-8"
						>
							Lihat Paket Wisata <span class="material-symbols-outlined mat-icon fw-200">
								arrow_right_alt
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section> -->

<!-- CONTACT US -->
<!-- <section class="section-space position-relative z-1">
	<img
		src="/assets/img/category-section-el.png"
		alt="image"
		class="img-fluid d-none d-xxl-block position-absolute category-section-element"
	/>
	<div class="section-space--sm-bottom">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-8 col-xxl-6">
					<div class="text-center">
						<span
							class="d-inline-flex align-items-center bg-primary-50 gap-4 rounded-pill py-1 ps-1 pe-5"
						>
							<span
								class="w-9 h-9 rounded-circle d-grid place-content-center bg-primary-300 clr-neutral-0 flex-shrink-0"
							>
								<span class="material-symbols-outlined mat-icon fw-200"> arrow_right_alt </span>
							</span>
							<span class="h5 lh-1 m-0 clr-primary-400 fw-semibold"> Kontak </span>
						</span>
						<h2 class="mt-4 mb-6">Hubungi Kami</h2>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="row g-4">
			<div class="col-md-6 col-lg-6 col-xl-3">
				<div
					class="category-card border rounded-4 transition bg-neutral-0 :bg-primary-300 :clr-neutral-0"
				>
					<div class="p-8">
						<span class="material-symbols-outlined fs-60 clr-primary-300 lh-1 transition">
							groups
						</span>
						<h5 class="mt-5 transition">Umroh</h5>
						<p class="mb-0">Paket umroh murah bintang 5 jaminan berangkat</p>
					</div>
					<div class="category-card__footer transition">
						<a
							href="im/paket/umroh"
							class="link d-flex gap-1 align-items-center fw-semibold clr-primary-400 transition p-8"
						>
							Lihat Paket <span class="material-symbols-outlined mat-icon fw-200">
								arrow_right_alt
							</span>
						</a>
					</div>
				</div>
			</div>
			<div class="col-md-6 col-lg-6 col-xl-3">
				<div
					class="category-card border rounded-4 transition bg-neutral-0 :bg-primary-300 :clr-neutral-0"
				>
					<div class="p-8">
						<span class="material-symbols-outlined fs-60 clr-secondary-500 lh-1 transition">
							mosque
						</span>
						<h5 class="mt-5 transition">Haji Khusus</h5>
						<p class="mb-0">haji khusus premium berangkat tahun ini.</p>
					</div>
					<div class="category-card__footer transition">
						<a
							href="/paket/haji"
							class="link d-flex gap-1 align-items-center fw-semibold clr-primary-400 transition p-8"
						>
							Lihat Paket <span class="material-symbols-outlined mat-icon fw-200">
								arrow_right_alt
							</span>
						</a>
					</div>
				</div>
			</div>
			<div class="col-md-6 col-lg-6 col-xl-3">
				<div
					class="category-card border rounded-4 transition bg-neutral-0 :bg-primary-300 :clr-neutral-0"
				>
					<div class="p-8">
						<span class="material-symbols-outlined fs-60 clr-tertiary-500 lh-1 transition">
							emoji_transportation
						</span>
						<h5 class="mt-5 transition">Sewa Kendaraan</h5>
						<p class="mb-0">Sewa bus, elf, suv dengan fasilitas tv, ps5, netflix.</p>
					</div>
					<div class="category-card__footer transition">
						<a
							href="/sewa-transportasi"
							class="link d-flex gap-1 align-items-center fw-semibold clr-primary-400 transition p-8"
						>
							Lihat Kendaraan <span class="material-symbols-outlined mat-icon fw-200">
								arrow_right_alt
							</span>
						</a>
					</div>
				</div>
			</div>
			<div class="col-md-6 col-lg-6 col-xl-3">
				<div
					class="category-card border rounded-4 transition bg-neutral-0 :bg-primary-300 :clr-neutral-0"
				>
					<div class="p-8">
						<span class="material-symbols-outlined fs-60 clr-tertiary-500 lh-1 transition">
							attractions
						</span>
						<h5 class="mt-5 transition">Paket Wisata</h5>
						<p class="mb-0">Paket Tour Wisata dengan 25+ pilihan paket</p>
					</div>
					<div class="category-card__footer transition">
						<a
							href="/paket-wisata"
							class="link d-flex gap-1 align-items-center fw-semibold clr-primary-400 transition p-8"
						>
							Lihat Paket Wisata <span class="material-symbols-outlined mat-icon fw-200">
								arrow_right_alt
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section> -->

<style>
	@media (max-width: 1000px) {
		.CompanyProfile h3 {
			font-size: larger;
		}
		.CompanyProfile h4 {
			font-size: large;
		}
		.CompanyProfile h5 {
			font-size: medium;
		}
	}
	@media (max-width: 1200px) {
		.izin img {
			height: 50px !important;
		}
		.izinppu h5 {
			font-size: 16px;
		}
	}
	@media (max-width: 600px) {
		.izin img {
			height: 40px !important;
		}
		.izinppu h5 {
			font-size: 14px;
		}
	}
	@media (max-width: 400px) {
		.izin img {
			height: 30px !important;
		}
		.izinppu h5 {
			font-size: 14px;
		}
	}
	.contact a {
		text-decoration: none;
		transition: 0.5s;
	}

	.swiper.image-slider {
		padding: 50px;
	}
	.contact a:hover {
		transform: scale(1.05);
	}
	.img-center {
		padding: 15px;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%; /* Ensure the container takes the full height of the slide */
	}

	.property-card__img img {
		max-width: 100%; /* Ensure the image does not exceed the container's width */
		max-height: 100%; /* Ensure the image does not exceed the container's height */
	}

	.card-gallery {
		transition: all 1s;
		padding: 20px;
		margin: 10px;
		overflow: hidden;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
		position: relative;
		height: auto;
	}
	.card-gallery img {
		width: 100%;
		height: auto;
		border: 1px solid #ddd;
		transition: all ease-in-out 0.5s;
	}
	.card-gallery img.top {
		z-index: 1;
	}
	.card-gallery img.bottom {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 0;
		opacity: 0;
		padding: 20px;
	}
	.card-gallery:hover img.top {
		opacity: 0;
		transform: scale(1.05);
		z-index: -1;
	}
	.card-gallery:hover img.bottom {
		opacity: 1;
		transform: scale(1.05);
	}
	.button-gender {
		padding: 0;
		border-bottom: 0.1px solid rgb(213, 213, 213);
	}
	.button-gender:hover {
		color: #660000;
		border-bottom: 2px solid #660000;
	}
	.button-gender.active {
		color: #660000;
		border-bottom: 2px solid #660000;
	}

	h6 {
		letter-spacing: normal;
	}

	@media (max-width: 1000px) {
		h5 {
			font-size: 18px;
		}
		h2 {
			font-size: 24px;
		}
	}
	@media (max-width: 700px) {
		h5 {
			font-size: 14px;
		}
		h2 {
			font-size: 18px;
		}
	}
	.button-tentang button {
		min-width: 200px;
		padding: 10px;
		font-size: 16px;
		font-weight: 600;
		transition: transform 0.4s;
	}
	.button-tentang button:hover {
		background: #660000;
		transform: scale(1.1);
	}

	.Contact a {
		text-decoration: none !important;
		color: black;
	}
	.Contact a:hover h6 {
		color: #660000;
	}
	.Contact a:hover {
		color: #660000;
	}
</style>
