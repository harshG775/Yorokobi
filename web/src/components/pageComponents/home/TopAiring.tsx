"use client";

import { useGetTopAiring } from "@/services/queries";
import Image from "next/image";
import Link from "next/link";

export default function TopAiring() {
    const { data, status } = useGetTopAiring();
    if (status === "pending") {
        return <div>Loading...</div>;
    }
    if (status === "error") {
        return <div>Error</div>;
    }
    return (
        <section>
            <ul className="container mx-auto grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))]">
                {data?.results?.map((episode) => (
                    <li key={episode.id}>
                        <Link href={`/anime/${episode.id}`}
                        className="grid grid-rows-[4fr_1fr]"
                        >
                            <Image width={180} height={200} src={episode.image} alt={episode.title} />
                            <h4 className="line-clamp-1">{episode.title}</h4>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
