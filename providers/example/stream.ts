import { Stream, ProviderContext } from "../types";
export const getStream = async ({
link,
type,
signal,
providerContext,
isDownload,
}: {
link: string;
type: string;
signal?: AbortSignal;
providerContext: ProviderContext;
isDownload?: boolean;
}): Promise<Stream[]> => {
return [
{
server: "Test Server",
link: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
type: "m3u8",
quality: "1080p",
},
];
};
