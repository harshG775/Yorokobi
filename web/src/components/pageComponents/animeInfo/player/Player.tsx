"use client";
import { EpisodesInfoType } from "@/types/GogoAnimeTypes";
import Episodes from "./Episodes";
import { useState } from "react";
import Video from "./Video";

type PlayerProps = {
    episodes: EpisodesInfoType[];
}
export default function Player({ episodes }: PlayerProps) {
    const [currentEpisode, setCurrentEpisode] = useState(episodes[0].id);
    return (
        <div>
            <div className="grid grid-cols-[3fr_1fr]">
                <Video episode={currentEpisode}/>
                <Episodes episodes={episodes} currentEpisode={currentEpisode} setCurrentEpisode={setCurrentEpisode}/>
            </div>
        </div>
    );
}