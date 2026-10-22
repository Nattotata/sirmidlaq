import type { Song } from '$lib/types';

export const load = async ({ fetch }: { fetch: any }) => {
	const response = await fetch('../api/songs?path=personal');
	const songs: Song[] = await response.json();
	return { songs };
};
