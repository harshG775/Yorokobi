"use client";
import { CMTAxios } from "@/lib/Axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
// import Link from "next/link";

type animeItemsType = {
    id: string;
    title: string;
    image: string;
    url: string;
    genres: string[];
    episodeId: string;
    episodeNumber: number;
};
type animeType = {
    hasNextPage: boolean;
    currentPage: number;
    results: animeItemsType[];
};
type responseType = {
    data: animeType;
};

export default function TopAiring() {
    
    const { data, status, error,fetchNextPage,isFetchingNextPage } = useInfiniteQuery({
        queryKey: ["topAiringAnime"],
        queryFn: ({pageParam}) => CMTAxios.get("/anime/gogoanime/top-airing",{
            params: {
                page: pageParam
            }
        }),
        initialPageParam: 1,
        getNextPageParam: (
            lastPage: any,
            allPages: any,
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
                <div>
                    {data?.pages.map((page: responseType, i: number) => {
                        return (
                            <ul key={i} className="border border-cyan-600">
                                {page.data.results.map(
                                    (item: animeItemsType, i) => (
                                        <li key={i}>
                                            <Link href={`/anime/${item.id}`}>
                                                <Image width={100} height={200} src={item.image} alt="" className="w-20"/>
                                                <div>{item.title}</div>
                                            </Link>
                                        </li>
                                    )
                                )}
                            </ul>
                        );
                    })}
                </div>
            )}
            <div className="p-4">
                {isFetchingNextPage ? <svg className="animate-spin h-5 w-5 mr-3 border-2 border-t-transparent rounded-full border-white"></svg> : null}
                <button onClick={fetchNextPage}>nextpage</button>
            </div>
            
        </div>
    );
}
