import { AL } from "@/lib/Axios";
import { TrendingType } from "@/types/aniListTypes";
import { gql } from "@/utils/stringMinify";

export async function getInfoById(id: number) {
    return await AL({
        query: `
        query {
            Media(id: ${id}, type: ANIME) {
                title {
                    romaji
                    english
                    native
                }
                description
                coverImage {
                    medium
                }
                bannerImage
            }
        }
    `,
    });
}

export async function getTrending(): Promise<TrendingType> {
    const { data } = await AL({
        query: `
            query {
                Page(page: 1, perPage: 20) {
                    media(sort: TRENDING_DESC, type: ANIME) {
                        id
                        title {
                            romaji
                            english
                            native
                        }
                        coverImage {
                            medium
                        }
                        averageScore
                        type
                        duration
                    }
                }
            }
        `,
    });
    return data.data;
}
