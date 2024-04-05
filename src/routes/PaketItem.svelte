<script>
	export let data;
	export let page;

	import Swiper from 'swiper';
	import 'swiper/css';
	import { Navigation, Pagination } from 'swiper/modules';
	import { onDestroy, onMount } from 'svelte';

	var swiper;
	onMount(() => {
		if (swiper) {
			swiper.destroy();
			swiper = null;
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

	const money = new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
		maximumFractionDigits: 0,
		minimumFractionDigits: 0
	});

	function getDifferenceInDaysAndNights(start, end) {
		const startDate = new Date(start);
		const endDate = new Date(end);
		endDate.setDate(endDate.getDate() + 1); // Include the end date in the calculation
		const differenceInMilliseconds = endDate - startDate;
		const differenceInDays = differenceInMilliseconds / (1000 * 3600 * 24);
		const differenceInNights = differenceInDays - 1;
		return `${differenceInDays} hari ${differenceInNights} malam`;
		// return { days: differenceInDays, nights: differenceInNights };
	}
</script>

{#each data as item}
	<div class={page == 'paket-list' ? 'col-xl-6' : 'col-md-6 col-xl-4'}>
		<div class="property-card">
			<div class="property-card__head">
				<div class="swiper property-card-slider">
					<div class="swiper-wrapper">
						{#each item.images as image}
							<div class="swiper-slide">
								<div class="property-card__img">
									<img
										src="{import.meta.env.VITE_S3_PUBLIC_URL}/schedule/{image.picture_id}"
										alt="foto hotel"
										class="img-fluid w-100"
										style="height: 280px !important;"
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
					style="display: none !imaportant;"
					href="#"
					class="link property-card__tag d-inline-block bg-neutral-0 :bg-primary-300 clr-primary-300 :clr-neutral-0 py-2 px-4 rounded-pill fw-medium"
				>
					<div class="d-flex align-items-center gap-2">
						<span class="material-symbols-rounded mat-icon fw-200 clr-secondary-500">
							dark_mode
						</span>
						<span class="d-block">
							{getDifferenceInDaysAndNights(item.departure_date, item.return_date)}
						</span>
					</div>
				</a>
			</div>
			<div class="property-card__body">
				<!-- <div class="d-flex align-items-center gap-1 mb-4">
					<span class="material-symbols-outlined mat-icon clr-tertiary-400"> flight_takeoff </span>
					<span class="d-inline-block"> {item.departure_from} </span>
				</div> -->
				<div class="d-flex justify-content-between mb-2">
					<a
						href="/paket/{item.jenis_paket}/{item.slug}"
						class="link d-block flex-grow-1 clr-neutral-700 :clr-primary-300 fs-20 fw-medium"
					>
						{item.title}
					</a>
					<div class="d-flex align-items-center flex-shrink-0" title="Hotel Bintang 5 / Setara">
						<span class="material-symbols-outlined mat-icon solid clr-tertiary-300">
							star_rate
						</span>
						<span class="d-block clr-neutral-700"> {item.hotel_star} </span>
					</div>
				</div>
				<ul class="list list-row row g-3">
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
							<span class="material-symbols-rounded mat-icon fw-200 clr-secondary-500"> wifi </span>
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
				</ul>
			</div>
			<div class="property-card__body py-0">
				<div class="hr-dashed"></div>
			</div>
			<div class="property-card__body">
				<div class="d-flex flex-wrap justify-content-between align-items-center">
					<span class="d-block fs-20 fw-medium clr-primary-300">
						{money.format(item.base_price)}
					</span>
					<a
						href="/paket/{item.jenis_paket}/{item.slug}"
						class="btn btn-outline-primary py-3 px-6 rounded-pill d-inline-flex align-items-center gap-1 fw-semibold"
					>
						Order
					</a>
				</div>
			</div>
		</div>
	</div>
{/each}
