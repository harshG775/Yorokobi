

export type RelatedType = {
    edges: {
        relationType: "SEQUEL" | "PREQUEL" | "SPIN_OFF" | "";//more to add
        node: {
            type: string;
            id: number;
            status: "FINISHED" | "RELEASING" | "NOT_YET_RELEASED" | "CANCELLED" | "HIATUS";
            coverImage: {
                extraLarge: string;
                large: string;
                medium: string;
                color: string;

            }
        };
    }[];
    nodes: {
        title: {
            romaji: string;
            english: string;
            native: string;
            userPreferred: string;
        };
        format: "TV" | "TV_SHORT" | "MOVIE" | "SPECIAL" | "OVA" | "ONA" | "MUSIC" | "MANGA" | "NOVEL" | "ONE_SHOT";
    }[];
};
export type RecommendationsType = {
    media: {
        id: number;
        coverImage: {
            extraLarge: string;
            large: string;
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
