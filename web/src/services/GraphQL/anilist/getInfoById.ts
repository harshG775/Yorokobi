import { AL } from "@/lib/Axios";
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
                    large
                }
                bannerImage
            }
        }
    `,
    });
}

export async function getTrending() {
    return await AL({
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
                            large
                        }
                        averageScore
                    }
                }
            }
        `,
    });
}
