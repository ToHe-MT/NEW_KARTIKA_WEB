<script>
	export let data;

	import Swiper from 'swiper';
	import 'swiper/css';
	import { Navigation, Pagination } from 'swiper/modules';
	import { onMount } from 'svelte';

	var swiper;
	onMount(() => {
		if (swiper) {
			swiper.destroy();
		}
		swiper = new Swiper('.property-card-slider', {
			loop: true,
			pagination: {
				el: '.property-card-pagination'
			},
			navigation: {
				nextEl: '.property-card-next',
				prevEl: '.property-card-prev'
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

	const mi_feature = {
		AC: 'ac_unit',
		TV: 'tv',
		PS5: 'stadia_controller',
		NETFLIX: 'movie',
		YOUTUBE: 'movie',
		KULKAS: 'kitchen',
		'USB CHARGER': 'cable'
	};
</script>

{#each data as item}
	<div class="col-md-6 col-xl-4">
		<div class="property-card">
			<div class="property-card__head">
				<div class="swiper property-card-slider">
					<div class="swiper-wrapper">
						{#each item.images as image}
							<div class="swiper-slide">
								<div class="property-card__img d-flex justify-content-center">
									<img
										src="{import.meta.env.VITE_S3_PUBLIC_URL}/vehicle/{image.picture_id}"
										alt="foto hotel"
										class="img-fluid w-auto h-auto"
										
									/>
								</div>
							</div>
						{/each}
					</div>
					<div class="swiper-pagination property-card-pagination"></div>
					<div class="swiper-button-prev property-card-prev"></div>
					<div class="swiper-button-next property-card-next"></div>
				</div>
				<a
					style="display: none !important;"
					href="#"
					class="link property-card__tag d-inline-block bg-neutral-0 :bg-primary-300 clr-primary-300 :clr-neutral-0 py-2 px-4 rounded-pill fw-medium"
				>
					<div class="d-flex align-items-center gap-2">
						<span class="material-symbols-rounded mat-icon fw-200 clr-secondary-500">
							dark_mode
						</span>
						<span class="d-block"> -</span>
					</div>
				</a>
			</div>
			<div class="property-card__body">
				<div class="d-flex align-items-center gap-1 mb-4">
					<span class="material-symbols-outlined mat-icon clr-tertiary-400"> pin_drop </span>
					<span class="d-inline-block"> DKI Jakarta </span>
				</div>
				<div class="d-flex justify-content-between mb-2">
					<a
						href="/sewa-transportasi/{item.slug}"
						class="link d-block flex-grow-1 clr-neutral-700 :clr-primary-300 fs-20 fw-medium"
					>
						{item.name}
					</a>
				</div>
				<ul class="list list-row row g-3">
					<li class="col-6">
						<div class="d-flex align-items-center gap-2">
							<span class="material-symbols-rounded mat-icon fw-200 clr-secondary-500">
								airline_seat_recline_normal
							</span>
							<span class="d-block"> {item.capacity} Seater </span>
						</div>
					</li>
					<li class="col-6">
						<div class="d-flex align-items-center gap-2">
							<span class="material-symbols-rounded mat-icon fw-200 clr-secondary-500">
								person
							</span>
							<span class="d-block"> Include Driver </span>
						</div>
					</li>
					{#each item.feature as feature}
						<li class="col-6">
							<div class="d-flex align-items-center gap-2">
								<span class="material-symbols-rounded mat-icon fw-200 clr-secondary-500">
									{mi_feature[feature] || ''}
								</span>
								<span class="d-block"> {feature} </span>
							</div>
						</li>
					{/each}
				</ul>
			</div>
			<div class="property-card__body py-0">
				<div class="hr-dashed"></div>
			</div>
			<div class="property-card__body">
				<div class="d-flex flex-wrap justify-content-between align-items-center">
					<span class="d-block fs-20 fw-medium clr-primary-300">
						{money.format(item.base_price)} / day
					</span>
					<a
						href="/sewa-transportasi/{item.slug}"
						class="btn btn-outline-primary py-3 px-6 rounded-pill d-inline-flex align-items-center gap-1 fw-semibold"
					>
						Order
					</a>
				</div>
			</div>
		</div>
	</div>
{/each}
