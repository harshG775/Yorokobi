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
        if (accessToken) {
            setAccessToken(accessToken);
            router.replace("/");
        }
        if (!accessToken) {
            router.replace("/");
        }
    }, []);
    return (
        <div className="min-h-screen grid place-content-center">Logging...</div>
    );
}
