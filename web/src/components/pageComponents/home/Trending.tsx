"use client";

import { useGetTrending } from "@/services/GraphQL/aniList";
import Image from "next/image";
import Link from "next/link";

export default function Trending() {
    const { data, status } = useGetTrending();
    if (status === "pending") {
        return <div>Loading...</div>;
    }
    if (status === "error") {
        return <div>Error</div>;
    }
    return (
        <section>
            <ul className="container mx-auto grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))]">
                {data?.Page?.media?.map((episode) => (
                    <li key={episode.id}>
                        <Link href={`/info/${episode.id}`}
                        className="grid grid-rows-[4fr_1fr]"
                        >
                            <Image width={180} height={200} src={episode.coverImage.medium} alt={episode.title.romaji} />
                            <h4 className="line-clamp-1">{episode.title.romaji}</h4>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
