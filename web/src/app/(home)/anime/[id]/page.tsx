import { DisqusAnime } from "@/components/disqus/Disqus-anime";
import Overview from "@/components/pages/anime/info/Overview/Index";
import Player from "@/components/pages/anime/info/Player/Index";
import Recommended from "@/components/pages/anime/info/Recommended/Index";
import Related from "@/components/pages/anime/info/Related/Index";
import { Axios } from "@/lib/Axios";
import { cn } from "@/lib/utils";
import { envServer } from "@/utils/env/envServer";

type CommentsProps = {
    data: { id: string; title: string }; 
    className: string
};
function Comments({ data, className }: CommentsProps) {
    return (
        <div className={cn("p-4", className)}>
            <DisqusAnime id={data.id} title={data.title} />
        </div>
    );
}

type AnimeOverviewProps = {
    params: { id: string };
};
export default async function page({ params }: AnimeOverviewProps) {
    try {
        const { data } = await Axios.get(
            `anime/${params.id}?fields=id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics,country,time`,
            {
                headers: {
                    "X-MAL-CLIENT-ID": envServer.MAL_CLIENT_ID,
                },
            }
        );
        return (
            <main className="max-w-8xl space-y-2 mx-auto bg-neutral-100 p-2">
                <div className="grid xl:grid-cols-[3fr,1fr]">
                    <div>
                        <Player data={data} />
                        <Overview data={data} />
                    </div>
                    <Related data={data} />
                </div>
                <div className="grid xl:grid-cols-[3fr,1fr]">
                    <Comments className="order-2 xl:order-none " data={data} />
                    <Recommended data={data} />
                </div>
            </main>
        );
    } catch (error) {
        console.log(error);
        return (
            <main className="max-w-8xl space-y-2 mx-auto bg-neutral-100 p-2">
                <div className="grid xl:grid-cols-[3fr,1fr]">
                    <div></div>
                </div>
                <div className="grid xl:grid-cols-[3fr,1fr]">
                    <h1>Something went wrong</h1>
                </div>
            </main>
        );
    }
}
