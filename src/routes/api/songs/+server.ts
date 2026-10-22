import { json } from '@sveltejs/kit';
import type { Song } from '$lib/types';

const slugify = (path: string) => path.split('/').at(-1)?.replace('.md', '');

const getSongs = async (subpath: string) => {
	const songs: Song[] = [];
	const normalizedPath = subpath.replace(/^\/+|\/+$/g, '');
	const paths = import.meta.glob('/src/songbook/**/*.md', { eager: true });

	for (const path in paths) {
		if (normalizedPath && !path.includes(`/src/songbook/${normalizedPath}/`)) {
			continue;
		}
		if (!normalizedPath && path.split('/').length !== 4) {
			continue;
		}

		const file: any = paths[path];
		const slug = slugify(path);

		if (!file || typeof file !== 'object' || 'metadata' in file === false || !slug) {
			continue;
		}

		const metadata = file.metadata as Omit<Song, 'slug'>;
		const song = { ...metadata, slug } satisfies Song;
		songs.push(song);
	}
	return songs;
};

export async function GET({ url }) {
	const subpath = url.searchParams.get('path') || '';
	const songs = await getSongs(subpath);
	return json(songs);
}
