"use client";

import SectionTitle from "../../_components/SectionTitle";
// import Card from "@/components/ui/cards/Card";
// import { useGetRecentEpisodes } from "@/services/gogoAnime/queries";

export default function RecentEpisodes() {
    // const { data, status } = useGetRecentEpisodes();
    // if (status === "pending") {
    //     return <div>Loading...</div>;
    // }
    // if (status === "error") {
    //     return <div>Error</div>;
    // }
    return (
        <section>
            <SectionTitle
                title="Recently Updated"
                titleRight={<div>options</div>}
            />
            <ul className=" grid gap-4 grid-cols-[repeat(auto-fit,_minmax(170px,_1fr))]">
                {/* {data?.results?.map((data) => (
                    <Card key={data.id} data={data} />
                ))} */}
            </ul>
        </section>
    );
}
