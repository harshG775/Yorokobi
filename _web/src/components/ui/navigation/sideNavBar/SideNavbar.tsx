"use client";

import React from "react";
import SidebarLinks from "./sidebar/SidebarLinks";
import { ToggleState } from "@/app/(home)/layout";
// lucid icon type
import { HomeIcon, Menu } from "lucide-react";
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
export default function SideNavbar(props:ToggleState) {
    const { isSidebarOpen, setIsSidebarOpen } = props;
    const handleCloseSidebar = () => {
        setIsSidebarOpen(false)
    }
	return (
        <>
            <aside className={`
                    z-50 fixed inset-y-0 left-0 w-64 bg-neutral-900
                    grid grid-rows-[auto,1fr]
                    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-200
                `}>
                <div className="flex justify-between p-4">
                    <div>
                        <button onClick={handleCloseSidebar}>
                            <Menu width={"24px"} height={"24px"} />
                        </button>
                    </div>
                    <div>LOGO</div>
                </div>
                <nav className="overflow-y-auto scrollbar-thin">
                    <SidebarLinks linksData={SidebarLinksData} />
                    {/* user */}
                </nav>
            </aside>
            <div className={`fixed inset-0 bg-neutral-900/50 z-40 xl:hidden ${isSidebarOpen?"":"  hidden "}`} onClick={handleCloseSidebar}></div>
        </>

	);
}
