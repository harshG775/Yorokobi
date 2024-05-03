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
}
export default function Card({ item }: CardPropsType) {
    const { id, title, image, url, genres, episodeId, episodeNumber } = item;
    return (
        <li key={id}>
            <Link href={`/anime/${id}`}>
                <Image
                    width={100}
                    height={200}
                    src={image}
                    alt=""
                    className="w-20"
                />
                <div>{title}</div>
            </Link>
        </li>
        
    );
}