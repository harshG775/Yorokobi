import axios from "axios";
import { envClient } from "../utils/env/envClient";
export const CMTAxios = axios.create({
    baseURL: envClient.NEXT_PUBLIC_CMT_BASE_URL,
    headers: {
        "accept": "application/json",
        "content-type": "application/json",
    },
    timeout: 5000,
});
