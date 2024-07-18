"use client";
import { useEffect } from "react";
import { setToken } from "../actions";
import { useRouter } from "next/navigation";

export default function RedirectPage() {
    const router = useRouter();
    useEffect(() => {
        const hash = window.location.hash;
        const params = new URLSearchParams(hash.substring(1));
        const accessToken = params.get("access_token");
        if (accessToken) {
            setToken({
                name: "access_token",
                value: accessToken,
                httpOnly: true,
                path: "/",
            });
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
