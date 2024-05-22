"use client";
import axios from "axios";
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
    const handleFetchImage = async ()=>{
        const resp = await axios.get(`https://cdn.myanimelist.net/images/anime/${currentSeason}/${currentEpisode}.jpg`);
        console.log(resp);
    }

    return (
        <div>
            <div>iframe : {id}</div>
            <div onClick={handleFetchImage}>Episode</div>
        </div>
    );
}
