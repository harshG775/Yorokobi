"use client";
import { CMTAxios } from "@/lib/Axios";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

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

export default function Anime() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["topAiringAnime"],
        queryFn: () => CMTAxios.get("/anime/gogoanime/top-airing"),
    });
    console.log(data);
    return (
        <main>
            <h1></h1>
            <ul>
                {data?.data?.results.map((anime: animeItemsType) => (
                    <li key={anime.id}>
                        <Link href={`/anime/${anime.id}`}>
                            <img
                                src={anime.image}
                                alt={anime.title}
                                width={200}
                                height={200}
                            />
                            <h1>{anime.title}</h1>
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}
