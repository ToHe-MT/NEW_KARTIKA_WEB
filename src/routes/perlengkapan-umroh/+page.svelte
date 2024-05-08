<script>
	// import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	let status = 'wanita';
	function toggleStatus(param) {
		status = param;
	}
</script>

<div class="section-space--sm bg-primary-3p p-4 p-md-10 pt-md-20">
	<div class="container">
		<div class="row py-5">
			<div class="col-12 d-flex justify-content-center align-items-center flex-column">
				<h2>Perlengkapan Umrah Ekslusif</h2>
				<h5>KARTIKA MAS</h5>
				<!-- <div class="container">
					<p class="text-center">
						Dapatkan perlengkapan umrah berkualitas tinggi untuk mempersiapkan perjalanan suci Anda
						ke Tanah Suci. Kami menyediakan berbagai perlengkapan yang diperlukan untuk memenuhi
						kebutuhan Anda selama melaksanakan ibadah umrah. Dengan perlengkapan yang tepat, Anda
						dapat menghadapi perjalanan Anda dengan percaya diri dan kenyamanan.
					</p>
				</div> -->
			</div>
		</div>
	</div>

	<div class="row py-5">
		<div class="col-12 d-flex justify-content-center align-items-center flex-column">
			<div class="row container px-lg-30">
				<div class="col-xl-2"></div>
				<div class="col-xl-4 px-xl-10 col-lg-6 col-md-6 col-12 d-flex justify-content-between">
					<div class="card-gallery">
						<img src="/perlengkapan/BajuCewe-1.JPG" class="card-img-top top" alt="..." />
						<img src="/perlengkapan/KainCowo-1.JPG" class="card-img-top bottom" alt="..." />
					</div>
				</div>
				<div class="col-xl-6 col-lg-6 col-md-6 col-12">
					<div
						class="d-flex justify-content-center align-items-center align-items-md-start h-100 px-10 flex-column w-100 gap-md-4"
					>
						<h5>Kain Seragam</h5>
						<h5 class="fw-normal text-center text-left">Pria: 150 x 145 cm</h5>
						<h5 class="fw-normal text-center text-left">Wanita: 300 x 145 cm</h5>
						<h5 class="fw-normal text-center text-md-left">Child: sesuai jenis kelamin</h5>
					</div>
				</div>
			</div>

			<!-- <div class="container">
				<p class="text-center">
					Dapatkan perlengkapan umrah berkualitas tinggi untuk mempersiapkan perjalanan suci Anda
					ke Tanah Suci. Kami menyediakan berbagai perlengkapan yang diperlukan untuk memenuhi
					kebutuhan Anda selama melaksanakan ibadah umrah. Dengan perlengkapan yang tepat, Anda
					dapat menghadapi perjalanan Anda dengan percaya diri dan kenyamanan.
				</p>
			</div> -->
		</div>
	</div>
	<div class="container pt-10">
		<div class="p-0">
			<div class="container box-shadow bg-white">
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

		<div class="box-shadow p-0 bg-white">
			<div class="container p-10">
				{#if status === 'wanita'}
					<!-- content here -->
					<div class="row" transition:fade>
						<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 pb-8">
							<div class="card-gallery">
								<img src="/perlengkapan/BajuCewe-1.JPG" class="card-img-top top" alt="..." />
								<img src="/perlengkapan/BajuCewe-2.JPG" class="card-img-top bottom" alt="..." />
							</div>
							<div class="d-flex justify-content-center align-items-center p-0 m-0">
								<h6 class="text-center clr-primary-300 p-0 m-0">Kain Seragam Eksklusif</h6>
							</div>
						</div>

						<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 pb-8">
							<div class="card-gallery">
								<img src="/perlengkapan/Mukena-1.JPG" class="card-img-top top" alt="..." />
								<img src="/perlengkapan/Mukena-2.JPG" class="card-img-top bottom" alt="..." />
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
								<img src="/perlengkapan/KainCowo-1.JPG" class="card-img-top top" alt="..." />
								<img src="/perlengkapan/KainCowo-2.jpg" class="card-img-top bottom" alt="..." />
							</div>
							<div class="d-flex justify-content-center align-items-center p-0 m-0">
								<h6 class="text-center clr-primary-300 p-0 m-0">Kain Seragam Eksklusif</h6>
							</div>
						</div>

						<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 pb-8">
							<div class="card-gallery">
								<img src="/perlengkapan/BajuCowo-1.JPG" class="card-img-top top" alt="..." />
								<img src="/perlengkapan/BajuCowo-2.JPG" class="card-img-top bottom" alt="..." />
							</div>
							<div class="d-flex justify-content-center align-items-center p-0 m-0">
								<h6 class="text-center clr-primary-300 p-0 m-0">Kain Ihram Eksklusif</h6>
							</div>
						</div>
					</div>
				{/if}
			</div>
		</div>

		<div class="p-0 mt-20">
			<div class="container box-shadow bg-white">
				<div class="row">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div class="col-12 p-0">
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<div
							on:click={() => toggleStatus('wanita')}
							class="d-flex justify-content-center align-items-center button-gender p-4 cursor-pointer active"
						>
							Perlengkapan Lainnya
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="box-shadow p-0 bg-white">
			<div class="container p-10">
				<div class="row">
					<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 pb-8">
						<div class="card-gallery">
							<img src="/perlengkapan/Banner-1.JPG" class="card-img-top top" alt="..." />
							<img src="/perlengkapan/Banner-2.JPG" class="card-img-top bottom" alt="..." />
						</div>
						<div class="d-flex justify-content-center align-items-center p-0 m-0">
							<h6 class="text-center clr-primary-300 p-0 m-0">Syal Rajut</h6>
						</div>
					</div>
					<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 pb-8">
						<div class="card-gallery">
							<img src="/perlengkapan/Bantal-1.JPG" class="card-img-top top" alt="..." />
							<img src="/perlengkapan/Bantal-2.JPG" class="card-img-top bottom" alt="..." />
						</div>
						<div class="d-flex justify-content-center align-items-center p-0 m-0">
							<h6 class="text-center clr-primary-300 p-0 m-0">Bantal Leher</h6>
						</div>
					</div>
					<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 pb-8">
						<div class="card-gallery">
							<img src="/perlengkapan/Kalender-1.JPG" class="card-img-top top" alt="..." />
							<img src="/perlengkapan/Kalender-2.JPG" class="card-img-top bottom" alt="..." />
						</div>
						<div class="d-flex justify-content-center align-items-center p-0 m-0">
							<h6 class="text-center clr-primary-300 p-0 m-0">Guide Book</h6>
						</div>
					</div>
					<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 pb-8">
						<div class="card-gallery">
							<img src="/perlengkapan/Koper-1.JPG" class="card-img-top top" alt="..." />
							<img src="/perlengkapan/Koper-2.JPG" class="card-img-top bottom" alt="..." />
						</div>
						<div class="d-flex justify-content-center align-items-center p-0 m-0">
							<h6 class="text-center clr-primary-300 p-0 m-0">Koper Bagasi & Cabin</h6>
						</div>
					</div>
					<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 pb-8">
						<div class="card-gallery">
							<img src="/perlengkapan/Ransel-1.JPG" class="card-img-top top" alt="..." />
							<img src="/perlengkapan/Ransel-2.JPG" class="card-img-top bottom" alt="..." />
						</div>
						<div class="d-flex justify-content-center align-items-center p-0 m-0">
							<h6 class="text-center clr-primary-300 p-0 m-0">Tas Ransel Exclusive</h6>
						</div>
					</div>
					<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 pb-8">
						<div class="card-gallery">
							<img src="/perlengkapan/Serut-1.JPG" class="card-img-top top" alt="..." />
							<img src="/perlengkapan/Serut-2.JPG" class="card-img-top bottom" alt="..." />
						</div>
						<div class="d-flex justify-content-center align-items-center p-0 m-0">
							<h6 class="text-center clr-primary-300 p-0 m-0">Tas Serut Exclusive</h6>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
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
</style>
