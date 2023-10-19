<script lang="ts">
	export let data: any;
	let printChords = true;
	import { Printer } from 'lucide-svelte';
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<!-- Title -->
	<hgroup>
		<h1>{data.meta.title}</h1>
	</hgroup>

	<div class="buttonz">
		<button on:click={() => (printChords = !printChords)}>
			{printChords ? 'Hide chords' : 'Show chords'}
		</button>
		<button id="buttonPrint" on:click={() => window.print()}>
			<Printer />
		</button>
	</div>

	<!-- Post -->
	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>

{#if printChords === false}
	<style>
		.language-chords {
			display: none;
		}
		.chord {
			display: none;
		}
		p {
			margin-top: 0;
		}
	</style>
{:else}
	<style>
		.prose p:not(:is(h2, h3, h4, h5, h6) + p) {
			margin-top: var(--size-3);
		}
		.chord {
			color: var(--text-chord);
			position: absolute;
			top: -1em;
			font-size: var(--font-size-1);
		}
	</style>
{/if}

<style>
	article {
		max-inline-size: var(--size-content-3);
		margin-inline: auto;
	}
	h1 {
		text-transform: capitalize;
	}
	.buttonz {
		display: flex;
		justify-content: center;
	}
	.buttonz button {
		--_highlight-size: 0;
		margin-top: 1em;
		margin-right: 2em;
		border: 0px solid var(--border);
	}

	@media print {
		.buttonz {
			display: none;
		}
	}
</style>
