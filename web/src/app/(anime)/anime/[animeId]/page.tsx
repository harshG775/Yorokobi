import { CMTAxios } from "@/lib/Axios";
import Image from "next/image";






type AnimeInfoPropsType = {
    params: { animeId: string };
};

type ResponseType = {
    data: {
        id: string;
        title: string;
        url: string;
        genres: string[];
        totalEpisodes: number;
        image: string;
        releaseDate: string;
        description: string;
        subOrDub: string;
        type: string;
        status: string;
        otherName: string;
        episodes: { id: string; number: number; url: string }[];
    }
    
};

export default async function AnimeInfo({ params }: AnimeInfoPropsType) {
    try {
        const {data} :ResponseType = await CMTAxios.get(`/anime/gogoanime/info/${params.animeId}`);
        const {id, title, url, genres, totalEpisodes, image, releaseDate, description, subOrDub, type, status, otherName, episodes}= data;
        return (
            <div>
                <h1>Anime Info</h1>
                <div>
                    <Image src={image} alt={title} width={300} height={400} />
                    <h1>{title}</h1>
                    <div className="flex gap-2">
                        {genres.map((genre: string, i: number) => (
                            <span
                                className="bg-neutral-800 rounded-sm px-2"
                                key={genre + i}
                            >
                                {genre}
                            </span>
                        ))}
                    </div>
                    <p>{description}</p>
                </div>
                <div className="max-h-60 max-w-60 overflow-x-auto">
                    {episodes.map((episode: { id: string; number: number; url: string }, i: number) => (
                        <li key={episode.id + i} className="hover:bg-neutral-800 cursor-pointer">
                            {episode.number}
                        </li>
                    ))}
                </div>
            </div>
        )
    } catch (error) {
        console.log(error);
        return (
            <div>
                <h1>Anime Info</h1>
                <div>
                    <h1>something went wrong</h1>
                </div>
            </div>
        );
    }
}
