<script>
	import '../app.css';
	const openMap = () => {};
	let expanded = false;

	function toggleFab() {
		expanded = !expanded;
	}
</script>

<div class="py-3 border-bottom header-top">
	<div class="container">
		<div class="row">
			<div class="col-12 d-flex justify-content-between align-items-center">
				<div>Impian Anda Adalah Tujuan Kami</div>
				<div>admin@kartikamas.com</div>
			</div>
		</div>
	</div>
</div>
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
									<!-- <li class="menu-list"> -->
									<!-- svelte-ignore a11y-click-events-have-key-events -->
									<!-- svelte-ignore a11y-no-static-element-interactions -->
									<!-- <a href="#" class="d-flex align-items-center gap-5 link menu-link has-sub">
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
									</li> -->
									<li>
										<div class="d-flex align-items-center gap-5">
											<div class="d-none d-lg-block">
												<span class="fs-12 d-flex justify-content-end title"> Admin 1</span>
												<span class="d-flex justify-content-end">
													<a href="https://wa.me/62812100591">0812-100-591</a>
												</span>
											</div>
										</div>
									</li>
									<li>
										<div class="d-flex align-items-center gap-5">
											<div class="d-none d-lg-block">
												<span class="fs-12 d-flex justify-content-end title"> Admin 2</span>
												<span class="d-flex justify-content-end">
													<a href="https://wa.me/62812100592">0812-100-592</a>
												</span>
											</div>
										</div>
									</li>
									<li>
										<div class="d-flex align-items-center gap-5">
											<div class="d-none d-lg-block">
												<span class="fs-12 d-flex justify-content-end title"> Lokasi </span>
												<span class="d-flex justify-content-end">
													<a href="https://maps.app.goo.gl/SmofqqxQzWGUVTpL6?g_st=ic"
														>Jl. Wijaya Kusuma No.30, Pd. Labu</a
													>
												</span>
											</div>
										</div>
									</li>
								</ul>
							</li>
							<!-- <li class="d-none d-md-block">
								<a
									href="https://wa.me/62812100592"
									class="link btn bg-primary-300 :bg-primary-300 clr-neutral-0 :clr-neutral-0 fw-600 py-4 px-8 rounded-pill"
								>
									Order Sekarang
								</a>
							</li> -->
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
<!-- Header -->
<header class="header header--sticky">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<nav class="menu d-lg-flex justify-content-lg-center align-items-lg-center">
					<div
						class="menu-mobile-nav d-flex align-items-center justify-content-end py-3 py-lg-0 order-lg-2"
					>
						<button
							class="menu-toggle w-10 h-10 p-0 border-0 lh-1 bg-primary-300 clr-primary-50 transition :clr-primary-50 :bg-primary-300 rounded-1 flex-shrink-0 order-2 order-lg-1 d-lg-none"
						>
							<span class="material-symbols-outlined mat-icon fs-28"> menu </span>
						</button>
					</div>
					<ul class="list list-lg-row menu-nav order-lg-1">
						<li class="menu-item current-page">
							<a href="/" class="link menu-link"> Beranda </a>
						</li>
						<li class="menu-list">
							<a class="link menu-link has-sub"> Layanan </a>
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
								<li class="menu-sub-list">
									<a href="/sewa-transportasi" class="link menu-sub-link"> Sewa Transportasi </a>
								</li>
								<li class="menu-sub-list">
									<a href="/paket-wisata" class="link menu-sub-link"> Paket Wisata </a>
								</li>
							</ul>
						</li>
						<!-- <li class="menu-item">
							<a href="/sewa-transportasi" class="link menu-link"> Sewa Transportasi </a>
						</li> -->
						<!-- <li class="menu-item">
							<a href="/paket-wisata" class="link menu-link"> Paket Wisata </a>
						</li> -->
						<li class="menu-item">
							<a href="/blog" class="link menu-link"> Blog </a>
						</li>
						<li class="menu-item">
							<a href="/tentang-kartikamas" class="link menu-link"> Tentang Kami </a>
						</li>
						<!-- <li class="menu-list">
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
						</li> -->
					</ul>
				</nav>
			</div>
		</div>
	</div>
</header>
<!-- /Header -->
<slot />
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="fab-container {expanded ? 'expanded' : ''}">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="fab shadow" on:click={toggleFab}>
		<div class="fab-content">
			<span class="material-symbols-outlined mat-icon fs-28"> support_agent </span>
		</div>
	</div>
	<div class="sub-button shadow">
		<a href="https://wa.me/62812100591" target="_blank">
			<span class="material-symbols-outlined mat-icon fs-28">phone</span>
		</a>
	</div>
	<div class="sub-button shadow">
		<a href="mailto:admin@kartikamas.com" target="_blank">
			<span class="material-symbols-outlined mat-icon fs-28">mail_outline</span>
		</a>
	</div>
	<div class="sub-button shadow">
		<a href="/faq" target="_blank">
			<span class="material-symbols-outlined mat-icon fs-28">help_outline</span>
		</a>
	</div>
</div>

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
	.header-top a {
		color: #660000;
		font-size: 22px;
		font-weight: 500;
		text-decoration: none;
	}

	.header-top img {
		min-height: 100px;
	}
	.title {
		font-size: 16px;
	}
	.header--sticky {
		background-color: #4b0000;
	}
	.menu-link {
		color: black;
		padding: 16px;
		padding-inline: 20px;
	}

	@media (min-width: 992px) {
		.menu-nav a {
			color: white;
		}
		.menu-nav a:hover {
			text-decoration: underline;
		}
		.menu-nav a.has-sub:hover {
			text-decoration: none;
		}
	}
	.menu-sub-list a {
		color: #660000;
	}
	.menu-sub-list a:hover {
		background: #660000;
		color: white;
		text-decoration: none;
	}
	.list.menu-sub {
		min-height: 250px;
		min-width: 300px;
	}
	.fab-container {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
		user-select: none;
		position: fixed;
		bottom: 30px;
		right: 30px;
	}

	.expanded .sub-button:nth-child(2) {
		transform: translateY(-80px);
	}

	.expanded .sub-button:nth-child(3) {
		transform: translateY(-140px);
	}

	.expanded .sub-button:nth-child(4) {
		transform: translateY(-200px);
	}

	.expanded .sub-button:nth-child(5) {
		transform: translateY(-260px);
	}

	.expanded .sub-button:nth-child(6) {
		transform: translateY(-320px);
	}

	.fab {
		position: relative;
		height: 70px;
		width: 70px;
		background-color: #660000;
		border-radius: 50%;
		z-index: 2;
	}

	.fab::before {
		content: ' ';
		position: absolute;
		bottom: 0;
		right: 0;
		height: 35px;
		width: 35px;
		background-color: inherit;
		border-radius: 0 0 10px 0;
		z-index: -1;
	}

	.fab-content {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 100%;
		border-radius: 50%;
	}

	.material-symbols-outlined.mat-icon.fs-28 {
		color: white;
		font-size: 36px;
	}

	.sub-button {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		bottom: 10px;
		right: 10px;
		height: 50px;
		width: 50px;
		background-color: #660000;
		border-radius: 50%;
		transition: all 0.3s ease;
	}

	.sub-button:hover {
		cursor: pointer;
	}

	.sub-button .material-symbols-outlined.mat-icon.fs-28 {
		color: white;
		padding-top: 6px;
	}
</style>
