// import axios from "axios";
// import Image from "next/image";
// import React from "react";

import Overview from "@/components/pages/anime/info/Overview/Index";
import Player from "@/components/pages/anime/info/Player/Index";
import { Axios } from "@/lib/Axios";
import { envServer } from "@/utils/env/envServer";

// type props = {
//     params: { id: string };
// };
// export default async function page({ params }: props) {
//     try {
//         const { data } = await axios.get(
//             `https://api.jikan.moe/v4/anime/${params.id}`
//         );
//         console.log(data.data);
//         return (
//             <div>
//                 <Image
//                     alt={data.data.title}
//                     width={200}
//                     height={200}
//                     src={data.data.images.jpg.large_image_url}
//                 />
//                 <h4 className="font-bold">{data.data.title}</h4>
//                 <p>{data.data.synopsis}</p>
//             </div>
//         );
//     } catch (error: any) {
//         return (
//             <div className="grid place-content-center min-h-96">
//                 {error?.response?.data?.message}
//             </div>
//         );
//     }
// }


function Comments() {
    return <div>Comments</div>;
}

function Recommended() {
    return <div>Recommended</div>;
}

type AnimeOverviewProps = {
    params: { id: string };
};
export default async function page({ params }: AnimeOverviewProps) {
    const { data } = await Axios.get(`anime/${params.id}?fields=id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics,country,time`, {
        headers: {
            "X-MAL-CLIENT-ID": envServer.MAL_CLIENT_ID,
        },
    });
    console.log(data.recommendations);
    return (
        <main className="max-w-8xl w-[calc(100vw-2rem)] space-y-2 mx-auto bg-neutral-100">
            <div className="grid grid-cols-[3fr,1fr]">
                <Player data={data} />
                <Overview data={data}/>
            </div>
            <div className="grid grid-cols-[3fr,1fr]">
                <Comments />
                <Recommended />
            </div>
        </main>
    );
}
