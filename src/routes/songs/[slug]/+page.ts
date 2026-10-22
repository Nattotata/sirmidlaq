import { error } from '@sveltejs/kit';

const modules = import.meta.glob('/src/songbook/**/*.md', { eager: true });

export async function load({ params }) {
	const matchEntry = Object.entries(modules).find(([path]) => {
		const fileSlug = path.split('/').at(-1)?.replace('.md', '');
		return fileSlug === params.slug;
	});

	if (!matchEntry) {
		throw error(404, `Could not find ${params.slug}`);
	}

	const [, file] = matchEntry;
	const song = file as any;

	return {
		content: song.default,
		meta: song.metadata
	};
}
