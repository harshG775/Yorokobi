import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export default async function Relations({ id }: { id: string }) {
    try {
        const {
            data: {
                data: {
                    Media: {
                        relations: { nodes },
                    },
                },
            },
        } = await axios.post("https://graphql.anilist.co", {
            query: `query {
                Media(id: ${id}, type: ANIME) {
                    relations {
                        nodes {
                            id
                            title {
                                romaji
                                english
                                native
                                userPreferred
                            }
                            coverImage {
                                extraLarge
                                large
                                medium
                                color
                            }
                            format
                        }
                      }
                }
            }`,
        });
        return (
            <section className="min-h-96 container mx-auto">
                <h3>Relations</h3>
                <ul className="max-h-96 overflow-y-scroll ">
                    {nodes.map((node: any) => (
                        <li
                            key={node.id}
                            className=" hover:bg-primary/50"
                        >
                            <Link href={`/info/${node.id}`} className="grid grid-cols-[2fr_4fr]">
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
                    ))}
                </ul>
            </section>
        );
    } catch (error) {
        console.log(error);
        return (
            <section className="min-h-96 container mx-auto">
                <h3>something went wrong</h3>
            </section>
        );
    }
}
