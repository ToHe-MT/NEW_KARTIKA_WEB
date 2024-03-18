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
						<a href="/" class="link d-inline-block">
							<img src="/kartikamas-logo.png" alt="logo" class="logo d-xl-none" />
							<img src="/kartikamas-logo.png" alt="logo" class="logo d-none d-xl-inline-block" />
						</a>
					</li>
					<li>
						<ul class="list list-row flex-wrap gap-3 align-items-center justify-content-between">
							<li>
								<ul class="list list-row flex-wrap align-items-center list-divider">
									<!-- <li>
										<div
											class="d-flex align-items-center gap-5"
											on:click={() => {
												window.location.href = 'https://wa.me/62812100591';
											}}
										>
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
										<div
											class="d-flex align-items-center gap-5"
											on:click={() => {
												window.location.href = 'https://wa.me/62812100592';
											}}
										>
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
									</li> -->
									<li class="menu-list">
										<!-- svelte-ignore a11y-click-events-have-key-events -->
										<!-- svelte-ignore a11y-no-static-element-interactions -->
										<a href="#" class="d-flex align-items-center gap-5 link menu-link has-sub">
											<div class="flex-container">
												<div
													class="w-10 h-10 rounded-circle bg-secondary-300 d-grid place-content-center flex-shrink-0"
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="20"
														height="20"
														fill="white"
														class="bi bi-whatsapp"
														viewBox="0 0 16 16"
													>
														<path
															d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"
														/>
													</svg>
												</div>
												<div
													class="hamburger-icon w-4 h-4 rounded-circle bg-primary-300 d-grid place-content-center flex-shrink-0"
												>
													<span class="material-symbols-outlined clr-neutral-0 mat-icon fs-10">
														menu
													</span>
												</div>
											</div>
											<div class="d-none d-lg-block">
												<span class="d-block"> Call Admin </span>
											</div>
										</a>
										<ul class="list menu-sub header-sub">
											<li class="menu-sub-list">
												<a
													href="https://wa.me/62812100591"
													class="link menu-sub-link clr-neutral-700 :clr-primary-300"
												>
													<div>
														<p class="fw-medium">Admin 1</p>
														<p>0812-100-591</p>
													</div>
												</a>
											</li>
											<li class="menu-sub-list">
												<a
													href="https://wa.me/62812100592"
													class="link menu-sub-link clr-neutral-700 :clr-primary-300"
												>
													<div>
														<p class="fw-medium">Admin 2</p>
														<p>0812-100-592</p>
													</div>
												</a>
											</li>
										</ul>
									</li>
									<li>
										<!-- svelte-ignore a11y-click-events-have-key-events -->
										<!-- svelte-ignore a11y-no-static-element-interactions -->
										<div
											class="d-flex align-items-center gap-5"
											on:click={() => {
												window.location.href = 'https://maps.app.goo.gl/D9yuG9d7nu4LC1kQA';
											}}
										>
											<div
												class="w-10 h-10 rounded-circle bg-tertiary-300 d-grid place-content-center flex-shrink-0"
											>
												<span
													class="material-symbols-outlined mat-icon fs-24 clr-neutral-700 fw-300"
												>
													pin_drop
												</span>
											</div>
											<div class="d-none d-lg-block">
												<span class="fs-12 d-block"> Lokasi </span>
												<span class="d-block">
													<a href="https://maps.app.goo.gl/SmofqqxQzWGUVTpL6?g_st=ic"
														>Jl. Wijaya Kusuma No.30, Pd. Labu</a
													>
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
									href="https://wa.me/62812100592"
									class="link btn bg-primary-300 :bg-primary-300 clr-neutral-0 :clr-neutral-0 fw-600 py-4 px-8 rounded-pill"
								>
									Order Sekarang
								</a>
							</li>
						</ul>
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
																src="/assets/img/user-3.jpg"
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
						<li class="menu-item current-page">
							<a href="/" class="link menu-link"> Beranda </a>
						</li>
						<li class="menu-list">
							<a href="#" class="link menu-link has-sub"> Paket Umroh & Haji </a>
							<ul class="list menu-sub">
								<li class="menu-sub-list">
									<a href="/paket/umroh" class="link menu-sub-link"> Paket Umroh </a>
								</li>
								<li class="menu-sub-list">
									<a href="/paket/umroh-plus" class="link menu-sub-link"> Paket Umroh Plus</a>
								</li>
								<li class="menu-sub-list">
									<a href="/paket/haji" class="link menu-sub-link"> Paket Haji Plus/Furoda</a>
								</li>
							</ul>
						</li>
						<li class="menu-item">
							<a href="/sewa-transportasi" class="link menu-link"> Sewa Transportasi </a>
						</li>
						<li class="menu-item">
							<a href="https://blog.kartikamas.com" class="link menu-link"> Blog </a>
						</li>
						<li class="menu-item">
							<a href="/tentang-kartikamas" class="link menu-link"> Tentang </a>
						</li>
						<li class="menu-list">
							<a href="#" class="link menu-link has-sub clear-content">
								<span class="material-symbols-outlined mat-icon"> more_horiz </span>
							</a>
							<ul class="list menu-sub">
								<li class="menu-sub-list">
									<a href="/faq" class="link menu-sub-link"> Peryaratan Umroh </a>
								</li>
								<li class="menu-sub-list">
									<a href="/privacy-policy" class="link menu-sub-link"> Kebijakan Privasi Data </a>
								</li>
								<li class="menu-sub-list">
									<a href="/faq" class="link menu-sub-link"> FAQ </a>
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

<style>
	@media (max-width: 991px) {
		.header-sub {
			position: absolute;
			background-color: white;
			z-index: 1000;
			box-shadow: 0 0.5rem 1rem hsl(var(--black) / 0.1);
		}
	}

	.flex-container {
		position: relative;
	}

	.hamburger-icon {
		position: absolute;
		bottom: 0;
		right: 0;
	}
</style>
