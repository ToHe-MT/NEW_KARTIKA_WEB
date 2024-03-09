<script>
	import { page } from '$app/stores';
</script>

<div class="section-space--sm bg-primary-5p">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-10 col-xl-6">
				<div class="text-center">
					<img src="/assets/img/error-img.png" alt="404 code" class="img-fluid" />
					<h2 class="mt-10 mb-5">Oops! Halaman Tidak Ditemukan</h2>
					<p class="mb-8">
						{$page.error.message}
					</p>
					<a
						href="/"
						class="link d-inline-flex align-items-center gap-2 py-3 px-6 rounded-pill bg-primary-300 clr-neutral-0 :bg-primary-400 :clr-neutral-0 fw-semibold"
					>
						<span class="d-inline-block"> Kembali ke halaman utama </span>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
