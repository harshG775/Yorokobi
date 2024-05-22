import { useQuery } from "@tanstack/react-query";
import { getAvailableServers, getInfo, getRecentEpisodes, getTopAiring } from "./gogoAnime/api";




export const useGetRecentEpisodes = () => {
    return useQuery({
        queryKey: ["recentEpisodes"],
        queryFn: getRecentEpisodes,
    });
};
export const useGetTopAiring = () => {
    return useQuery({
        queryKey: ["topAiring"],
        queryFn: getTopAiring,
    });
};

export const useGetInfo = (id: string) => {
    return useQuery({
        queryKey: [`info-${id}`],
        queryFn: () => getInfo(id),
    });
};


export const useGetAvailableServers = (episodeId: string) => {
    return useQuery({
        queryKey: [`availableServers-${episodeId}`],
        queryFn: () => getAvailableServers(episodeId),
    });
};
