"use client";
import TopNavbar from "@/components/ui/navigation/topNavBar/TopNavbar";
import SideNavbar from "@/components/ui/sideNavBar/SideNavbar";
import { useState } from "react";

export type ToggleState = {
    isSidebarOpen: boolean;
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function HomeLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <>
            <TopNavbar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />
            <SideNavbar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                toggle
            </button>
            {children}
        </>
    );
}
