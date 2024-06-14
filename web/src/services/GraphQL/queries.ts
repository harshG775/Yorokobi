import { useQuery } from "@tanstack/react-query";
import { getTrending } from "./anilist/Axios_aniList";

export const useGetTrending = () => {
    return useQuery({
        queryKey: ["TRENDING_DESC"],
        queryFn: getTrending,
    });
};
