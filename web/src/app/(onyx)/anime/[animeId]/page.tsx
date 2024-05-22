import Player from "@/components/pageComponents/animeInfo/player/Player";
import { getInfo } from "@/services/gogoAnime/api";

type AnimeInfoProps = { params: { animeId: string } };
export default async function AnimeInfoPage({ params }: AnimeInfoProps) {
    const { animeId } = params;
    try {
        if (!animeId) {
            return <main>not found</main>;
        }
        const data = await getInfo(animeId);
        // console.log(data);
        return (
            <main>
                <Player episodes={data.episodes} />
            </main>
        );
    } catch (error) {
        return <main>something went wrong</main>;
    }
}
