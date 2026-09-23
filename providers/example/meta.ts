import { Info, ProviderContext } from "../types";
export const getMeta = async ({
link,
providerContext,
}: {
link: string;
providerContext: ProviderContext;
}): Promise<Info> => {
return {
title: "Netflix Test Movie",
synopsis:
"A test movie used to verify the custom provider and streaming pipeline.",
image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
imdbId: "tt0000000",
type: "movie",
linkList: [
{
title: "Netflix Test Movie",
directLinks: [
{
link: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
title: "Play Test Movie",
type: "movie",
},
],
quality: "1080p",
},
],
};
};
