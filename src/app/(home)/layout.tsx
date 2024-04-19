"use client";
import TopNavbar from "@/components/ui/navigation/topNavBar/TopNavbar";
import SideNavbar from "@/components/ui/sideNavBar/SideNavbar";
import { HomeIcon } from "lucide-react";
import { useState } from "react";

const SidebarLinksData = [
    {
        linkTo: "/home",
        title: "home",
        Icon: HomeIcon,
    },
    {
        linkTo: "/tv",
        title: "Tv Shows",
        Icon: HomeIcon,
    },
    {
        linkTo: "/movie",
        title: "Movies",
        Icon: HomeIcon,
    },
];

type Props = {
    children: Readonly<{ children: React.ReactNode }>;
};
export type ToggleState = {
    isSidebarOpen: boolean;
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function HomeLayout({ children }: Props) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <>
            <TopNavbar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />
            <SideNavbar
                linksData={SidebarLinksData}
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />
            {children}
        </>
    );
}
