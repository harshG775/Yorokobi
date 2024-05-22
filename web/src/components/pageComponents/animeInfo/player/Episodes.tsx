import { EpisodesInfoType } from "@/types/GogoAnimeTypes";

type EpisodesPropsType = {
    episodes: EpisodesInfoType[];
    currentEpisode: string;
    setCurrentEpisode: React.Dispatch<React.SetStateAction<string>>;
};

export default function Episodes({episodes,currentEpisode,setCurrentEpisode,}: EpisodesPropsType) {
    return (
        <div className="p-2">
            <p className="uppercase font-bold">Episodes :</p>
            <ul className=" max-h-96 overflow-y-auto">
                {episodes.map((episode: EpisodesInfoType) => (
                    <li
                        onClick={() => setCurrentEpisode(episode.id)}
                        className={` ${
                            currentEpisode === episode.id
                                ? "bg-primary text-primary-foreground"
                                : "even:bg-secondary odd:bg-secondary/50"
                        } hover:bg-primary/80 hover:text-primary-foreground `}
                        key={episode.id}
                    >
                        <button className="px-4 block w-full text-left">
                            {episode.number}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
