import TopAiring from '@/components/pages/anime/home/TopAiring'
import React from 'react'

export default function page() {
    return (
        <main>
            <TopAiring />
        
        </main>
    )
}


// import { Axios } from "@/lib/Axios";
// import React from "react";
// import { envServer } from "@/utils/env/envServer";
// import Image from "next/image";
// import Link from "next/link";
// export default async function Anime() {
//     try {
//         const { data } = await Axios.get(
//             "anime/ranking?ranking_type=all&limit=20&offset=0",
//             {
//                 headers: {
//                     "X-MAL-CLIENT-ID": envServer.MAL_CLIENT_ID,
//                 },
//             }
//         );
//         // console.log(data.data[0].node);
//         return (
//             <div>
//                 <Link target="_blank" className="hover:text-indigo-600" href="/redirect">Login to MAL</Link>
//                 <ul>
//                     {data.data.map(({ node }: any) => (
//                         <li key={node.id}>
//                             <Link href={`/anime/${node.id}`}>
//                                 <Image
//                                     alt={node.title}
//                                     width={200}
//                                     height={200}
//                                     src={node.main_picture.large}
//                                 />
//                                 <h1>{node.title}</h1>
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         );
//     } catch (error) {
//         console.log(error);
//         return <div>{JSON.stringify(error)}</div>;
//     }
// }
