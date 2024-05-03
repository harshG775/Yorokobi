import Image from "next/image";
import Link from "next/link";

export type CardItemType = {
    id: string;
    title: string;
    image: string;
    url: string;
    genres: string[];
    episodeId: string;
    episodeNumber: number;
};
type CardPropsType = {
    item: CardItemType;
};
export default function Card({ item }: CardPropsType) {
    const { id, title, image, url, genres, episodeId, episodeNumber } = item;
    return (
        <li key={id}>
            <Link
                href={`/anime/${id}`}
                className="
                bg-neutral-900
                grid grid-cols-[160px,1fr] h-52  rounded-lg overflow-hidden"
            >
                <Image className="h-full" width={160} height={208} src={image} alt="" />
                <div className="p-2 space-y-2">
                    <div>{title}</div>
                    <div className="text-xs flex gap-2 flex-wrap">
                        {genres.map((genre: string, i: number) => (
                            <span
                                className="bg-neutral-800 rounded-sm px-2"
                                key={genre + i}
                            >
                                {genre}
                            </span>
                        ))}
                    </div>
                </div>
            </Link>
        </li>
    );
}
