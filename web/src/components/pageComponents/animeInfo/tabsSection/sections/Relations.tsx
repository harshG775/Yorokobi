import { RelatedType } from "@/types/aniListTypes";
import Image from "next/image";
import Link from "next/link";

export default async function Relations({
    relations,
}: {
    relations: RelatedType;
}) {
    return (
        <section className="min-h-96 container mx-auto">
            <ul className="max-h-96 overflow-y-scroll ">
                {relations.nodes.map((node: any) => {
                    const { format } = node;
                    if (
                        format !== "MOVIE" &&
                        format !== "TV" &&
                        format !== "SPECIAL" &&
                        format !== "OVA" &&
                        format !== "ONA"
                    ) {
                        return null;
                    }

                    return (
                        <li key={node.id} className=" hover:bg-primary/50">
                            <Link
                                href={`/info/${node.id}`}
                                className="grid grid-cols-[2fr_4fr]"
                            >
                                <Image
                                    src={node?.coverImage?.large}
                                    alt={
                                        node?.title?.english ||
                                        node?.title?.romaji
                                    }
                                    width={100}
                                    height={100}
                                />
                                <div>
                                    <h3>
                                        {node?.title?.english ||
                                            node?.title?.romaji}
                                    </h3>
                                    {node.format}
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
