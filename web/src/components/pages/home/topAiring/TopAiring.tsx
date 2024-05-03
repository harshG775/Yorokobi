"use client";
import { CMTAxios } from "@/lib/Axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import Cards,{ CardPropsType } from "./cards/Cards";

type animeType = CardPropsType & {
    hasNextPage: boolean;
    currentPage: number;
};
type responseType = {
    data: animeType;
};

export default function TopAiring() {
    
    const { data, status, error,fetchNextPage,isFetchingNextPage } = useInfiniteQuery<responseType>({
        queryKey: ["topAiringAnime"],
        queryFn: ({pageParam}) => CMTAxios.get("/anime/gogoanime/top-airing",{
            params: {
                page: pageParam
            }
        }),
        initialPageParam: 1,
        getNextPageParam: (
            lastPage: responseType,
            allPages: responseType[],
            lastPageParam: any
        ) => {
            return lastPage.data.hasNextPage ? lastPageParam + 1 : undefined;
        },
    });
    return (
        <div>
            
            {status === "pending" ? (
                <svg className="animate-spin h-5 w-5 mr-3 border-2 border-t-transparent rounded-full border-white"></svg>
            ) : status === "error" ? (
                <p>Error: {error.message}</p>
            ) : (
                <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2 p-2">
                    {data?.pages.map(({data}: responseType) => {
                        return (
                            <Cards key={data.currentPage} results={data.results} />
                        );
                    })}
                </ul>
            )}
            <div className="p-4">
                {isFetchingNextPage ? <svg className="animate-spin h-5 w-5 mr-3 border-2 border-t-transparent rounded-full border-white"></svg> : null}
                <button onClick={()=>fetchNextPage()}>nextpage</button>
            </div>
            
        </div>
    );
}
