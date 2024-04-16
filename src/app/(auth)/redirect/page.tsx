import generateCodeVerifier from "@/utils/MAL/auth/generateCodeVerifier";
import { envServer } from "@/utils/env/envServer";
import { redirect } from "next/navigation";

export default function page() {
    const { authUrl, codeVerifier } = generateCodeVerifier(envServer.MAL_CLIENT_ID,"http://localhost:4000/verify");
    console.log(codeVerifier);
    redirect(authUrl);
}