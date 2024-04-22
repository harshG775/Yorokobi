"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type PlayerProps = {
    data: {
        id: number;
        related_anime: {
            node: {
                id: number;
                title: string;
                main_picture: {
                    large: string;
                    medium: string;
                    small: string;
                };
            };
            relation_type: string;
            relation_type_formatted: string;
        }[];
    };
};
export default function Player({ data }: PlayerProps) {
    const { id, related_anime } = data;
    const [currentSeason, setCurrentSeason] = useState(1);
    const [currentEpisode, setCurrentEpisode] = useState(1);
    console.log(data);
    return (
        <div>
            <div>iframe : {id}</div>
            <div className="grid gap-4 grid-rows-1">
                {related_anime.map(({ node, relation_type }) => {
                    if (
                        relation_type === "prequel" ||
                        relation_type === "sequel"
                    ) {
                        return (
                            <Link
                                href={`/anime/${node.id}`}
                                className={`mt-4 text-blue-500`}
                                key={node.id}
                            >
                                <Image
                                    src={node.main_picture.large}
                                    alt={""}
                                    width={100}
                                    height={100}
                                />
                                {node.title}
                            </Link>
                        );
                    }
                })}
            </div>
            <div>Episode</div>
        </div>
    );
}
