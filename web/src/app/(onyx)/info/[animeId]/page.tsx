import TabsSection from "@/components/pageComponents/animeInfo/tabsSection/TabsSection";
import Tabs from "@/components/ui/tabs/Tabs";
import { getInfoById } from "@/services/GraphQL/anilist/Axios_aniList";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
export default async function InfoPage({
    params,
}: {
    params: { animeId: string };
}) {
    try {
        const { animeId } = params;
        const { Media } = await getInfoById(animeId);
        console.log(Media);
        return (
            <main>
                <header>
                    {/* hero info and poster card */}
                    <div
                        style={{
                            backgroundImage: `url(${Media?.bannerImage})`,
                            borderImage: "inset linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) 1 stretch",
                        }}
                        className="w-full h-96 bg-center bg-cover"
                    >

                    </div>
                    {/* <Image
                        className="w-full h-52 sm:h-72 object-cover bg-top"
                        src={Media?.bannerImage || Media.coverImage.extraLarge}
                        alt="poster"
                        width={720}
                        height={480}
                    /> */}
                    <div>
                        <Image
                            src={Media?.coverImage?.large||" "}
                            alt="poster"
                            width={240}
                            height={360}
                        />
                        <h1>{Media?.title?.romaji}</h1>
                    </div>
                    <div>
                        <Link href={`/watch/${Media.title.romaji.replace(" ", "-")}`}>Watch</Link>
                    </div>
                </header>

                <TabsSection/>

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
