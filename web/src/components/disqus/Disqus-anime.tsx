"use client";
import { DiscussionEmbed, CommentCount } from "disqus-react";
type DisqusAnimeProps = {
    id: string;
    episode: string;
    title: string;
};
export function DisqusAnime({ id, title, episode }: DisqusAnimeProps) {
    const disqusConfig = {
        url: `https://yorokobi.vercel.app/anime/${id}?ep=${episode}`,
        identifier: id,
        title: `${title} -  Episode ${episode}`,
        language: "en_US",
    };
    return (
        <>
            <DiscussionEmbed shortname={"yorokobi"} config={disqusConfig} />
        </>
    );
}
