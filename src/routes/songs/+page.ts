import type { Song } from "$lib/types"

export const load = async ({ fetch }: { fetch: any }) => {
    const response = await fetch('../api/songs')
    const songs: Song[] = await response.json()
    return { songs }
}
