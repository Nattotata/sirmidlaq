import { json } from '@sveltejs/kit';
import type { Song } from '$lib/types';

const slugify = (path: string) => path.split('/').at(-1)?.replace('.md', '');

const getSongs = async () => {
	let songs: Set<Song> = new Set();
	const paths = import.meta.glob('/src/songbook/*.md', { eager: true });

	for (const path in paths) {
		const file: any = paths[path];
		const slug = slugify(path);

		if (!file || typeof file !== 'object' || 'metadata' in file === false || !slug) {
			return;
		}

		const metadata = file.metadata as Omit<Song, 'slug'>;
		const song = { ...metadata, slug } satisfies Song;
		songs.add(song);
	}
	return songs;
};

export async function GET() {
	const songs = (await getSongs()) || new Set();
	return json([...songs]);
}
