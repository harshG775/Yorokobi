import { AL } from "@/lib/Axios";
import { InfoType, TrendingType } from "@/types/aniListTypes";
import { gql } from "@/utils/stringMinify";

export async function getInfoById(id: string,type:string): Promise<InfoType> {
    const { data } = await AL({
        query: `
        query {
            Media(id: ${id}, type: ${type}) {
                title {
                    romaji
                    english
                    native
                }
                description
                coverImage {
                    medium
                    large
                }
                bannerImage
            }
        }
    `,
    });
    return data.data
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
