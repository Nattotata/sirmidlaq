<script lang="ts">
	import * as config from '$lib/config';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import Goofy from '$lib/assets/sir_midlaq_ilustrace/goofy.jpg?format=webp&imagetools';
	import Sleep from '$lib/assets/sir_midlaq_ilustrace/sleep.jpg?format=webp&imagetools';
	import Faces from '$lib/assets/sir_midlaq_ilustrace/faces.jpg?format=webp&imagetools';
	import TheOnlyWay from '$lib/assets/sir_midlaq_ilustrace/the_only_way.jpg?format=webp&imagetools';
	import StuckInAnOasis from '$lib/assets/sir_midlaq_ilustrace/stuck_in_an_oasis.jpg?format=webp&imagetools';
	const imageArray = [Sleep, Faces, TheOnlyWay, StuckInAnOasis, Goofy];
	const getRandomImage = () => {
		const randomIndex = Math.floor(Math.random() * imageArray.length);
		return imageArray[randomIndex];
	};
	const currentImage = writable(getRandomImage());
	onMount(() => {
		currentImage.set(getRandomImage());
	});
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<div class="image-container">
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<img
			on:click={() => currentImage.set(getRandomImage())}
			on:keypress={() => currentImage.set(getRandomImage())}
			src={$currentImage}
			alt="song illustration"
		/>
	</div>
</section>

<style>
	.image-container {
		display: flex;
		justify-content: center;
		max-height: 80vh;
	}
	img {
		cursor: grab;
	}
</style>
