import crypto from "crypto";
import axios from "axios";
// import { envServer } from "@/utils/env/envServer";

const env = {
    MAL_CLIENT_ID: "ed8ef1ad28621d8cb142d13b91504b46",
    MAL_CLIENT_SECRET:
        "96ab7575268d391653b4d58796d55a560819b366bc5ac22788fc2f4ef848ff24",
};
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

    const authUrl = `${baseUrl}/authorize?response_type=code&client_id=${
        env.MAL_CLIENT_ID
    }&state=${codeVerifier}&redirect_uri=${encodeURIComponent(
        redirectUri
    )}&code_challenge=${encodeURIComponent(
        pkce_verifier
    )}&code_challenge_method=plain`;
    return {
        authUrl,
    };
}

/* verify user */
export async function verifyUserCode(pkceVerifier: string, urlCode: string) {
    try {
        const data = await axios.post(
            `${baseUrl}/token`,
            {
                body: new URLSearchParams({
                    client_id: env.MAL_CLIENT_ID,
                    client_secret: env.MAL_CLIENT_SECRET,
                    grant_type: "authorization_code",
                    code: urlCode,
                    code_verifier: pkceVerifier,
                    redirect_uri: redirectUri,
                }),
            },

            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );
        return data;
    } catch (error) {
        console.error("Error verifying user code:");
        console.error(error);
        throw error;
    }
}
