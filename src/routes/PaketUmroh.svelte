<script>
	import { page } from '$app/stores';
	import PaketItem from './PaketItem.svelte';

	export let data;
	let filteredData = data
	console.log(data);
	function filterData(model){
		if(model === ""){
			filteredData=data
		} else {
			filteredData = data.filter(item => item.level_paket === model);
		}
	}
</script>

<!-- Featured Property  -->
<section class="section-space featured-property-section" id="paketumroh">
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
							<span class="h5 lh-1 m-0 clr-primary-400 fw-semibold"> Paket Umroh </span>
						</span>
						<h2 class="mt-4 mb-6">Paket Umroh Bervariasi</h2>
						<p class="mb-0">
							Pilih paket yang sesuai dengan kebutuhan Anda. Kartikamas menawarkan berbagai variasi
							mulai dari paket regular, regular plus, hingga paket gold.
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
							href="#"
							class="featured-tab link fw-semibold clr-primary-400 d-inline-block py-3 px-6 bg-primary-50 :bg-primary-300 :clr-neutral-0 rounded-pill active"
							data-bs-toggle="list"
							on:click={()=>filterData("")}
						>
							Semua Paket
						</a>
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a
							href=""
							class="featured-tab link fw-semibold clr-primary-400 d-inline-block py-3 px-6 bg-primary-50 :bg-primary-300 :clr-neutral-0 rounded-pill"
							data-bs-toggle="list"
							on:click={()=>filterData("reguler")}
						>
							Reguler
						</a>
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a
							href=""
							class="featured-tab link fw-semibold clr-primary-400 d-inline-block py-3 px-6 bg-primary-50 :bg-primary-300 :clr-neutral-0 rounded-pill"
							data-bs-toggle="list"
							on:click={()=>filterData("vip")}
						>
							VIP
						</a>
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a
							href=""
							class="featured-tab link fw-semibold clr-primary-400 d-inline-block py-3 px-6 bg-primary-50 :bg-primary-300 :clr-neutral-0 rounded-pill"
							data-bs-toggle="list"
							on:click={()=>filterData("vvip")}
						>
							VVIP
						</a>
					</div>
					<a
						href="/paket/umroh"
						class="btn btn-outline-primary py-3 px-6 rounded-pill d-inline-flex align-items-center gap-1 fw-semibold"
					>
						Lihat semua paket <span class="material-symbols-outlined mat-icon lh-1">
							trending_flat
						</span>
					</a>
				</div>
				<div class="tab-content">
					<div class="tab-pane fade show active" id="new-york">
						<div class="row g-4">
							<PaketItem data={filteredData} page={page}/>
						</div>
					</div>
				</div>
				<div class="text-center">
					<a
						href="/paket/umroh"
						class="link d-inline-flex align-items-center gap-2 py-3 px-6 rounded-pill bg-primary-300 clr-neutral-0 :bg-primary-400 :clr-neutral-0 fw-semibold mt-10"
					>
						<span class="material-symbols-outlined"> hourglass_top </span>
						<span class="d-inline-block"> Show More </span>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- /Featured Property  -->
