<script>
	import Swiper from 'swiper';
	import { Navigation, Pagination } from 'swiper/modules';
	import { onDestroy, onMount } from 'svelte';
	import 'swiper/css';
    const money = new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
		maximumFractionDigits: 0,
		minimumFractionDigits: 0
	});

	export let paketWisata;
	let swiper;
	let container, pagination;
	onMount(() => {
		if (swiper) {
			swiper.destroy();
			swiper = null;
		}
		paketWisataDone = paketWisata;
		setTimeout(() => {}, 1000);
		swiper = new Swiper(container, {
			slidesPerView: 1,
			spaceBetween: 10,
			breakpoints: {
				1200: {
					slidesPerView: 4,
					spaceBetween: 10
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 10
				},
				800: {
					slidesPerView: 3,
					spaceBetween: 10
				}
			},
			pagination: {
				el: pagination,
				clickable: true
			},
			navigation: {
				nextEl: '.property-card-next',
				prevEl: '.property-card-prev'
			},

			modules: [Navigation, Pagination]
		});
	});
	onDestroy(() => {
		if (swiper) {
			try {
				swiper.destroy();
			} catch (error) {
				console.log(error);
			}
			swiper = null;
		}
	});

	let paketWisataDone = [];
</script>

<!-- Featured Property  -->
<section class="section-space">
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
							<span class="h5 lh-1 m-0 clr-primary-400 fw-semibold"> Paket Wisata </span>
						</span>
						<h2 class="mt-4 mb-6">Destinasi Wisata Populer</h2>
						<p class="mb-0">
							Paket Wisata Eksklusif, dari keindahan alam memukau,petualangan seru, atau liburan
							santai. Pilih paket wisata sesuai dengan keinginan anda.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="container-fluid p-md-0">
		<div class="row g-md-0">
			<div class="col-12">
				<div class="location-slider-container">
					<div class="swiper location-slider" bind:this={container}>
						<div class="swiper-wrapper">
							{#if paketWisataDone.length > 0}
								<!-- content here -->
								{#each paketWisataDone as item}
									<div class="swiper-slide">
										<div class="location-slider__card">
											<a href="paket-wisata/{item.slug}">
												<div class="location-slider__img">
                                                    {#if item.images}
                                                         <img
                                                             src="{import.meta.env.VITE_S3_PUBLIC_URL}/schedule/{item.images[0].picture_id}"
                                                             alt="ASD"
                                                             class="img-fluid w-100"
                                                         />
                                                    {/if}
												</div>
												<div class="location-slider__content">
													<div class="d-flex align-items-center justify-content-between w-100">
														<a
															href="/paket-wisata/{item.slug}"
															class="link d-flex flex-column gap-1 clr-neutral-0 flex-grow-1"
														>
															<span class="d-block fs-20 fw-semibold"> {`${item.title}`} </span>
															<span class="d-block fs-14">
																start from {money.format(item.base_price)}
															</span>
														</a>
														<a
															href="/paket-wisata/{item.slug}"
															class="link d-grid place-content-center w-9 h-9 border border-primary-50 rounded-circle clr-primary-50 :bg-primary-300 flex-shrink-0"
														>
															<span class="material-symbols-outlined mat-icon">
																arrow_forward_ios
															</span>
														</a>
													</div>
												</div>
											</a>
										</div>
									</div>
								{/each}
							{/if}
						</div>
					</div>
					<div class="swiper-pagination location-slider__pagination" bind:this={pagination} />
					<div class="swiper-button-prev property-card-prev"></div>
					<div class="swiper-button-next property-card-next"></div>
				</div>
			</div>
		</div>
	</div>
	<div class="d-flex w-100 justify-content-center align-items-center mt-20">
		<a
			href="paket-wisata"
			class="btn btn-outline-primary py-3 px-6 rounded-pill d-inline-flex align-items-center gap-1 fw-semibold"
		>
			Lihat Semua Destinasi <span class="material-symbols-outlined mat-icon lh-1">
				trending_flat
			</span>
		</a>
	</div>
</section>
<!-- /Featured Property  -->
