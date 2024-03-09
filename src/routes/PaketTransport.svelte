<script>
	import TransportItem from './TransportItem.svelte';

	export let data;
</script>

<!-- Featured Property  -->
<section class="section-space featured-property-section">
	<img
		src="/assets/img/category-section-el.png"
		alt="image"
		class="img-fluid featured-section-el-1 d-none d-xxl-block position-absolute z-n1"
	/>
	<img
		src="/assets/img/featured-section-el.png"
		alt="image"
		class="img-fluid featured-section-el-2 d-none d-xxl-block position-absolute z-n1"
	/>
	<div class="section-space--sm-bottom">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-8 col-xxl-6">
					<div class="text-center">
						<span
							class="d-inline-flex align-items-center bg-neutral-0 gap-4 rounded-pill py-1 ps-1 pe-5"
						>
							<span
								class="w-9 h-9 rounded-circle d-grid place-content-center bg-primary-300 clr-neutral-0 flex-shrink-0"
							>
								<span class="material-symbols-outlined mat-icon fw-200"> arrow_right_alt </span>
							</span>
							<span class="h5 lh-1 m-0 clr-primary-400 fw-semibold"> Transportasi </span>
						</span>
						<h2 class="mt-4 mb-6">Sewa Kendaraan</h2>
						<p class="mb-0">
							Kartika menyediakan berbagai macam jenis kendaraan untuk kebutuhan perjalanan Anda,
							beberapa dilengkapi dengan TV, PS5, dan Karaoke Set.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="d-flex justify-content-md-between align-items-center flex-wrap gap-5 mb-10">
					<div class="list-group flex-row flex-wrap gap-5">
						<a
							href="#new-york"
							class="featured-tab link fw-semibold clr-primary-400 d-inline-block py-3 px-6 bg-primary-50 :bg-primary-300 :clr-neutral-0 rounded-pill active"
							data-bs-toggle="list"
						>
							Semua Jenis
						</a>
						<a
							href="/?umroh_type=regular"
							class="featured-tab link fw-semibold clr-primary-400 d-inline-block py-3 px-6 bg-primary-50 :bg-primary-300 :clr-neutral-0 rounded-pill"
							data-bs-toggle="list"
						>
							SUV
						</a>
						<a
							href="/?umroh_type=regular_plus"
							class="featured-tab link fw-semibold clr-primary-400 d-inline-block py-3 px-6 bg-primary-50 :bg-primary-300 :clr-neutral-0 rounded-pill"
							data-bs-toggle="list"
						>
							Minivan
						</a>
						<a
							href="/?umroh_type=gold"
							class="featured-tab link fw-semibold clr-primary-400 d-inline-block py-3 px-6 bg-primary-50 :bg-primary-300 :clr-neutral-0 rounded-pill"
							data-bs-toggle="list"
						>
							Bus
						</a>
					</div>
					<a
						href="property-grid.html"
						class="btn btn-outline-primary py-3 px-6 rounded-pill d-inline-flex align-items-center gap-1 fw-semibold"
					>
						Lihat Semua <span class="material-symbols-outlined mat-icon lh-1"> trending_flat </span>
					</a>
				</div>
				<div class="tab-content">
					<div class="tab-pane fade show active" id="new-york">
						<div class="row g-4">
							<TransportItem {data} />
						</div>
					</div>
					<div class="tab-pane fade" id="mumbai">
						<div class="row g-4">
							<div class="col-md-6 col-xl-4">
								<div class="property-card">
									<div class="property-card__head">
										<div class="swiper property-card-slider">
											<div class="swiper-wrapper">
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-6.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-5.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-4.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-1.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
											</div>
											<div class="swiper-pagination property-card-pagination"></div>
											<div class="swiper-button-prev property-card-prev"></div>
											<div class="swiper-button-next property-card-next"></div>
										</div>
										<a
											href="property-list.html"
											class="link property-card__tag d-inline-block bg-neutral-0 :bg-primary-300 clr-primary-300 :clr-neutral-0 py-2 px-4 rounded-pill fw-medium"
										>
											For Rent
										</a>
										<button
											class="property-card__fav w-10 h-10 rounded-circle bg-neutral-0 d-grid place-content-center border-0 clr-primary-300"
										>
											<span class="material-symbols-outlined mat-icon fw-200 property-card__heart">
												favorite
											</span>
										</button>
									</div>
									<div class="property-card__body">
										<div class="d-flex align-items-center gap-1 mb-4">
											<span class="material-symbols-outlined mat-icon clr-tertiary-400">
												distance
											</span>
											<span class="d-inline-block"> 3890 Poplar Dr. </span>
										</div>
										<a
											href="property-details-1.html"
											class="link d-block clr-neutral-700 :clr-primary-300 fs-20 fw-medium mb-7"
										>
											Best Buy - 6280 Capital Blvd, Raleigh, NC 27616
										</a>
										<ul class="list list-row flex-wrap dotted-divider">
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													home_work
												</span>
												<span class="d-block"> 3 Room </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													bed
												</span>
												<span class="d-block"> 5 Bed </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													bathtub
												</span>
												<span class="d-block"> 1 Bath </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													drag_pan
												</span>
												<span class="d-block"> 732 sft </span>
											</li>
										</ul>
									</div>
									<div class="property-card__body py-0">
										<div class="hr-dashed"></div>
									</div>
									<div class="property-card__body">
										<div class="d-flex flex-wrap justify-content-between align-items-center">
											<span class="d-block fs-20 fw-medium clr-primary-300">
												$5,256 <span class="d-inline-block clr-neutral-500 fs-16 fw-normal">
													/month
												</span>
											</span>
											<a
												href="property-details-1.html"
												class="btn btn-outline-primary py-3 px-6 rounded-pill d-inline-flex align-items-center gap-1 fw-semibold"
											>
												Read More
											</a>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6 col-xl-4">
								<div class="property-card">
									<div class="property-card__head">
										<div class="property-card__img">
											<img
												src="/assets/img/featured-img-1.jpg"
												alt="image"
												class="img-fluid w-100"
											/>
										</div>
										<a
											href="property-list.html"
											class="link property-card__tag d-inline-block bg-neutral-0 :bg-primary-300 clr-primary-300 :clr-neutral-0 py-2 px-4 rounded-pill fw-medium"
										>
											For Sale
										</a>
										<button
											class="property-card__fav w-10 h-10 rounded-circle bg-neutral-0 d-grid place-content-center border-0 clr-primary-300"
										>
											<span class="material-symbols-outlined mat-icon fw-200 property-card__heart">
												favorite
											</span>
										</button>
										<span class="property-card__popular-tag">
											<span
												class="d-inline-block fs-14 fw-semibold clr-neutral-0 bg-primary-300 py-2 px-9"
											>
												Popular
											</span>
										</span>
									</div>
									<div class="property-card__body">
										<div class="d-flex align-items-center gap-1 mb-4">
											<span class="material-symbols-outlined mat-icon clr-tertiary-400">
												distance
											</span>
											<span class="d-inline-block"> 3890 Poplar Dr. </span>
										</div>
										<a
											href="property-details-1.html"
											class="link d-block clr-neutral-700 :clr-primary-300 fs-20 fw-medium mb-7"
										>
											Regal North Hills - 4150 Main at North Hills St, Raleigh
										</a>
										<ul class="list list-row flex-wrap dotted-divider">
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													home_work
												</span>
												<span class="d-block"> 3 Room </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													bed
												</span>
												<span class="d-block"> 5 Bed </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													bathtub
												</span>
												<span class="d-block"> 1 Bath </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													drag_pan
												</span>
												<span class="d-block"> 732 sft </span>
											</li>
										</ul>
									</div>
									<div class="property-card__body py-0">
										<div class="hr-dashed"></div>
									</div>
									<div class="property-card__body">
										<div class="d-flex flex-wrap justify-content-between align-items-center">
											<span class="d-block fs-20 fw-medium clr-primary-300">
												$5,256 <span class="d-inline-block clr-neutral-500 fs-16 fw-normal">
													/month
												</span>
											</span>
											<a
												href="property-details-1.html"
												class="btn btn-outline-primary py-3 px-6 rounded-pill d-inline-flex align-items-center gap-1 fw-semibold"
											>
												Read More
											</a>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6 col-xl-4">
								<div class="property-card">
									<div class="property-card__head">
										<div class="swiper property-card-slider">
											<div class="swiper-wrapper">
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-2.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-3.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-4.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-5.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
											</div>
											<div class="swiper-pagination property-card-pagination"></div>
											<div class="swiper-button-prev property-card-prev"></div>
											<div class="swiper-button-next property-card-next"></div>
										</div>
										<a
											href="property-list.html"
											class="link property-card__tag d-inline-block bg-neutral-0 :bg-primary-300 clr-primary-300 :clr-neutral-0 py-2 px-4 rounded-pill fw-medium"
										>
											For Rent
										</a>
										<button
											class="property-card__fav w-10 h-10 rounded-circle bg-neutral-0 d-grid place-content-center border-0 clr-primary-300"
										>
											<span class="material-symbols-outlined mat-icon fw-200 property-card__heart">
												favorite
											</span>
										</button>
									</div>
									<div class="property-card__body">
										<div class="d-flex align-items-center gap-1 mb-4">
											<span class="material-symbols-outlined mat-icon clr-tertiary-400">
												distance
											</span>
											<span class="d-inline-block"> 8558 Green Rd. </span>
										</div>
										<a
											href="property-details-1.html"
											class="link d-block clr-neutral-700 :clr-primary-300 fs-20 fw-medium mb-7"
										>
											Spring Lane Cinemas - 1351 Plaza Blvd, Sanford, NC 27330
										</a>
										<ul class="list list-row flex-wrap dotted-divider">
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													home_work
												</span>
												<span class="d-block"> 3 Room </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													bed
												</span>
												<span class="d-block"> 5 Bed </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													bathtub
												</span>
												<span class="d-block"> 1 Bath </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													drag_pan
												</span>
												<span class="d-block"> 732 sft </span>
											</li>
										</ul>
									</div>
									<div class="property-card__body py-0">
										<div class="hr-dashed"></div>
									</div>
									<div class="property-card__body">
										<div class="d-flex flex-wrap justify-content-between align-items-center">
											<span class="d-block fs-20 fw-medium clr-primary-300">
												$5,256 <span class="d-inline-block clr-neutral-500 fs-16 fw-normal">
													/month
												</span>
											</span>
											<a
												href="property-details-1.html"
												class="btn btn-outline-primary py-3 px-6 rounded-pill d-inline-flex align-items-center gap-1 fw-semibold"
											>
												Read More
											</a>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6 col-xl-4">
								<div class="property-card">
									<div class="property-card__head">
										<div class="swiper property-card-slider">
											<div class="swiper-wrapper">
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-3.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-4.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-5.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-6.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
											</div>
											<div class="swiper-pagination property-card-pagination"></div>
											<div class="swiper-button-prev property-card-prev"></div>
											<div class="swiper-button-next property-card-next"></div>
										</div>
										<a
											href="property-list.html"
											class="link property-card__tag d-inline-block bg-neutral-0 :bg-primary-300 clr-primary-300 :clr-neutral-0 py-2 px-4 rounded-pill fw-medium"
										>
											For Sale
										</a>
										<button
											class="property-card__fav w-10 h-10 rounded-circle bg-neutral-0 d-grid place-content-center border-0 clr-primary-300"
										>
											<span class="material-symbols-outlined mat-icon fw-200 property-card__heart">
												favorite
											</span>
										</button>
										<span class="property-card__popular-tag">
											<span
												class="d-inline-block fs-14 fw-semibold clr-neutral-0 bg-primary-300 py-2 px-9"
											>
												Popular
											</span>
										</span>
									</div>
									<div class="property-card__body">
										<div class="d-flex align-items-center gap-1 mb-4">
											<span class="material-symbols-outlined mat-icon clr-tertiary-400">
												distance
											</span>
											<span class="d-inline-block"> 7529 E. Pecan St. </span>
										</div>
										<a
											href="property-details-1.html"
											class="link d-block clr-neutral-700 :clr-primary-300 fs-20 fw-medium mb-7"
										>
											RCE Theaters - 907 S Beckford Dr, Henderson, NC 27536
										</a>
										<ul class="list list-row flex-wrap dotted-divider">
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													home_work
												</span>
												<span class="d-block"> 3 Room </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													bed
												</span>
												<span class="d-block"> 5 Bed </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													bathtub
												</span>
												<span class="d-block"> 1 Bath </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													drag_pan
												</span>
												<span class="d-block"> 732 sft </span>
											</li>
										</ul>
									</div>
									<div class="property-card__body py-0">
										<div class="hr-dashed"></div>
									</div>
									<div class="property-card__body">
										<div class="d-flex flex-wrap justify-content-between align-items-center">
											<span class="d-block fs-20 fw-medium clr-primary-300">
												$5,256 <span class="d-inline-block clr-neutral-500 fs-16 fw-normal">
													/month
												</span>
											</span>
											<a
												href="property-details-1.html"
												class="btn btn-outline-primary py-3 px-6 rounded-pill d-inline-flex align-items-center gap-1 fw-semibold"
											>
												Read More
											</a>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6 col-xl-4">
								<div class="property-card">
									<div class="property-card__head">
										<div class="swiper property-card-slider">
											<div class="swiper-wrapper">
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-4.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-1.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-2.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-6.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
											</div>
											<div class="swiper-pagination property-card-pagination"></div>
											<div class="swiper-button-prev property-card-prev"></div>
											<div class="swiper-button-next property-card-next"></div>
										</div>
										<a
											href="property-list.html"
											class="link property-card__tag d-inline-block bg-neutral-0 :bg-primary-300 clr-primary-300 :clr-neutral-0 py-2 px-4 rounded-pill fw-medium"
										>
											For Rent
										</a>
										<button
											class="property-card__fav w-10 h-10 rounded-circle bg-neutral-0 d-grid place-content-center border-0 clr-primary-300"
										>
											<span class="material-symbols-outlined mat-icon fw-200 property-card__heart">
												favorite
											</span>
										</button>
										<span class="property-card__popular-tag">
											<span
												class="d-inline-block fs-14 fw-semibold clr-neutral-0 bg-primary-300 py-2 px-9"
											>
												Popular
											</span>
										</span>
									</div>
									<div class="property-card__body">
										<div class="d-flex align-items-center gap-1 mb-4">
											<span class="material-symbols-outlined mat-icon clr-tertiary-400">
												distance
											</span>
											<span class="d-inline-block"> 3605 Parker Rd. </span>
										</div>
										<a
											href="property-details-1.html"
											class="link d-block clr-neutral-700 :clr-primary-300 fs-20 fw-medium mb-7"
										>
											Costco Wholesale - 1021 Oak Forest Ln, Myrtle Beach, SC
										</a>
										<ul class="list list-row flex-wrap dotted-divider">
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													home_work
												</span>
												<span class="d-block"> 3 Room </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													bed
												</span>
												<span class="d-block"> 5 Bed </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													bathtub
												</span>
												<span class="d-block"> 1 Bath </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													drag_pan
												</span>
												<span class="d-block"> 732 sft </span>
											</li>
										</ul>
									</div>
									<div class="property-card__body py-0">
										<div class="hr-dashed"></div>
									</div>
									<div class="property-card__body">
										<div class="d-flex flex-wrap justify-content-between align-items-center">
											<span class="d-block fs-20 fw-medium clr-primary-300">
												$5,256 <span class="d-inline-block clr-neutral-500 fs-16 fw-normal">
													/month
												</span>
											</span>
											<a
												href="property-details-1.html"
												class="btn btn-outline-primary py-3 px-6 rounded-pill d-inline-flex align-items-center gap-1 fw-semibold"
											>
												Read More
											</a>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6 col-xl-4">
								<div class="property-card">
									<div class="property-card__head">
										<div class="swiper property-card-slider">
											<div class="swiper-wrapper">
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-5.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-4.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-2.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-6.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
											</div>
											<div class="swiper-pagination property-card-pagination"></div>
											<div class="swiper-button-prev property-card-prev"></div>
											<div class="swiper-button-next property-card-next"></div>
										</div>
										<a
											href="property-list.html"
											class="link property-card__tag d-inline-block bg-neutral-0 :bg-primary-300 clr-primary-300 :clr-neutral-0 py-2 px-4 rounded-pill fw-medium"
										>
											For Sale
										</a>
										<button
											class="property-card__fav w-10 h-10 rounded-circle bg-neutral-0 d-grid place-content-center border-0 clr-primary-300"
										>
											<span class="material-symbols-outlined mat-icon fw-200 property-card__heart">
												favorite
											</span>
										</button>
									</div>
									<div class="property-card__body">
										<div class="d-flex align-items-center gap-1 mb-4">
											<span class="material-symbols-outlined mat-icon clr-tertiary-400">
												distance
											</span>
											<span class="d-inline-block"> 7529 E. Pecan St. </span>
										</div>
										<a
											href="property-details-1.html"
											class="link d-block clr-neutral-700 :clr-primary-300 fs-20 fw-medium mb-7"
										>
											Dollar General - 5416 Rock Quarry Rd, Raleigh, NC 27610
										</a>
										<ul class="list list-row flex-wrap dotted-divider">
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													home_work
												</span>
												<span class="d-block"> 3 Room </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													bed
												</span>
												<span class="d-block"> 5 Bed </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													bathtub
												</span>
												<span class="d-block"> 1 Bath </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													drag_pan
												</span>
												<span class="d-block"> 732 sft </span>
											</li>
										</ul>
									</div>
									<div class="property-card__body py-0">
										<div class="hr-dashed"></div>
									</div>
									<div class="property-card__body">
										<div class="d-flex flex-wrap justify-content-between align-items-center">
											<span class="d-block fs-20 fw-medium clr-primary-300">
												$5,256 <span class="d-inline-block clr-neutral-500 fs-16 fw-normal">
													/month
												</span>
											</span>
											<a
												href="#"
												class="btn btn-outline-primary py-3 px-6 rounded-pill d-inline-flex align-items-center gap-1 fw-semibold"
											>
												Read More
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="tab-pane fade" id="paris">
						<div class="row g-4">
							<div class="col-md-6 col-xl-4">
								<div class="property-card">
									<div class="property-card__head">
										<div class="property-card__img">
											<img
												src="/assets/img/featured-img-1.jpg"
												alt="image"
												class="img-fluid w-100"
											/>
										</div>
										<a
											href="property-list.html"
											class="link property-card__tag d-inline-block bg-neutral-0 :bg-primary-300 clr-primary-300 :clr-neutral-0 py-2 px-4 rounded-pill fw-medium"
										>
											For Sale
										</a>
										<button
											class="property-card__fav w-10 h-10 rounded-circle bg-neutral-0 d-grid place-content-center border-0 clr-primary-300"
										>
											<span class="material-symbols-outlined mat-icon fw-200 property-card__heart">
												favorite
											</span>
										</button>
										<span class="property-card__popular-tag">
											<span
												class="d-inline-block fs-14 fw-semibold clr-neutral-0 bg-primary-300 py-2 px-9"
											>
												Popular
											</span>
										</span>
									</div>
									<div class="property-card__body">
										<div class="d-flex align-items-center gap-1 mb-4">
											<span class="material-symbols-outlined mat-icon clr-tertiary-400">
												distance
											</span>
											<span class="d-inline-block"> 3890 Poplar Dr. </span>
										</div>
										<a
											href="property-details-1.html"
											class="link d-block clr-neutral-700 :clr-primary-300 fs-20 fw-medium mb-7"
										>
											Regal North Hills - 4150 Main at North Hills St, Raleigh
										</a>
										<ul class="list list-row flex-wrap dotted-divider">
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													home_work
												</span>
												<span class="d-block"> 3 Room </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													bed
												</span>
												<span class="d-block"> 5 Bed </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													bathtub
												</span>
												<span class="d-block"> 1 Bath </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													drag_pan
												</span>
												<span class="d-block"> 732 sft </span>
											</li>
										</ul>
									</div>
									<div class="property-card__body py-0">
										<div class="hr-dashed"></div>
									</div>
									<div class="property-card__body">
										<div class="d-flex flex-wrap justify-content-between align-items-center">
											<span class="d-block fs-20 fw-medium clr-primary-300">
												$5,256 <span class="d-inline-block clr-neutral-500 fs-16 fw-normal">
													/month
												</span>
											</span>
											<a
												href="property-details-1.html"
												class="btn btn-outline-primary py-3 px-6 rounded-pill d-inline-flex align-items-center gap-1 fw-semibold"
											>
												Read More
											</a>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6 col-xl-4">
								<div class="property-card">
									<div class="property-card__head">
										<div class="swiper property-card-slider">
											<div class="swiper-wrapper">
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-2.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-3.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-4.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-5.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
											</div>
											<div class="swiper-pagination property-card-pagination"></div>
											<div class="swiper-button-prev property-card-prev"></div>
											<div class="swiper-button-next property-card-next"></div>
										</div>
										<a
											href="property-list.html"
											class="link property-card__tag d-inline-block bg-neutral-0 :bg-primary-300 clr-primary-300 :clr-neutral-0 py-2 px-4 rounded-pill fw-medium"
										>
											For Rent
										</a>
										<button
											class="property-card__fav w-10 h-10 rounded-circle bg-neutral-0 d-grid place-content-center border-0 clr-primary-300"
										>
											<span class="material-symbols-outlined mat-icon fw-200 property-card__heart">
												favorite
											</span>
										</button>
									</div>
									<div class="property-card__body">
										<div class="d-flex align-items-center gap-1 mb-4">
											<span class="material-symbols-outlined mat-icon clr-tertiary-400">
												distance
											</span>
											<span class="d-inline-block"> 8558 Green Rd. </span>
										</div>
										<a
											href="property-details-1.html"
											class="link d-block clr-neutral-700 :clr-primary-300 fs-20 fw-medium mb-7"
										>
											Spring Lane Cinemas - 1351 Plaza Blvd, Sanford, NC 27330
										</a>
										<ul class="list list-row flex-wrap dotted-divider">
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													home_work
												</span>
												<span class="d-block"> 3 Room </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													bed
												</span>
												<span class="d-block"> 5 Bed </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													bathtub
												</span>
												<span class="d-block"> 1 Bath </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													drag_pan
												</span>
												<span class="d-block"> 732 sft </span>
											</li>
										</ul>
									</div>
									<div class="property-card__body py-0">
										<div class="hr-dashed"></div>
									</div>
									<div class="property-card__body">
										<div class="d-flex flex-wrap justify-content-between align-items-center">
											<span class="d-block fs-20 fw-medium clr-primary-300">
												$5,256 <span class="d-inline-block clr-neutral-500 fs-16 fw-normal">
													/month
												</span>
											</span>
											<a
												href="property-details-1.html"
												class="btn btn-outline-primary py-3 px-6 rounded-pill d-inline-flex align-items-center gap-1 fw-semibold"
											>
												Read More
											</a>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6 col-xl-4">
								<div class="property-card">
									<div class="property-card__head">
										<div class="swiper property-card-slider">
											<div class="swiper-wrapper">
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-3.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-4.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-5.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-6.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
											</div>
											<div class="swiper-pagination property-card-pagination"></div>
											<div class="swiper-button-prev property-card-prev"></div>
											<div class="swiper-button-next property-card-next"></div>
										</div>
										<a
											href="property-list.html"
											class="link property-card__tag d-inline-block bg-neutral-0 :bg-primary-300 clr-primary-300 :clr-neutral-0 py-2 px-4 rounded-pill fw-medium"
										>
											For Sale
										</a>
										<button
											class="property-card__fav w-10 h-10 rounded-circle bg-neutral-0 d-grid place-content-center border-0 clr-primary-300"
										>
											<span class="material-symbols-outlined mat-icon fw-200 property-card__heart">
												favorite
											</span>
										</button>
										<span class="property-card__popular-tag">
											<span
												class="d-inline-block fs-14 fw-semibold clr-neutral-0 bg-primary-300 py-2 px-9"
											>
												Popular
											</span>
										</span>
									</div>
									<div class="property-card__body">
										<div class="d-flex align-items-center gap-1 mb-4">
											<span class="material-symbols-outlined mat-icon clr-tertiary-400">
												distance
											</span>
											<span class="d-inline-block"> 7529 E. Pecan St. </span>
										</div>
										<a
											href="property-details-1.html"
											class="link d-block clr-neutral-700 :clr-primary-300 fs-20 fw-medium mb-7"
										>
											RCE Theaters - 907 S Beckford Dr, Henderson, NC 27536
										</a>
										<ul class="list list-row flex-wrap dotted-divider">
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													home_work
												</span>
												<span class="d-block"> 3 Room </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													bed
												</span>
												<span class="d-block"> 5 Bed </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													bathtub
												</span>
												<span class="d-block"> 1 Bath </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													drag_pan
												</span>
												<span class="d-block"> 732 sft </span>
											</li>
										</ul>
									</div>
									<div class="property-card__body py-0">
										<div class="hr-dashed"></div>
									</div>
									<div class="property-card__body">
										<div class="d-flex flex-wrap justify-content-between align-items-center">
											<span class="d-block fs-20 fw-medium clr-primary-300">
												$5,256 <span class="d-inline-block clr-neutral-500 fs-16 fw-normal">
													/month
												</span>
											</span>
											<a
												href="property-details-1.html"
												class="btn btn-outline-primary py-3 px-6 rounded-pill d-inline-flex align-items-center gap-1 fw-semibold"
											>
												Read More
											</a>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6 col-xl-4">
								<div class="property-card">
									<div class="property-card__head">
										<div class="swiper property-card-slider">
											<div class="swiper-wrapper">
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-4.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-1.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-2.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-6.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
											</div>
											<div class="swiper-pagination property-card-pagination"></div>
											<div class="swiper-button-prev property-card-prev"></div>
											<div class="swiper-button-next property-card-next"></div>
										</div>
										<a
											href="property-list.html"
											class="link property-card__tag d-inline-block bg-neutral-0 :bg-primary-300 clr-primary-300 :clr-neutral-0 py-2 px-4 rounded-pill fw-medium"
										>
											For Rent
										</a>
										<button
											class="property-card__fav w-10 h-10 rounded-circle bg-neutral-0 d-grid place-content-center border-0 clr-primary-300"
										>
											<span class="material-symbols-outlined mat-icon fw-200 property-card__heart">
												favorite
											</span>
										</button>
										<span class="property-card__popular-tag">
											<span
												class="d-inline-block fs-14 fw-semibold clr-neutral-0 bg-primary-300 py-2 px-9"
											>
												Popular
											</span>
										</span>
									</div>
									<div class="property-card__body">
										<div class="d-flex align-items-center gap-1 mb-4">
											<span class="material-symbols-outlined mat-icon clr-tertiary-400">
												distance
											</span>
											<span class="d-inline-block"> 3605 Parker Rd. </span>
										</div>
										<a
											href="property-details-1.html"
											class="link d-block clr-neutral-700 :clr-primary-300 fs-20 fw-medium mb-7"
										>
											Costco Wholesale - 1021 Oak Forest Ln, Myrtle Beach, SC
										</a>
										<ul class="list list-row flex-wrap dotted-divider">
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													home_work
												</span>
												<span class="d-block"> 3 Room </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													bed
												</span>
												<span class="d-block"> 5 Bed </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													bathtub
												</span>
												<span class="d-block"> 1 Bath </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													drag_pan
												</span>
												<span class="d-block"> 732 sft </span>
											</li>
										</ul>
									</div>
									<div class="property-card__body py-0">
										<div class="hr-dashed"></div>
									</div>
									<div class="property-card__body">
										<div class="d-flex flex-wrap justify-content-between align-items-center">
											<span class="d-block fs-20 fw-medium clr-primary-300">
												$5,256 <span class="d-inline-block clr-neutral-500 fs-16 fw-normal">
													/month
												</span>
											</span>
											<a
												href="property-details-1.html"
												class="btn btn-outline-primary py-3 px-6 rounded-pill d-inline-flex align-items-center gap-1 fw-semibold"
											>
												Read More
											</a>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6 col-xl-4">
								<div class="property-card">
									<div class="property-card__head">
										<div class="swiper property-card-slider">
											<div class="swiper-wrapper">
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-5.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-4.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-2.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-6.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
											</div>
											<div class="swiper-pagination property-card-pagination"></div>
											<div class="swiper-button-prev property-card-prev"></div>
											<div class="swiper-button-next property-card-next"></div>
										</div>
										<a
											href="property-list.html"
											class="link property-card__tag d-inline-block bg-neutral-0 :bg-primary-300 clr-primary-300 :clr-neutral-0 py-2 px-4 rounded-pill fw-medium"
										>
											For Sale
										</a>
										<button
											class="property-card__fav w-10 h-10 rounded-circle bg-neutral-0 d-grid place-content-center border-0 clr-primary-300"
										>
											<span class="material-symbols-outlined mat-icon fw-200 property-card__heart">
												favorite
											</span>
										</button>
									</div>
									<div class="property-card__body">
										<div class="d-flex align-items-center gap-1 mb-4">
											<span class="material-symbols-outlined mat-icon clr-tertiary-400">
												distance
											</span>
											<span class="d-inline-block"> 7529 E. Pecan St. </span>
										</div>
										<a
											href="property-details-1.html"
											class="link d-block clr-neutral-700 :clr-primary-300 fs-20 fw-medium mb-7"
										>
											Dollar General - 5416 Rock Quarry Rd, Raleigh, NC 27610
										</a>
										<ul class="list list-row flex-wrap dotted-divider">
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													home_work
												</span>
												<span class="d-block"> 3 Room </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													bed
												</span>
												<span class="d-block"> 5 Bed </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													bathtub
												</span>
												<span class="d-block"> 1 Bath </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													drag_pan
												</span>
												<span class="d-block"> 732 sft </span>
											</li>
										</ul>
									</div>
									<div class="property-card__body py-0">
										<div class="hr-dashed"></div>
									</div>
									<div class="property-card__body">
										<div class="d-flex flex-wrap justify-content-between align-items-center">
											<span class="d-block fs-20 fw-medium clr-primary-300">
												$5,256 <span class="d-inline-block clr-neutral-500 fs-16 fw-normal">
													/month
												</span>
											</span>
											<a
												href="property-details-1.html"
												class="btn btn-outline-primary py-3 px-6 rounded-pill d-inline-flex align-items-center gap-1 fw-semibold"
											>
												Read More
											</a>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6 col-xl-4">
								<div class="property-card">
									<div class="property-card__head">
										<div class="swiper property-card-slider">
											<div class="swiper-wrapper">
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-6.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-5.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-4.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-1.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
											</div>
											<div class="swiper-pagination property-card-pagination"></div>
											<div class="swiper-button-prev property-card-prev"></div>
											<div class="swiper-button-next property-card-next"></div>
										</div>
										<a
											href="property-list.html"
											class="link property-card__tag d-inline-block bg-neutral-0 :bg-primary-300 clr-primary-300 :clr-neutral-0 py-2 px-4 rounded-pill fw-medium"
										>
											For Rent
										</a>
										<button
											class="property-card__fav w-10 h-10 rounded-circle bg-neutral-0 d-grid place-content-center border-0 clr-primary-300"
										>
											<span class="material-symbols-outlined mat-icon fw-200 property-card__heart">
												favorite
											</span>
										</button>
									</div>
									<div class="property-card__body">
										<div class="d-flex align-items-center gap-1 mb-4">
											<span class="material-symbols-outlined mat-icon clr-tertiary-400">
												distance
											</span>
											<span class="d-inline-block"> 3890 Poplar Dr. </span>
										</div>
										<a
											href="property-details-1.html"
											class="link d-block clr-neutral-700 :clr-primary-300 fs-20 fw-medium mb-7"
										>
											Best Buy - 6280 Capital Blvd, Raleigh, NC 27616
										</a>
										<ul class="list list-row flex-wrap dotted-divider">
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													home_work
												</span>
												<span class="d-block"> 3 Room </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													bed
												</span>
												<span class="d-block"> 5 Bed </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													bathtub
												</span>
												<span class="d-block"> 1 Bath </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													drag_pan
												</span>
												<span class="d-block"> 732 sft </span>
											</li>
										</ul>
									</div>
									<div class="property-card__body py-0">
										<div class="hr-dashed"></div>
									</div>
									<div class="property-card__body">
										<div class="d-flex flex-wrap justify-content-between align-items-center">
											<span class="d-block fs-20 fw-medium clr-primary-300">
												$5,256 <span class="d-inline-block clr-neutral-500 fs-16 fw-normal">
													/month
												</span>
											</span>
											<a
												href="property-details-1.html"
												class="btn btn-outline-primary py-3 px-6 rounded-pill d-inline-flex align-items-center gap-1 fw-semibold"
											>
												Read More
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="tab-pane fade" id="london">
						<div class="row g-4">
							<div class="col-md-6 col-xl-4">
								<div class="property-card">
									<div class="property-card__head">
										<div class="swiper property-card-slider">
											<div class="swiper-wrapper">
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-4.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-1.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-2.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-6.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
											</div>
											<div class="swiper-pagination property-card-pagination"></div>
											<div class="swiper-button-prev property-card-prev"></div>
											<div class="swiper-button-next property-card-next"></div>
										</div>
										<a
											href="property-list.html"
											class="link property-card__tag d-inline-block bg-neutral-0 :bg-primary-300 clr-primary-300 :clr-neutral-0 py-2 px-4 rounded-pill fw-medium"
										>
											For Rent
										</a>
										<button
											class="property-card__fav w-10 h-10 rounded-circle bg-neutral-0 d-grid place-content-center border-0 clr-primary-300"
										>
											<span class="material-symbols-outlined mat-icon fw-200 property-card__heart">
												favorite
											</span>
										</button>
										<span class="property-card__popular-tag">
											<span
												class="d-inline-block fs-14 fw-semibold clr-neutral-0 bg-primary-300 py-2 px-9"
											>
												Popular
											</span>
										</span>
									</div>
									<div class="property-card__body">
										<div class="d-flex align-items-center gap-1 mb-4">
											<span class="material-symbols-outlined mat-icon clr-tertiary-400">
												distance
											</span>
											<span class="d-inline-block"> 3605 Parker Rd. </span>
										</div>
										<a
											href="property-details-1.html"
											class="link d-block clr-neutral-700 :clr-primary-300 fs-20 fw-medium mb-7"
										>
											Costco Wholesale - 1021 Oak Forest Ln, Myrtle Beach, SC
										</a>
										<ul class="list list-row flex-wrap dotted-divider">
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													home_work
												</span>
												<span class="d-block"> 3 Room </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													bed
												</span>
												<span class="d-block"> 5 Bed </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													bathtub
												</span>
												<span class="d-block"> 1 Bath </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													drag_pan
												</span>
												<span class="d-block"> 732 sft </span>
											</li>
										</ul>
									</div>
									<div class="property-card__body py-0">
										<div class="hr-dashed"></div>
									</div>
									<div class="property-card__body">
										<div class="d-flex flex-wrap justify-content-between align-items-center">
											<span class="d-block fs-20 fw-medium clr-primary-300">
												$5,256 <span class="d-inline-block clr-neutral-500 fs-16 fw-normal">
													/month
												</span>
											</span>
											<a
												href="property-details-1.html"
												class="btn btn-outline-primary py-3 px-6 rounded-pill d-inline-flex align-items-center gap-1 fw-semibold"
											>
												Read More
											</a>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6 col-xl-4">
								<div class="property-card">
									<div class="property-card__head">
										<div class="property-card__img">
											<img
												src="/assets/img/featured-img-1.jpg"
												alt="image"
												class="img-fluid w-100"
											/>
										</div>
										<a
											href="property-list.html"
											class="link property-card__tag d-inline-block bg-neutral-0 :bg-primary-300 clr-primary-300 :clr-neutral-0 py-2 px-4 rounded-pill fw-medium"
										>
											For Sale
										</a>
										<button
											class="property-card__fav w-10 h-10 rounded-circle bg-neutral-0 d-grid place-content-center border-0 clr-primary-300"
										>
											<span class="material-symbols-outlined mat-icon fw-200 property-card__heart">
												favorite
											</span>
										</button>
										<span class="property-card__popular-tag">
											<span
												class="d-inline-block fs-14 fw-semibold clr-neutral-0 bg-primary-300 py-2 px-9"
											>
												Popular
											</span>
										</span>
									</div>
									<div class="property-card__body">
										<div class="d-flex align-items-center gap-1 mb-4">
											<span class="material-symbols-outlined mat-icon clr-tertiary-400">
												distance
											</span>
											<span class="d-inline-block"> 3890 Poplar Dr. </span>
										</div>
										<a
											href="property-details-1.html"
											class="link d-block clr-neutral-700 :clr-primary-300 fs-20 fw-medium mb-7"
										>
											Regal North Hills - 4150 Main at North Hills St, Raleigh
										</a>
										<ul class="list list-row flex-wrap dotted-divider">
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													home_work
												</span>
												<span class="d-block"> 3 Room </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													bed
												</span>
												<span class="d-block"> 5 Bed </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													bathtub
												</span>
												<span class="d-block"> 1 Bath </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													drag_pan
												</span>
												<span class="d-block"> 732 sft </span>
											</li>
										</ul>
									</div>
									<div class="property-card__body py-0">
										<div class="hr-dashed"></div>
									</div>
									<div class="property-card__body">
										<div class="d-flex flex-wrap justify-content-between align-items-center">
											<span class="d-block fs-20 fw-medium clr-primary-300">
												$5,256 <span class="d-inline-block clr-neutral-500 fs-16 fw-normal">
													/month
												</span>
											</span>
											<a
												href="property-details-1.html"
												class="btn btn-outline-primary py-3 px-6 rounded-pill d-inline-flex align-items-center gap-1 fw-semibold"
											>
												Read More
											</a>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6 col-xl-4">
								<div class="property-card">
									<div class="property-card__head">
										<div class="swiper property-card-slider">
											<div class="swiper-wrapper">
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-2.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-3.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-4.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-5.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
											</div>
											<div class="swiper-pagination property-card-pagination"></div>
											<div class="swiper-button-prev property-card-prev"></div>
											<div class="swiper-button-next property-card-next"></div>
										</div>
										<a
											href="property-list.html"
											class="link property-card__tag d-inline-block bg-neutral-0 :bg-primary-300 clr-primary-300 :clr-neutral-0 py-2 px-4 rounded-pill fw-medium"
										>
											For Rent
										</a>
										<button
											class="property-card__fav w-10 h-10 rounded-circle bg-neutral-0 d-grid place-content-center border-0 clr-primary-300"
										>
											<span class="material-symbols-outlined mat-icon fw-200 property-card__heart">
												favorite
											</span>
										</button>
									</div>
									<div class="property-card__body">
										<div class="d-flex align-items-center gap-1 mb-4">
											<span class="material-symbols-outlined mat-icon clr-tertiary-400">
												distance
											</span>
											<span class="d-inline-block"> 8558 Green Rd. </span>
										</div>
										<a
											href="property-details-1.html"
											class="link d-block clr-neutral-700 :clr-primary-300 fs-20 fw-medium mb-7"
										>
											Spring Lane Cinemas - 1351 Plaza Blvd, Sanford, NC 27330
										</a>
										<ul class="list list-row flex-wrap dotted-divider">
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													home_work
												</span>
												<span class="d-block"> 3 Room </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													bed
												</span>
												<span class="d-block"> 5 Bed </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													bathtub
												</span>
												<span class="d-block"> 1 Bath </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													drag_pan
												</span>
												<span class="d-block"> 732 sft </span>
											</li>
										</ul>
									</div>
									<div class="property-card__body py-0">
										<div class="hr-dashed"></div>
									</div>
									<div class="property-card__body">
										<div class="d-flex flex-wrap justify-content-between align-items-center">
											<span class="d-block fs-20 fw-medium clr-primary-300">
												$5,256 <span class="d-inline-block clr-neutral-500 fs-16 fw-normal">
													/month
												</span>
											</span>
											<a
												href="property-details-1.html"
												class="btn btn-outline-primary py-3 px-6 rounded-pill d-inline-flex align-items-center gap-1 fw-semibold"
											>
												Read More
											</a>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6 col-xl-4">
								<div class="property-card">
									<div class="property-card__head">
										<div class="swiper property-card-slider">
											<div class="swiper-wrapper">
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-3.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-4.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-5.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-6.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
											</div>
											<div class="swiper-pagination property-card-pagination"></div>
											<div class="swiper-button-prev property-card-prev"></div>
											<div class="swiper-button-next property-card-next"></div>
										</div>
										<a
											href="property-list.html"
											class="link property-card__tag d-inline-block bg-neutral-0 :bg-primary-300 clr-primary-300 :clr-neutral-0 py-2 px-4 rounded-pill fw-medium"
										>
											For Sale
										</a>
										<button
											class="property-card__fav w-10 h-10 rounded-circle bg-neutral-0 d-grid place-content-center border-0 clr-primary-300"
										>
											<span class="material-symbols-outlined mat-icon fw-200 property-card__heart">
												favorite
											</span>
										</button>
										<span class="property-card__popular-tag">
											<span
												class="d-inline-block fs-14 fw-semibold clr-neutral-0 bg-primary-300 py-2 px-9"
											>
												Popular
											</span>
										</span>
									</div>
									<div class="property-card__body">
										<div class="d-flex align-items-center gap-1 mb-4">
											<span class="material-symbols-outlined mat-icon clr-tertiary-400">
												distance
											</span>
											<span class="d-inline-block"> 7529 E. Pecan St. </span>
										</div>
										<a
											href="property-details-1.html"
											class="link d-block clr-neutral-700 :clr-primary-300 fs-20 fw-medium mb-7"
										>
											RCE Theaters - 907 S Beckford Dr, Henderson, NC 27536
										</a>
										<ul class="list list-row flex-wrap dotted-divider">
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													home_work
												</span>
												<span class="d-block"> 3 Room </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													bed
												</span>
												<span class="d-block"> 5 Bed </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													bathtub
												</span>
												<span class="d-block"> 1 Bath </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													drag_pan
												</span>
												<span class="d-block"> 732 sft </span>
											</li>
										</ul>
									</div>
									<div class="property-card__body py-0">
										<div class="hr-dashed"></div>
									</div>
									<div class="property-card__body">
										<div class="d-flex flex-wrap justify-content-between align-items-center">
											<span class="d-block fs-20 fw-medium clr-primary-300">
												$5,256 <span class="d-inline-block clr-neutral-500 fs-16 fw-normal">
													/month
												</span>
											</span>
											<a
												href="property-details-1.html"
												class="btn btn-outline-primary py-3 px-6 rounded-pill d-inline-flex align-items-center gap-1 fw-semibold"
											>
												Read More
											</a>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6 col-xl-4">
								<div class="property-card">
									<div class="property-card__head">
										<div class="swiper property-card-slider">
											<div class="swiper-wrapper">
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-5.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-4.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-2.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-6.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
											</div>
											<div class="swiper-pagination property-card-pagination"></div>
											<div class="swiper-button-prev property-card-prev"></div>
											<div class="swiper-button-next property-card-next"></div>
										</div>
										<a
											href="property-list.html"
											class="link property-card__tag d-inline-block bg-neutral-0 :bg-primary-300 clr-primary-300 :clr-neutral-0 py-2 px-4 rounded-pill fw-medium"
										>
											For Sale
										</a>
										<button
											class="property-card__fav w-10 h-10 rounded-circle bg-neutral-0 d-grid place-content-center border-0 clr-primary-300"
										>
											<span class="material-symbols-outlined mat-icon fw-200 property-card__heart">
												favorite
											</span>
										</button>
									</div>
									<div class="property-card__body">
										<div class="d-flex align-items-center gap-1 mb-4">
											<span class="material-symbols-outlined mat-icon clr-tertiary-400">
												distance
											</span>
											<span class="d-inline-block"> 7529 E. Pecan St. </span>
										</div>
										<a
											href="property-details-1.html"
											class="link d-block clr-neutral-700 :clr-primary-300 fs-20 fw-medium mb-7"
										>
											Dollar General - 5416 Rock Quarry Rd, Raleigh, NC 27610
										</a>
										<ul class="list list-row flex-wrap dotted-divider">
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													home_work
												</span>
												<span class="d-block"> 3 Room </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													bed
												</span>
												<span class="d-block"> 5 Bed </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													bathtub
												</span>
												<span class="d-block"> 1 Bath </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													drag_pan
												</span>
												<span class="d-block"> 732 sft </span>
											</li>
										</ul>
									</div>
									<div class="property-card__body py-0">
										<div class="hr-dashed"></div>
									</div>
									<div class="property-card__body">
										<div class="d-flex flex-wrap justify-content-between align-items-center">
											<span class="d-block fs-20 fw-medium clr-primary-300">
												$5,256 <span class="d-inline-block clr-neutral-500 fs-16 fw-normal">
													/month
												</span>
											</span>
											<a
												href="property-details-1.html"
												class="btn btn-outline-primary py-3 px-6 rounded-pill d-inline-flex align-items-center gap-1 fw-semibold"
											>
												Read More
											</a>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6 col-xl-4">
								<div class="property-card">
									<div class="property-card__head">
										<div class="swiper property-card-slider">
											<div class="swiper-wrapper">
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-6.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-5.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-4.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
												<div class="swiper-slide">
													<div class="property-card__img">
														<img
															src="/assets/img/featured-img-1.jpg"
															alt="image"
															class="img-fluid w-100"
														/>
													</div>
												</div>
											</div>
											<div class="swiper-pagination property-card-pagination"></div>
											<div class="swiper-button-prev property-card-prev"></div>
											<div class="swiper-button-next property-card-next"></div>
										</div>
										<a
											href="property-list.html"
											class="link property-card__tag d-inline-block bg-neutral-0 :bg-primary-300 clr-primary-300 :clr-neutral-0 py-2 px-4 rounded-pill fw-medium"
										>
											For Rent
										</a>
										<button
											class="property-card__fav w-10 h-10 rounded-circle bg-neutral-0 d-grid place-content-center border-0 clr-primary-300"
										>
											<span class="material-symbols-outlined mat-icon fw-200 property-card__heart">
												favorite
											</span>
										</button>
									</div>
									<div class="property-card__body">
										<div class="d-flex align-items-center gap-1 mb-4">
											<span class="material-symbols-outlined mat-icon clr-tertiary-400">
												distance
											</span>
											<span class="d-inline-block"> 3890 Poplar Dr. </span>
										</div>
										<a
											href="property-details-1.html"
											class="link d-block clr-neutral-700 :clr-primary-300 fs-20 fw-medium mb-7"
										>
											Best Buy - 6280 Capital Blvd, Raleigh, NC 27616
										</a>
										<ul class="list list-row flex-wrap dotted-divider">
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													home_work
												</span>
												<span class="d-block"> 3 Room </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													bed
												</span>
												<span class="d-block"> 5 Bed </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													bathtub
												</span>
												<span class="d-block"> 1 Bath </span>
											</li>
											<li>
												<span
													class="material-symbols-outlined mat-icon clr-neutral-600 d-inline-block mb-1"
												>
													drag_pan
												</span>
												<span class="d-block"> 732 sft </span>
											</li>
										</ul>
									</div>
									<div class="property-card__body py-0">
										<div class="hr-dashed"></div>
									</div>
									<div class="property-card__body">
										<div class="d-flex flex-wrap justify-content-between align-items-center">
											<span class="d-block fs-20 fw-medium clr-primary-300">
												$5,256 <span class="d-inline-block clr-neutral-500 fs-16 fw-normal">
													/month
												</span>
											</span>
											<a
												href="property-details-1.html"
												class="btn btn-outline-primary py-3 px-6 rounded-pill d-inline-flex align-items-center gap-1 fw-semibold"
											>
												Read More
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="text-center">
					<a
						href="/vehicle/list"
						class="link d-inline-flex align-items-center gap-2 py-3 px-6 rounded-pill bg-primary-300 clr-neutral-0 :bg-primary-400 :clr-neutral-0 fw-semibold mt-10"
					>
						<span class="material-symbols-outlined"> hourglass_top </span>
						<span class="d-inline-block"> Lihat Lebih </span>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- /Featured Property  -->
