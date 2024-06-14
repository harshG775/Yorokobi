// import TabsSection from "@/components/pageComponents/animeInfo/tabsSection/TabsSection";
// import { getInfoById } from "@/services/GraphQL/anilist/Axios_aniList";
// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// export default async function InfoPage({
//     params,
// }: {
//     params: { animeId: string };
// }) {
//     try {
//         const { animeId } = params;
//         const resp = await getInfoById(animeId);
//         const {
//             Media,
//             Page: { recommendations },
//         } = resp;
//         console.log(Media.relations.edges[0].node.coverImage);
//         return (
//             <main>
//                 <header>
//                     {/* hero info and poster card */}
//                     <div
//                         style={{
//                             backgroundImage: `url(${Media?.bannerImage})`,
//                             borderImage:
//                                 "inset linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) 1 stretch",
//                         }}
//                         className="w-full h-96 bg-center bg-cover"
//                     ></div>
//                     {/* <Image
//                         className="w-full h-52 sm:h-72 object-cover bg-top"
//                         src={Media?.bannerImage || Media.coverImage.extraLarge}
//                         alt="poster"
//                         width={720}
//                         height={480}
//                     /> */}
//                     <div>
//                         <Image
//                             src={Media?.coverImage?.large || " "}
//                             alt="poster"
//                             width={240}
//                             height={360}
//                         />
//                         <h1>{Media?.title?.romaji}</h1>
//                     </div>
//                     <div>
//                         <Link
//                             href={`/watch/${Media.title.romaji.replace(
//                                 " ",
//                                 "-"
//                             )}`}
//                         >
//                             Watch
//                         </Link>
//                     </div>
//                 </header>
//                 <ul>
//                     {Media.relations.edges.map(
//                         ({ node, relationType }) =>
//                             (relationType === "PREQUEL" ||
//                                 relationType === "SEQUEL") &&
//                             node.type === "ANIME" && (
//                                 <li key={node.id}>
//                                     <Link href={`/info/${node.id}`}>
//                                     {relationType}
//                                     <Image
//                                         src={node.coverImage.large}
//                                         alt="poster"
//                                         width={100}
//                                         height={100}
//                                     />
//                                     </Link>
//                                 </li>
//                             )
//                     )}
//                 </ul>
//                 <TabsSection info={resp} />

//                 <section>
//                     {/* episodes */}
//                     <div>
//                         <h3>Episodes {"refresh Icon"}</h3>
//                         <ul>
//                             <li>
//                                 {" "}
//                                 episode
//                                 <span>0-100</span>
//                                 <span>101-200</span>
//                                 <span>201-230</span>
//                             </li>
//                             <li>
//                                 <span>server-1</span>
//                                 <span>server-2</span>
//                             </li>
//                             <li>
//                                 <span>dub</span>
//                                 <span>sub</span>
//                             </li>
//                             <li>
//                                 listStyle
//                                 <span>image only</span>
//                                 <span>image and details</span>
//                                 <span>episodes only</span>
//                                 <span>Order - ascending/descending</span>
//                             </li>
//                         </ul>
//                     </div>
//                     <ul>
//                         <li>episodes: 1</li>
//                     </ul>
//                 </section>

//                 <section>
//                     <div>
//                         <h3>Recommendations</h3>
//                     </div>
//                     <ul className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))]">
//                         {recommendations.map((data) => (
//                             <li key={data.media.id}>
//                                 <Image
//                                     src={data.media.coverImage.extraLarge}
//                                     alt={data.media.title.english}
//                                     width={180}
//                                     height={200}
//                                 />
//                                 <p>{data.media.title.english}</p>
//                             </li>
//                         ))}
//                     </ul>
//                 </section>
//             </main>
//         );
//     } catch (error: any) {
//         if (error.response.status === 404) {
//             return notFound();
//         }
//         return <main>something went wrong</main>;
//     }
// }

export default function page() {
    return (
        <main>
            <div className="max-w-8xl mx-auto grid grid-cols-[3fr_1fr]">
                <section className="  border border-primary min-h-96">

                </section>
                <aside className="border border-primary overflow-auto">
                    <div className="w-full h-96 bg-center bg-cover"></div>
                    <div className="w-full h-96 bg-center bg-cover"></div>
                </aside>
            </div>
        </main>
    );
}
