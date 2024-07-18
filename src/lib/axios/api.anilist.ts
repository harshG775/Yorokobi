import axios from "axios";
import { clientEnv } from "../env/client.env";
const { NEXT_PUBLIC_AL_BASEURL_QL } = clientEnv;

const axiosAL = axios.create({
    baseURL: NEXT_PUBLIC_AL_BASEURL_QL,
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
    return axiosAL.post(
        "",
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
