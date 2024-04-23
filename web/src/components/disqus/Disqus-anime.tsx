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
            shortname={"my-anime-list"}
            config={{
                url: `http://localhost:3000/anime/${id}/${episode}`,
                identifier: id,
                title: title,
                language: "en_US",
            }}
        />
    );
}
