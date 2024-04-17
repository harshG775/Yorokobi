import axios from "axios";
const redirectUri = "http://localhost:4000/verify";
import { envServer } from "@/utils/env/envServer";
export default async function verifyUserCode(state: string, code: string) {
    try {
        const resp = await axios.post(
            `https://myanimelist.net/v1/oauth2/token`,
            {
                params: {
                    client_id: envServer.MAL_CLIENT_ID,
                    grant_type: "authorization_code",
                    code: code,
                    redirect_uri: redirectUri,
                    code_verifier: state,
                },
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );
        return resp;
    } catch (error) {
        console.error(error);
    }
}
