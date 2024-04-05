<script>
	export let data;
	// console.log(data)

	const paket = data.info_paket;
	console.log(paket);

	const images = paket.images;
	const primaryImages = images.filter((image) => image.primary === true);

	const otherImages = images.filter((image) => image.primary === false);

	import Swiper from 'swiper';
	import 'swiper/css';
	import { Navigation, Pagination } from 'swiper/modules';
	import { onMount } from 'svelte';

	var swiper;
	onMount(() => {
		if (swiper) {
			swiper.destroy();
		}
		swiper = new Swiper('.property-gallery-slider', {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 16,
			centeredSlides: true,
			navigation: {
				nextEl: '.property-gallery-slider__btn-next',
				prevEl: '.property-gallery-slider__btn-prev'
			},
			breakpoints: {
				576: {
					slidesPerView: 2.25
				},
				768: {
					slidesPerView: 2.5
				},
				1200: {
					slidesPerView: 3.25
				}
			},
			modules: [Navigation, Pagination]
		});
	});
	const money = new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
		maximumFractionDigits: 0,
		minimumFractionDigits: 0
	});
</script>

<div class="bg-primary-5p">
	<div class="container-fluid p-0">
		<div class="row g-0">
			<div class="col-12">
				{#if otherImages && otherImages.length > 0}
					<div class="swiper property-gallery-slider">
						<div class="swiper-wrapper">
							{#each paket.images as image}
								<div class="swiper-slide">
									<a
										href="{import.meta.env.VITE_S3_PUBLIC_URL}/schedule/{image.picture_id}"
										class="link d-block property-gallery"
									>
										<img
											src="{import.meta.env.VITE_S3_PUBLIC_URL}/schedule/{image.picture_id}"
											alt="foto kegiatan, hotel, acara, dll"
											class="img-fluid rounded-4"
											style="max-height: 400px;"
										/>
									</a>
								</div>
							{/each}
						</div>
						<div
							class="swiper-button-prev property-gallery-slider__btn property-gallery-slider__btn-prev"
						></div>
						<div
							class="swiper-button-next property-gallery-slider__btn property-gallery-slider__btn-next"
						></div>
					</div>
				{/if}
			</div>
		</div>
	</div>
	<div class="container-xl mt-4">
		{#if primaryImages && primaryImages.length > 0}
			<img
				src="{import.meta.env.VITE_S3_PUBLIC_URL}/schedule/{primaryImages[0].picture_id}"
				alt="foto kegiatan, hotel, acara, dll"
				class="img-fluid rounded-4"
				style="max-height: 400px;"
			/>
		{/if}
	</div>
</div>

<div class="bg-primary-5p">
	<div class="container">
		<div class="row">
			<div class="col-xl-8">
				<div class="section-space--sm">
					<div class="p-6 bg-neutral-0 rounded-4 mb-10">
						<div class="d-flex align-items-end justify-content-between flex-wrap gap-3 mb-6">
							<h2 class="mt-4 mb-0">{paket.title}</h2>
							<p class="mt-4 mb-0">Mulai Dari {money.format(paket.base_price)}/pax</p>
						</div>
						<div class="hr-dashed my-4"></div>
						<ul class="list list-row flex-wrap align-items-center list-divider-dot gap-4 gap-md-0">
							<li>
								<div class="d-flex align-items-center gap-2">
									<span class="material-symbols-outlined mat-icon clr-secondary-400">
										location_on
									</span>
									<p class="mb-0">{paket.destination}</p>
								</div>
							</li>
							<li>
								<p class="mb-0">
									Paket Berlaku: <span class="clr-primary-300"
										>{paket.booking_period.start.toISOString().split('T')[0]}</span
									>
									s/d
									<span class="clr-primary-300"
										>{paket.booking_period.end.toISOString().split('T')[0]}</span
									>
								</p>
							</li>
							<li>
								<div class="d-flex align-items-center gap-1">
									<p class="mb-0">
										<span
											style="vertical-align: bottom;"
											class="material-symbols-outlined mat-icon clr-tertiary-300"
										>
											timer
										</span>
										{paket.duration}
										Hari
									</p>
								</div>
							</li>
						</ul>
					</div>
					<div class="p-6 bg-neutral-0 rounded-4 mb-10">
						<div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-8">
							<h4 class="mt-4 mb-0">Jadwal Perjalanan</h4>
						</div>
						<div class="row">
							{#if paket.duration === 1}
								{#each paket.itinerari as item, idx}
									<div class="col-sm-12 col-xl-6 px-2 py-2">
                                        <p>{item.description}</p>
                                        {#each item.activities as activity}
                                        <div class="row">
                                            <div class="col-2">
                                                {activity.start}-{activity.end}
                                            </div>
												<div class="col-8">
													{activity.activity}
												</div>
											</div>
                                            {/each}
                                        </div>
                                        {/each}
                                        {:else if paket.duration > 1}
                                        {#each paket.itinerari as item, idx}
                                        <div class="col-sm-12 col-xl-6 px-2 py-2">
                                            <h6>Hari ke - {item.hari_ke}</h6>
                                            <p>{item.description}</p>
										{#each item.activities as activity}
											<div class="row">
												<div class="col-2">
													{activity.start}-{activity.end}
												</div>
												<div class="col-8">
													{activity.activity}
												</div>
											</div>
										{/each}
									</div>
								{/each}
							{/if}
						</div>
					</div>
					<div class="p-6 bg-neutral-0 rounded-4 mb-10">
						<div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-8">
							<h4 class="mt-4 mb-0">Included</h4>
						</div>
						<div class="row">
							{#each paket.included as item, idx}
								<div class="col-sm-12 col-xl-6 px-2 py-2">
									<span class="px-2">{idx + 1}. {item}</span>
									<!-- <span
                                         style="vertical-align: bottom;"
                                         class="material-symbols-outlined mat-icon clr-primary-300 rounded"
                                         >
                                         check
                                     </span>  -->
								</div>
							{/each}
						</div>
					</div>
					<div class="p-6 bg-neutral-0 rounded-4 mb-10">
						<div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-8">
							<h4 class="mt-4 mb-0">Not Included</h4>
						</div>
						<div class="row">
							{#each paket.not_included as item, idx}
								<div class="col-sm-12 col-xl-6 px-2 py-2">
									<span class="px-2">{idx + 1}. {item}</span>
									<!-- <span
                                         style="vertical-align: bottom;"
                                         class="material-symbols-outlined mat-icon clr-primary-300 rounded"
                                         >
                                         check
                                     </span>  -->
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
