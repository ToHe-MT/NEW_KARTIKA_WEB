<script>
	import Category from "../Category.svelte";

	export let data;
</script>

<div class="section-space--sm bg-primary-5p">
	<div class="container-xl">
		<!-- ABOUT US AND LOGO -->
		<div class="row px-10">
			<div class="col-md-4 d-flex justify-content-center align-items-center">
				<img src="kartikamas-logo.png" alt="assets" class="img-fluid" style="max-height: 200px;" />
			</div>
			<div class="col-md-8 d-flex justify-content-start align-items-start fs-6 flex-column mt-10">
				<h5>About Us</h5>
				<p style="text-align: justify;">
					Kartika Mas tour and travel adalah perusahaan yang beroperasi dalam industri Travel agen
					yang memberikan berbagai macam pilihan wisata dari domestik hingga internasional. Seperti
					umroh, haji, trip luar negeri hingga dalam negeri.
				</p>
				<p style="text-align: justify;">
					Berlokasi di Jakarta Selatan, Kartika Mas tour and travel bergerak di bidang biro dan jasa
					yang mengedepankan kualitas pelayanan terbaik dan profesionalisme dalam setiap perjalanan
					wisata agar terjaga kenyamanannya. Kartika mas tour and travel juga menawarkan berbagai
					macam pilihan sewa armada demi mewujudkan pelayanan yang terbaik.
				</p>
			</div>
			<div class="mt-4"></div>
		</div>
		<!-- MOTTO -->
		<div class="d-flex justify-content-center align-items-center m-20 flex-column">
			<p class="fs-2 fst-italic">“Impian Anda Adalah Tujuan Kami”</p>
		</div>
		<!-- VISI MISI -->
	</div>
</div>
<!-- KENAPA KAMi -->
<section class="section-space featured-property-selection">
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
</section>

<!-- PAKET KAMI -->
<section class="section-space position-relative z-1 bg-primary-5p">
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
</section>

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
