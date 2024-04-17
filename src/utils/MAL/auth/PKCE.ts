import crypto from "crypto";
import axios from "axios";
import { envServer } from "@/utils/env/envServer";

const baseUrl = "https://myanimelist.net/v1/oauth2";
const redirectUri = "http://localhost:4000/verify";

// new pkce generator
export function generateCodeVerifier() {
    // Generate a random string for Code Verifier
    const codeVerifier = crypto
        .randomBytes(64)
        .toString("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=/g, "")
        .substring(0, 128);

    // Derive Code Challenge from Code Verifier
    const pkce_verifier = crypto
        .createHash("sha256")
        .update(codeVerifier)
        .digest("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=/g, "");

    const authUrl = `${baseUrl}/authorize?response_type=code&client_id=${envServer.MAL_CLIENT_ID}&state=${codeVerifier}&redirect_uri=${redirectUri}&code_challenge=${pkce_verifier}&code_challenge_method=plain`;
    return {
        authUrl,
    };
}

/* verify user */
export async function verifyUserCode(pkce_verifier: string, urlCode: string) {
    try {
        const resp = await axios.post(
            `${baseUrl}/token`,
            new URLSearchParams({
                client_id: envServer.MAL_CLIENT_ID,
                code: urlCode,
                code_verifier: pkce_verifier,
                grant_type: "authorization_code",
                redirect_uri: redirectUri,
            }),
            {
                headers: {
                    Authorization: `Basic ${Buffer.from(
                        envServer.MAL_CLIENT_ID +
                            ":" +
                            envServer.MAL_CLIENT_SECRET
                    ).toString("base64")}`,
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );
        return resp;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
