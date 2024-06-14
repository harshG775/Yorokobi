// import Player from "@/components/pageComponents/animeInfo/player/Player";
// import { getInfo, getSearchResult } from "@/services/gogoAnime/api";

// type AnimeInfoProps = { params: { animeId: string } };
// export default async function AnimeInfoPage({ params }: AnimeInfoProps) {
//     const { animeId } = params;
//     try {
//         if (!animeId) {
//             return <main>not found</main>;
//         }
//         const {results} = await getSearchResult(animeId, 1);
//         // console.log();
//         const data = await getInfo(results[0].id);
//         console.log(data);
//         return (
//             <main>
//                 <Player episodes={data.episodes} />
//             </main>
//         );
//     } catch (error) {
//         return <main>something went wrong</main>;
//     }
// }

export default function page() {
    return (
        <div>
            <h1>Watch Page</h1>
        </div>
    );
}