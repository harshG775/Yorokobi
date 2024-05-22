"use client";

import { useGetRecentEpisodes } from "@/services/queries";
import Image from "next/image";
import Link from "next/link";

export default function RecentEpisodes() {
    const { data, status } = useGetRecentEpisodes();
    if (status === "pending") {
        return <div>Loading...</div>;
    }
    if (status === "error") {
        return <div>Error</div>;
    }
    return (
        <section>
            <ul>
                {data?.results?.map((episode) => (
                    <li key={episode.id}>
                        <Link href={`/anime/${episode.id}`}
                        className="flex gap-2 p-2"
                        >
                            <Image width={80} height={80} src={episode.image} alt={episode.title} />
                            {episode.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
