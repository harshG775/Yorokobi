import axios from "axios";
import { clientEnv } from "../env/client.env";
import { getAccessToken } from "@/app/actions/authActions";
const { NEXT_PUBLIC_AL_BASEURL_QL } = clientEnv;

const axiosAL = axios.create({
    baseURL: NEXT_PUBLIC_AL_BASEURL_QL,
    headers: {
        accept: "application/json",
        "content-type": "application/json",
    },
});

export const AL = async (query: string) => {
    return axiosAL.post("", {
        query: query,
    });
};

export const AL_Token = async (query: string) => {
    try {
        const accessToken = await getAccessToken();
        if (!accessToken) {
            return Promise.reject("user accessToken not found");
        }
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
    } catch (error) {
        return Promise.reject(error);
    }
};
