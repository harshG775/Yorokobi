"use client";

import React from "react";
import SidebarLinks from "./sidebar/SidebarLinks";

import { ToggleState } from "@/app/(home)/layout";
import Logo from "@/components/brand/Logo";
import { Menu } from "lucide-react";
type sidebarProps =ToggleState & {
    linksData:any
}
export default function SideNavbar(props:sidebarProps) {
    const { isSidebarOpen, setIsSidebarOpen ,linksData} = props;
    const handleCloseSidebar = () => {
        setIsSidebarOpen(false)
    }
	return (
        <>
            <aside className={`
                    z-50 fixed inset-y-0 left-0 w-64 bg-neutral-100
                    grid grid-rows-[auto,1fr]
                    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-200
                `}>
                <div className="flex justify-between p-4">
                    <div className="grid place-content-center">
                        <button  onClick={handleCloseSidebar}>
                            <Menu width={"24px"} height={"24px"}/>
                        </button>
                    </div>
                    <div>
                        <Logo />
                    </div>
                </div>
                <nav className="overflow-y-auto scrollbar-thin">
                    <SidebarLinks linksData={linksData} />
                    {/* user */}
                </nav>
            </aside>
            <div className={`fixed inset-0 bg-neutral-900/50 z-40 ${isSidebarOpen?"":"  hidden "}`} onClick={handleCloseSidebar}></div>
        </>

	);
}
