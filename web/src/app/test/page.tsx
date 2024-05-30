import { AL } from "@/lib/Axios";
import Image from "next/image";

export async function getTrending() {
    const { data } = await AL({
        query: `
        {
            Page(page: 1, perPage: 20) {
              recommendations(mediaRecommendationId: 21) {
                media {
                  id
                  coverImage {
                    extraLarge
                  }
                  title {
                    romaji
                    english
                    native
                    userPreferred
                  }
                }
              }
            }
          }
          
        `,
    });
    return data.data;
}

export default async function page() {
    try {
        const data = await getTrending();
        return (
            <ul className="grid grid-cols-6 gap-4">
                {data.Page.recommendations.map((data:any) => (
                    <li key={data.media.id}>
                        <Image
                            src={data.media.coverImage.extraLarge}
                            alt={data.media.title.english}
                            width={180}
                            height={200}
                        />
                        <p>{data.media.title.english}</p>
                    </li>
                ))}
            </ul>
        );
    } catch (error) {
        console.log(error);
        return (
            <ul>
                <li>{JSON.stringify(error)}</li>
            </ul>
        );
    }
}
