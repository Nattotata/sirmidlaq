import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const song = await import(`../../../songbook/${params.slug}.md`);
		// to solve later
		// currently, i use URL parameter to toggle all songs / published songs
		// should do it in svelte store and localstorage
		//		if (song.metadata.published !== true) {
		//			throw new Error('unpublished');
		//		}
		return {
			content: song.default,
			meta: song.metadata
		};
	} catch (e) {
		console.info(e);
		//		if (e.message === 'unpublished') {
		//			throw error(401, 'Sorry, this content is not published yet.');
		//		}
		throw error(404, `Could not find ${params.slug}`);
	}
}
