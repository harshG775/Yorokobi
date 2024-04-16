import crypto from "crypto";
export default function generateCodeVerifier(clientId: string,redirectUri: string) {
    const codeVerifier = crypto.randomBytes(32).toString("hex");
    const hash = crypto.createHash("sha256");
    hash.update(codeVerifier);
    const codeChallenge = hash
        .digest("base64")
        .replace("+", "-")
        .replace("/", "_")
        .replace(/=+$/, ""); // Remove any trailing equal signs

    // Construct the authorization URL
    const authUrl = `https://myanimelist.net/v1/oauth2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&code_challenge=${encodeURIComponent(codeChallenge)}&code_challenge_method=S256`;
    return {
        authUrl,
        codeVerifier,
    };
}
