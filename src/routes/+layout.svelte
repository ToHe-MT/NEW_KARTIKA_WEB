<script>
	const openMap = () => {};
</script>

<!-- Header Top  -->
<div class="py-5 border-bottom header-top">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<ul class="list list-row flex-wrap gap-3 align-items-center justify-content-between">
					<li>
						<a href="index.html" class="link d-inline-block">
							<img src="./assets/img/favicon.png" alt="logo" class="logo d-xl-none" />
							<img src="./assets/img/logo.png" alt="logo" class="logo d-none d-xl-inline-block" />
						</a>
					</li>
					<li>
						<ul class="list list-row flex-wrap align-items-center list-divider">
							<li>
								<div class="d-flex align-items-center gap-5">
									<div
										class="w-10 h-10 rounded-circle bg-primary-300 d-grid place-content-center flex-shrink-0"
									>
										<span class="material-symbols-outlined mat-icon fs-24 clr-neutral-0 fw-300">
											phone_in_talk
										</span>
									</div>
									<div class="d-none d-lg-block">
										<span class="fs-12 d-block"> Call Admin 1 </span>
										<a
											href="https://wa.me/62812100591"
											class="link d-block clr-neutral-700 :clr-primary-300"
										>
											0812-100-591
										</a>
									</div>
								</div>
							</li>
							<li>
								<div class="d-flex align-items-center gap-5">
									<div
										class="w-10 h-10 rounded-circle bg-secondary-300 d-grid place-content-center flex-shrink-0"
									>
										<span class="material-symbols-outlined mat-icon fs-24 clr-neutral-700 fw-300">
											call
										</span>
									</div>
									<div class="d-none d-lg-block">
										<span class="fs-12 d-block"> Call Admin 2 </span>
										<a
											href="https://wa.me/62812100592"
											class="link d-block clr-neutral-700 :clr-primary-300"
										>
											0812-100-592
										</a>
									</div>
								</div>
							</li>
							<li>
								<div class="d-flex align-items-center gap-5">
									<div
										class="w-10 h-10 rounded-circle bg-tertiary-300 d-grid place-content-center flex-shrink-0"
									>
										<span class="material-symbols-outlined mat-icon fs-24 clr-neutral-700 fw-300">
											pin_drop
										</span>
									</div>
									<div class="d-none d-lg-block">
										<span class="fs-12 d-block"> Lokasi </span>
										<span class="d-block">
											Jl. Wijaya Kusuma No.30, Pd. Labu
											<span class="material-symbols-outlined" on:click={openMap}>
												arrow_outward
											</span>
										</span>
									</div>
								</div>
							</li>
						</ul>
					</li>
					<li class="d-none d-md-block">
						<a
							href="contact.html"
							class="link btn bg-primary-300 :bg-primary-300 clr-neutral-0 :clr-neutral-0 fw-600 py-4 px-8 rounded-pill"
						>
							Submit Property
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
<!-- Header -->
<header class="header header--sticky border-bottom">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<nav class="menu d-lg-flex justify-content-lg-between align-items-lg-center">
					<div
						class="menu-mobile-nav d-flex align-items-center justify-content-between py-3 py-lg-0 order-lg-2"
					>
						<button
							class="menu-toggle w-10 h-10 p-0 border-0 lh-1 bg-primary-50 clr-primary-500 transition :clr-primary-50 :bg-primary-500 rounded-1 flex-shrink-0 order-2 order-lg-1 d-lg-none"
						>
							<span class="material-symbols-outlined mat-icon fs-28"> menu </span>
						</button>
						<ul class="list list-row gap-4 flex-wrap align-items-center order-1">
							<li>
								<div class="dropdown">
									<a
										href="#"
										class="link d-flex align-items-center gap-2 p-2 rounded-pill bg-primary-5p clr-neutral-500"
										data-bs-toggle="dropdown"
										data-bs-offset="0,14"
									>
										<ul class="list list-row list-divider-half-xs align-items-center lh-1">
											<li>
												<span class="material-symbols-rounded mat-icon"> language </span>
											</li>
											<li>
												<span class="material-symbols-rounded mat-icon"> paid </span>
											</li>
										</ul>
										<span class="material-symbols-rounded mat-icon flex-shrink-0">
											expand_more
										</span>
									</a>
									<div class="dropdown-menu dropdown-start p-0 border border-neutral-30">
										<div class="p-4">
											<ul class="list list-sm-row flex-wrap gap-1 gap-sm-0 w-24ch">
												<li class="w-sm-50 p-1">
													<a
														href="#"
														class="link d-inline-block dropdown-item clr-neutral-500 bg-neutral-20 :bg-neutral-20 rounded"
													>
														<span class="d-block fw-medium mb-1"> Indonesia </span>
														<span class="d-block fs-12 clr-neutral-70"> IDR </span>
													</a>
												</li>
												<li class="w-sm-50 p-1">
													<a
														href="#"
														class="link d-inline-block dropdown-item clr-neutral-500 :bg-neutral-20 rounded"
													>
														<span class="d-block fw-medium mb-1"> English </span>
														<span class="d-block fs-12 clr-neutral-70"> USD </span>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="dropdown">
									<a
										href="#"
										class="link d-grid place-content-center w-10 h-10 rounded-circle bg-primary-5p clr-neutral-500"
										data-bs-toggle="dropdown"
										data-bs-offset="0,16"
									>
										<span class="material-symbols-rounded mat-icon position-relative">
											notifications
											<span
												class="d-inline-block position-absolute top-0 end-0 w-2 h-2 rounded-circle bg-primary-300"
											></span>
										</span>
									</a>
									<div class="dropdown-menu dropdown-menu-xl-end p-0 border border-neutral-30">
										<div class="p-4 p-xxl-6 max-width">
											<h5 class="mb-4">Notifications</h5>
											<ul class="list gap-2">
												<li>
													<a href="#" class="link d-flex gap-4 dropdown-item px-0 px-md-4">
														<div class="flex-shrink-0 d-none d-sm-block">
															<img
																src="./assets/img/user-3.jpg"
																alt="image"
																class="img-fluid w-12 h-12 rounded-circle objec-fit-cover"
															/>
														</div>
														<div class="flex-grow-1 white-space-normal notifications-content">
															<h6 class="mb-0">Makkah is Calling...</h6>
															<p class="fs-14 clr-neutral-500 mb-1">Book a seat!</p>
															<span class="d-block fs-12 clr-neutral-100"> 6 Sec ago </span>
														</div>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<ul class="list list-lg-row menu-nav order-lg-1">
						<li class="menu-list current-page">
							<a href="#" class="link menu-link has-sub"> Home </a>
							<ul class="list menu-sub">
								<li class="menu-sub-list">
									<a href="index.html" class="link menu-sub-link"> Real Estate </a>
								</li>
								<li class="menu-sub-list">
									<a href="home-2.html" class="link menu-sub-link"> Property Listing </a>
								</li>
								<li class="menu-sub-list">
									<a href="home-3.html" class="link menu-sub-link"> Car Rental </a>
								</li>
								<li class="menu-sub-list">
									<a href="home-4.html" class="link menu-sub-link"> Hotel Booking </a>
								</li>
								<li class="menu-sub-list">
									<a href="home-5.html" class="link menu-sub-link"> Tour Booking </a>
								</li>
								<li class="menu-sub-list">
									<a href="home-6.html" class="link menu-sub-link"> Flight Booking </a>
								</li>
							</ul>
						</li>
						<li class="menu-list">
							<a href="#" class="link menu-link has-sub"> Listings </a>
							<ul class="list menu-sub">
								<li class="menu-sub-list">
									<a href="property-list.html" class="link menu-sub-link"> Property List </a>
								</li>
								<li class="menu-sub-list">
									<a href="property-grid.html" class="link menu-sub-link"> Property List (Grid) </a>
								</li>
								<li class="menu-sub-list">
									<a href="property-map.html" class="link menu-sub-link"> Property Map </a>
								</li>
								<li class="menu-sub-list">
									<a href="cab-listing.html" class="link menu-sub-link"> Cab Listing </a>
								</li>
								<li class="menu-sub-list">
									<a href="cab-listing-grid.html" class="link menu-sub-link">
										Cab Listing (Grid)
									</a>
								</li>
								<li class="menu-sub-list">
									<a href="cab-listing-map.html" class="link menu-sub-link"> Cab Listing (Map) </a>
								</li>
								<li class="menu-sub-list">
									<a href="hotel-listing.html" class="link menu-sub-link"> Hotel Listing </a>
								</li>
								<li class="menu-sub-list">
									<a href="hotel-listing-grid.html" class="link menu-sub-link">
										Hotel Listing (Grid)
									</a>
								</li>
								<li class="menu-sub-list">
									<a href="hotel-listing-map.html" class="link menu-sub-link">
										Hotel Listing (Map)
									</a>
								</li>
								<li class="menu-sub-list">
									<a href="tour-listing.html" class="link menu-sub-link"> Tour Listing </a>
								</li>
								<li class="menu-sub-list">
									<a href="tour-listing-grid.html" class="link menu-sub-link">
										Tour Listing (Grid)
									</a>
								</li>
								<li class="menu-sub-list">
									<a href="tour-listing-map.html" class="link menu-sub-link">
										Tour Listing (Map)
									</a>
								</li>
								<li class="menu-sub-list">
									<a href="flight-list.html" class="link menu-sub-link"> Flight List </a>
								</li>
								<li class="menu-sub-list">
									<a href="compare-listing.html" class="link menu-sub-link"> Compare Listing </a>
								</li>
								<li class="menu-sub-list">
									<a href="add-property.html" class="link menu-sub-link"> Add Property </a>
								</li>
							</ul>
						</li>
						<li class="menu-list">
							<a href="#" class="link menu-link has-sub"> Pages </a>
							<ul class="list menu-sub">
								<li class="menu-sub-list">
									<a href="about-us.html" class="link menu-sub-link"> About Us </a>
								</li>
								<li class="menu-sub-list">
									<a href="add-property.html" class="link menu-sub-link"> Add Property </a>
								</li>
								<li class="menu-sub-list">
									<a href="property-details-1.html" class="link menu-sub-link">
										Property Details 1
									</a>
								</li>
								<li class="menu-sub-list">
									<a href="property-details-2.html" class="link menu-sub-link">
										Property Details 2
									</a>
								</li>
								<li class="menu-sub-list">
									<a href="cab-listing-details.html" class="link menu-sub-link">
										Cab Listing Details
									</a>
								</li>
								<li class="menu-sub-list">
									<a href="hotel-listing-details.html" class="link menu-sub-link">
										Hotel Listing Details
									</a>
								</li>
								<li class="menu-sub-list">
									<a href="tour-listing-details.html" class="link menu-sub-link">
										Tour Listing Details
									</a>
								</li>
								<li class="menu-sub-list">
									<a href="flight-details.html" class="link menu-sub-link"> Flight Details </a>
								</li>
								<li class="menu-sub-list">
									<a href="payment-method.html" class="link menu-sub-link"> Payment Method </a>
								</li>
								<li class="menu-sub-list">
									<a href="service.html" class="link menu-sub-link"> Service </a>
								</li>
								<li class="menu-sub-list">
									<a href="service-details.html" class="link menu-sub-link"> Service Details </a>
								</li>
								<li class="menu-sub-list">
									<a href="agent.html" class="link menu-sub-link"> Agent </a>
								</li>
								<li class="menu-sub-list">
									<a href="agent-details-grid.html" class="link menu-sub-link">
										Agent Details Grid
									</a>
								</li>
								<li class="menu-sub-list">
									<a href="agent-details-list.html" class="link menu-sub-link">
										Agent Details List
									</a>
								</li>
								<li class="menu-sub-list">
									<a href="agent-details-review.html" class="link menu-sub-link"> Agent Review </a>
								</li>
								<li class="menu-sub-list">
									<a href="pricing-plan.html" class="link menu-sub-link"> Pricing Plan </a>
								</li>
							</ul>
						</li>
						<li class="menu-list">
							<a href="#" class="link menu-link has-sub clear-content">
								<span class="material-symbols-outlined mat-icon"> more_horiz </span>
							</a>
							<ul class="list menu-sub">
								<li class="menu-sub-list">
									<a href="blog-grid.html" class="link menu-sub-link"> Blog </a>
								</li>
								<li class="menu-sub-list">
									<a href="blog-details.html" class="link menu-sub-link"> Blog Details </a>
								</li>
								<li class="menu-sub-list">
									<a href="faq.html" class="link menu-sub-link"> FAQ </a>
								</li>
								<li class="menu-sub-list">
									<a href="contact.html" class="link menu-sub-link"> Contact Us </a>
								</li>
								<li class="menu-sub-list">
									<a href="sign-in.html" class="link menu-sub-link"> Signin </a>
								</li>
								<li class="menu-sub-list">
									<a href="signup.html" class="link menu-sub-link"> Signup </a>
								</li>
								<li class="menu-sub-list">
									<a href="error.html" class="link menu-sub-link"> Error </a>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</header>
<!-- /Header -->
<slot />
