"use client";
import { DiscussionEmbed } from "disqus-react";
type DisqusAnimeProps = {
        id: string;
        title: string;
};
export function DisqusAnime({ id, title } : DisqusAnimeProps) {
    return (
        <DiscussionEmbed
            shortname="example"
            config={{
                url: `/anime/${id}`,
                identifier: id,
                title: title,
                language: "en_US",
            }}
        />
    );
}
