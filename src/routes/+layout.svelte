<script lang="ts">
	import Footer from './footer.svelte';
	import Header from './header.svelte';
	import PageTransition from './transition.svelte';
	export let data;

	import 'open-props/style';
	import 'open-props/normalize';
	import 'open-props/buttons';

	import '../app.css';
</script>

<div class="layout">
	<!-- Header -->
	<Header />

	<main>
		<PageTransition url={data.url}>
			<!-- Black hole for other content -->
			<slot />
		</PageTransition>
	</main>

	<!-- Footer -->
	<Footer />
</div>

<style>
	.layout {
		height: 100%;
		max-inline-size: 1440px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-7);
	}

	main {
		padding-block: var(--size-2);
	}
	@media (min-width: 1440px) {
		.layout {
			padding-inline: 0;
		}
	}
</style>
