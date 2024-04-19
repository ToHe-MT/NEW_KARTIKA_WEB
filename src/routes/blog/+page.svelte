<script>
	export let data;
	console.log(data);

	import { goto } from '$app/navigation';
    let totalData=1
    let destinasi = "Bali"
    let limit = 2
    let currentPage = 1

    const changePage = async()  => {
		try {
			await goto (`paket-wisata?page=${currentPage}&hari=${durasi}&destinasi=${destinasi}`,{ replaceState: true, invalidateAll: true });
		} catch (error) {
			console.log(error);
		}
	};
</script>

<div class="section-space--sm bg-primary-5p">
	<div class="container-xl">
        <div class="col-12 px-10">
            <div class="bg-neutral-0 rounded-2 py-3 px-6 box-shadow">
                {#if data.blogs.length}
                    <ul class="list list-row align-items-center flex-wrap gap-3">
                        <!-- content here -->
                        <li class="d-block d-lg-block">
                            <p class="mb-0 clr-neutral-500">
                                Menampilkan {data.blogs.length} dari {totalData} paket wisata
                            </p>
                        </li>
                        <li class="flex-grow-1"></li>
                        <li class="d-none d-lg-flex align-items-center">
                            <p class="mb-0 clr-neutral-500 flex-grow-1">Urutkan Berdasarkan :</p>
                            <select
                                class="form-select py-0 border-0 w-auto"
                                name="sort_by"
                                on:change={() => {
                                    destinasi = event.target.value;
                                    changePage();
                                }}
                            >
                                <option value="all" selected={destinasi === ''}>Semua</option>
                                <option value="Terbaru" selected={destinasi === 'Lembang - Bandung'}
                                    >Tanggal Terbaru</option
                                >
                            </select>
                        </li>
                    </ul>
                {:else}
                    <ul class="list list-row align-items-center flex-wrap gap-3">
                        <!-- content here -->
                        <li class="d-none d-xl-block">
                            <p class="mb-0 clr-neutral-500">Paket dengan durasi {durasi} hari tidak tersedia</p>
                        </li>
                    </ul>
                {/if}
            </div>
        </div>
		<div class="row px-10">
			{#each data.blogs as item}
				<div class="col-lg-6 py-4 px-4">
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div class="property-card CARD" style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
						<div class="property-card__head" style="padding: 0px; border-radius: 10px 10px 0 0;">
							<div class="swiper property-card-slider">
								<div class="swiper-wrapper">
									{#each item.images.slice(0, 1) as image}
										<div class="swiper-slide">
											<div class="property-card__img2" style="border-radius: 10px 10px 0 0;">
												<img
													src="{import.meta.env
														.VITE_S3_PUBLIC_URL}/schedule/66e59ffb-129c-4b9c-b760-d454c7333e79.jpeg"
													alt="foto hotel"
													class="img-fluid w-100"
													style="border-radius: 10px 10px 0 0; max-height:400px; object-fit:cover"
												/>
											</div>
										</div>
									{/each}
								</div>
							</div>
						</div>
						<div class="property-card__body">
							<div class="d-flex justify-content-between mb-2">
								<a
									href="/blog/{item.slug}"
									class="link d-block flex-grow-1 clr-neutral-700 :clr-primary-300 fs-20 fw-medium"
								>
									{item.title}
								</a>
							</div>
							<div class="d-flex justify-content-between mb-2">
								Created at {item.created_at}
							</div>

							<!-- <ul class="list list-row row g-3">
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
										<span class="material-symbols-rounded mat-icon fw-200 clr-secondary-500">
											wifi
										</span>
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
							</ul> -->
						</div>
						<div class="property-card__body py-0">
							<div class="hr-dashed"></div>
						</div>
						<div class="property-card__body">
							<div class="d-flex flex-wrap justify-content-between align-items-center">
								<div>
									<span class="badge clr-white bg-primary-300 fs-6">Danger</span>
									<span class="badge text-bg-danger fs-6">Danger</span>
									<span class="badge text-bg-danger fs-6">Danger</span>
								</div>
								<a
									href="/paket-wisata/{item.slug}"
									class="btn btn-outline-primary py-3 px-6 rounded-pill d-inline-flex align-items-center gap-1 fw-semibold"
								>
									Detail
								</a>
							</div>
						</div>
					</div>
				</div>
			{/each}
            
		</div>
        <div class="col-12">
            <nav>
                <ul class="pagination gap-3 justify-content-center">
                    {#each Array.from({ length: Math.ceil(totalData / limit) }, (_, i) => i + 1) as page}
                        {#if page >= currentPage - 2 && page <= currentPage + 2}
                            <li class="page-item">
                                <a
                                    class="{currentPage === page
                                        ? 'clr-neutral-0 :clr-neutral-0 active-bg'
                                        : ''} page-link p-0 w-10 h-10 d-grid place-content-center lh-1 rounded-circle border border-primary-300 clr-primary-300"
                                    on:click={() => {
                                        currentPage = page;
                                        changePage(page);
                                    }}
                                    href="#">{page}</a
                                >
                            </li>
                        {/if}
                    {/each}
                </ul>
            </nav>
        </div>
	</div>
</div>
