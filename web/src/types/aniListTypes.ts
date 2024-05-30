export type RelatedType = {
    nodes: {
        title: {
            romaji: string;
            english: string;
            native: string;
            userPreferred: string;
        };
        format: string;
    }[];
};
export type RecommendationsType = {
    media: {
        id: number;
        coverImage: {
            large: string;
            extraLarge: string;
        };
        title: {
            romaji: string;
            english: string;
            native: string;
            userPreferred: string;
        };
    };
}[];

export type InfoType = {
    Media: {
        title: {
            romaji: string;
            english: string;
            native: string;
        };
        coverImage: {
            extraLarge: string;
            large: string;
        };
        averageScore: number;
        type: string;
        duration: string;
        bannerImage: string;
        relations: RelatedType;
    };
    Page: {
        recommendations: RecommendationsType;
    };
};

export type TrendingType = {
    Page: {
        media: {
            id: number;
            title: {
                romaji: string;
                english: string;
                native: string;
            };
            coverImage: {
                medium: string;
            };
            averageScore: number;
            type: string;
            duration: string;
        }[];
    };
};
