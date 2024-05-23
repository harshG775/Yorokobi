import { getInfoById } from "@/services/GraphQL/anilist/Axios_aniList";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function InfoPage({
    params,
}: {
    params: { animeId: string };
}) {
    try {
        const { animeId } = params;
        const { Media } = await getInfoById(animeId, "ANIME");
        return (
            <main>
                <header>
                    {/* hero info and poster card */}
                    <Image
                        className="w-full h-full object-cover"
                        src={Media.bannerImage}
                        alt="poster"
                        width={720}
                        height={480}
                    />
                    <div>
                        <Image
                            src={Media.coverImage.large}
                            alt="poster"
                            width={240}
                            height={360}
                        />
                        <h1>{Media.title.romaji}</h1>
                    </div>
                </header>

                <section>
                    {/* Tabs */}
                    <ul>
                        <li>overview</li>
                        <li>Relations</li>
                        <li>Characters</li>
                        <li>Staff</li>
                    </ul>
                    <section>
                        <h3>overview</h3>
                        <h3>Relations</h3>
                        <h3>Characters</h3>
                        <h3>Staff</h3>
                        {/* tab content */}
                    </section>
                </section>

                <section>
                    {/* episodes */}
                    <div>
                        <h3>Episodes {"refresh Icon"}</h3>
                        <ul>
                            <li>
                                {" "}
                                episode
                                <span>0-100</span>
                                <span>101-200</span>
                                <span>201-230</span>
                            </li>
                            <li>
                                <span>server-1</span>
                                <span>server-2</span>
                            </li>
                            <li>
                                <span>dub</span>
                                <span>sub</span>
                            </li>
                            <li>
                                listStyle
                                <span>image only</span>
                                <span>image and details</span>
                                <span>episodes only</span>
                                <span>Order - ascending/descending</span>
                            </li>
                        </ul>
                    </div>
                    <ul>
                        <li>episodes: 1</li>
                    </ul>
                </section>

                <section>
                    <div>
                        <h3>Recommendations</h3>
                    </div>
                    <ul>{/* Recommended anime carousel*/}</ul>
                </section>
            </main>
        );
    } catch (error: any) {
        if (error.response.status === 404) {
            return notFound();
        }
        return <main>something went wrong</main>;
    }
}
