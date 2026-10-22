import type { Song } from '$lib/types';

// should list all released, and unreleased songs

export const load = async ({ fetch }: { fetch: any }) => {
	const response = await fetch('../api/songs?path=sirMidlaq');
	const songs: Song[] = await response.json();
	return { songs };
};
