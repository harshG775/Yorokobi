"use client";
import { AL } from "@/services/anilist/axios.anilist";
import { useEffect } from "react";

var query = `
    query {
        Page(page: 1, perPage: 20) {
            media(sort: TRENDING_DESC, type: ANIME) {
                id
                title {
                    romaji
                    english
                    native
                }
                coverImage {
                    large
                }
                averageScore
            }
        }
    }
`;


export default function TestPage() {
    useEffect(() => {
        async function AnimeInfoPage() {
            try {
                const resp = await AL.post("", {
                        query: query,
                });
                console.log(resp);
            } catch (error) {
                console.log(error);
            }
        }
        AnimeInfoPage()
    },[])
    return (
        <main>Test</main>
    );
}