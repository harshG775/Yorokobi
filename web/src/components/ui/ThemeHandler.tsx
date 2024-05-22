"use client";
import { setCookie } from "cookies-next";
import { useState } from "react";
import Icon from "@/components/icons/lucide";
export default function ThemeHandler({
    currentTheme,
}: {
    currentTheme: string;
}) {
    const [cTheme, setCTheme] = useState(currentTheme);

    const handleTheme = () => {
        const newTheme = cTheme === "light" ? "dark" : "light";
        document.body.setAttribute("class", newTheme);
        setCookie("theme", newTheme, { maxAge: 30 * 24 * 60 * 60, path: "/" });
        setCTheme(newTheme);
    };

    return (
        <button
            className="fixed bottom-4 right-4 bg-primary text-primary-foreground
                 rounded-full p-2
                hover:scale-110 transition-transform ease-out
                
            "
            onClick={handleTheme}
        >
            <Icon
                name={cTheme === "light" ? "Moon" : "Sun"}
                className="w-6 h-6"
            />
        </button>
    );
}
