import axios from "axios";
// import { serverEnv } from "../env/server.env";
// const { AL_BASEURL_QL } = serverEnv;

const axiosAL = axios.create({
    baseURL: "https://graphql.anilist.co",
    headers: {
        accept: "application/json",
        "content-type": "application/json",
    },
});
type ALProps = {
    query: string;
    accessToken?: string;
};

export const AL = ({ query, accessToken }: ALProps) => {
    return axiosAL.post("",
        {
            query: query,
        },
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );
};
