import axios from "axios";
import { envClient } from "../utils/env/envClient";
export const Axios = axios.create({
    baseURL: envClient.NEXT_PUBLIC_MAL_BASE_URL,
    headers: {
        accept: "application/json",
        "content-type": "application/json",
    },
    timeout: 5000,
});
