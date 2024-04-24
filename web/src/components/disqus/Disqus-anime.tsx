"use client";
import { DiscussionEmbed } from "disqus-react";
type DisqusAnimeProps = {
        id: string;
        episode: string;
        title: string;
};
export function DisqusAnime({ id, title ,episode} : DisqusAnimeProps) {
    return (
        <DiscussionEmbed
            shortname={"yorokobi"}
            config={{
                url: `https://yorokobi.vercel.app/anime/${id}/${episode}`,
                identifier: id,
                title: title,
                language: "en_US",
            }}
        />
    );
}
