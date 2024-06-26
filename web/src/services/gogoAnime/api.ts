import {
    SearchResponseType,
    StreamingLinksResponseType,
    AvailableServersResponseType,
    RecentEpisodesResponseType,
    TopAiringResponseType,
    AnimeInfoResponseType,
} from "@/types/GogoAnimeTypes";
import { envClient } from "@/utils/env/env.client";
import axios from "axios";

const { NEXT_PUBLIC_CMT_BASEURL } = envClient;
export const CMT = axios.create({
    baseURL: `${NEXT_PUBLIC_CMT_BASEURL}/anime/gogoanime`,
    headers: {
        "Content-Type": "application/json",
    },
});

export async function getSearchResult(query: string, number: number) {
    const { data } = await CMT.get<SearchResponseType>(`/${query}?page=${number}`);
    return data;
}


export async function getRecentEpisodes() {
    const { data } = await CMT.get<RecentEpisodesResponseType>(`/recent-episodes`);
    return data;
}
export async function getTopAiring() {
    const { data } = await CMT.get<TopAiringResponseType>(`/top-airing`);
    return data;
}


export async function getInfo(id: string) {
    const { data } = await CMT.get<AnimeInfoResponseType>(`/info/${id}`);
    return data;
}


export async function getStreamingLinks( episodeId: string, serverName: "gogocdn" | "streamsb" | "vidstreaming" ) {
    const { data } = await CMT.get<StreamingLinksResponseType>(`/watch/${episodeId}?server=${serverName}`);
    return data;
}
export async function getAvailableServers(episodeId: string) {
    const { data } = await CMT.get<AvailableServersResponseType>(`/servers/${episodeId}`);
    return data;
}
