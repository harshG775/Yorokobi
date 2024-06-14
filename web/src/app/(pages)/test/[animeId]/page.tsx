"use client";
import { useGetTrending } from "@/services/GraphQL/queries";

import Image from "next/image";
import Link from "next/link";

export default function TestPage() {
    const { data, status } = useGetTrending();

    return (
        <main>
            {status === "pending" && <div>Loading...</div>}
            {status === "error" && <div>Error</div>}
            {status === "success" && (
                <ul className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
                    {data.Page.media.map((m) => (
                        <li key={m.id}>
                            <Link href={`/info/${m.id}`}>
                                <Image
                                    src={m.coverImage.medium}
                                    alt={m.title.romaji}
                                    width={100}
                                    height={100}
                                />
                                <h4 className="line-clamp-1">
                                    {m.title.romaji}
                                </h4>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </main>
    );
}
