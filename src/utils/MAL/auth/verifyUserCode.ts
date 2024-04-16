import axios from "axios";
const redirectUri = "http://localhost:4000/verify";
import { envServer } from "@/utils/env/envServer";
export default async function verifyUserCode(
    codeVerifier: string,
    authorizationCode: string
) {
    try {
        const resp = await axios.post(
            "https://myanimelist.net/v1/oauth2/token",
            {
                grant_type: "authorization_code",
                client_id: envServer.MAL_CLIENT_ID,
                redirect_uri: redirectUri,
                code_verifier: codeVerifier,
                code: authorizationCode,
            },
            {
                headers: {
                    Authorization: `Basic ${envServer.MAL_CLIENT_SECRET}`,
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );
        return resp;
    } catch (error) {
        console.error(error);
    }
}
