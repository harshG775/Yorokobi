"use client";

import { useGetInfo } from "@/services/queries";

export default function AnimeInfo({ animeId }: { animeId: string }) {
    const { data, status } = useGetInfo(animeId);
    if (status === "pending") {
        return <div>Pending...</div>;
    }
    if (status === "error") {
        return <div>Error</div>;
    }
    return <div>{JSON.stringify(data.title, null, 2)}</div>;
}
