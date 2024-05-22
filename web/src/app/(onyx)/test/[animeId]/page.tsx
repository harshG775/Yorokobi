"use client";
import { getInfoById, getTrending } from "@/services/GraphQL/anilist/getInfoById";
import { useEffect } from "react";



export default function TestPage() {
    useEffect(() => {
        async function AnimeInfoPage() {
            try {
                // const resp = await getTrending()
                const resp = await getInfoById(166240)
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