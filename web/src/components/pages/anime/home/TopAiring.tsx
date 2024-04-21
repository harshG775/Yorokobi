"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TopAiring() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState({});
    useEffect(() => {
        const handleFetch = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(
                    "https://api.jikan.moe/v4/top/anime"
                );
                setData(data);
            } catch (error: any) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        handleFetch();
    }, []);
    if (loading) {
        return (
            <div>
                loading
                <span className="animate-spin bg-blue-600"></span>
            </div>
        );
    }
    if (error) {
        console.log(error);
        return <div>Error</div>;
    }
    // console.log(data.data)
    return (
        <div>
            {data?.data?.map((anime) => (
                <div key={anime.mal_id}>
                    <Link href={`/anime/${anime.mal_id}`}>
                        <Image
                            alt={anime.title_english}
                            width={80}
                            height={100}
                            src={anime.images.jpg.large_image_url}
                        />
                        {anime.title_english}
                    </Link>
                </div>
            ))}
        </div>
    );
}
