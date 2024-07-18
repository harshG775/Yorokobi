"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { setAccessToken } from "@/app/actions/authActions";

export default function RedirectPage() {
    const router = useRouter();
    useEffect(() => {
        const hash = window.location.hash;
        const params = new URLSearchParams(hash.substring(1));
        const accessToken = params.get("access_token");
        console.log(accessToken);
        const fetchMe = async () => {
            if (accessToken) {
                await setAccessToken(accessToken);
                router.replace("/");
            }
            if (!accessToken) {
                router.replace("/");
            }
        };
        fetchMe();
    }, []);
    return (
        <div className="min-h-screen grid place-content-center">Logging...</div>
    );
}
