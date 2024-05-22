import TanstackQuery from "@/lib/TanstackQuery";
import { cn } from "@/utils/cn";
import React from "react";
import ThemeHandler from "@/components/ui/ThemeHandler";

import { cookies } from "next/headers";

type RootLayoutProps = {
    children: React.ReactNode;
    className?: string;
    htmlClassName?: string;
};
export default function Layout({ children, ...rest }: RootLayoutProps) {
    const { className, htmlClassName } = rest;
    const { get } = cookies();
    const theme = get("theme")?.value || "light";
    return (
        <html lang="en" className={cn("", htmlClassName)}>
            <body className={cn(theme, className)}>
                <TanstackQuery>
                    {children}
                    <ThemeHandler currentTheme={theme} />
                </TanstackQuery>
            </body>
        </html>
    );
}
