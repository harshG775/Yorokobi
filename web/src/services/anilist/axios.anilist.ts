import { envClient } from "@/utils/env/env.client";
import axios from "axios";
const { NEXT_PUBLIC_AL_BASEURL_QL } = envClient;

export const AL = axios.create({
    baseURL: NEXT_PUBLIC_AL_BASEURL_QL,
    headers: {
        "accept": "application/json",
        "content-type": "application/json",
    },
});
