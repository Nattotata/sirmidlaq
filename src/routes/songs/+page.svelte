<script lang="ts">
	import * as config from '$lib/config';
	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<ul class="songs">
		{#each data.songs as song}
			<li class="song">
				<a href={`songs/${song.slug}`} class="title">{song.title}</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	.songs {
		display: grid;
		gap: 2rem;
	}

	.song {
		max-inline-size: var(--size-content-3);
    }
    .song:hover{
		animation:  var(--animation-fade-out-bloom);
        animation-duration: 50s;

    }

	.song:not(:last-child) {
		border-bottom: 1px solid var(--border);
		padding-bottom: var(--size-7);
	}

	.title {
		font-size: var(--font--size-fluid-3);
		text-transform: capitalize;
		color: var(--text-1);
	}
	.title:hover {
		color: var(--text-2);
		text-decoration: none;
	}
</style>
