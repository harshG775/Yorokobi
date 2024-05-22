import { envClient } from "@/utils/env/env.client";
import axios from "axios";
const { NEXT_PUBLIC_AL_BASEURL_QL } = envClient;

const axiosAL = axios.create({
    baseURL: NEXT_PUBLIC_AL_BASEURL_QL,
    headers: {
        accept: "application/json",
        "content-type": "application/json",
    },
});
export const AL = ({ query }: { query: string }) => {
    return axiosAL.post("", {
        query: query,
    });
};
