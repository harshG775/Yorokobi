"use server";

// import generateCodeVerifier from "@/utils/MAL/auth/generateCodeVerifier";
// import { envServer } from "@/utils/env/envServer";
// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";

// export async function redirect_MAL_ToVerify() {
//     const { authUrl, codeVerifier } = generateCodeVerifier(envServer.MAL_CLIENT_ID, "http://localhost:4000/verify");
//     cookies().set("codeVerifier", codeVerifier);
//     redirect(authUrl);
// }


import { redirect } from "next/navigation";
import { generateCodeVerifier } from "@/utils/MAL/auth/PKCE";
export async function redirect_MAL_ToVerify() {
    const { authUrl } = generateCodeVerifier();
    console.log(authUrl);
    redirect(authUrl);
}

