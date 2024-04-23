import Image from "next/image";
import Link from "next/link";
type PlayerProps = {
    data: {
        id: number;
        related_anime: {
            node: {
                id: number;
                title: string;
                main_picture: {
                    large: string;
                    medium: string;
                    small: string;
                };
            };
            relation_type: string;
            relation_type_formatted: string;
        }[];
    };
};
export default function Related({ data }: PlayerProps) {
    const { related_anime } = data;
    console.log(data);
    return (
        <aside>
            <h1>Related</h1>
            <div className="max-h-full overflow-y-auto ">
                {related_anime.map(({ node }) => (
                    <Link
                        href={`/anime/${node.id}`}
                        className={`flex mt-4 text-blue-500`}
                        key={node.id}
                    >
                        <Image
                            src={node.main_picture.large}
                            alt={""}
                            width={100}
                            height={100}
                        />
                        <span className="text-sm">{node.title}</span>
                    </Link>
                ))}
            </div>
        </aside>
    );
}
