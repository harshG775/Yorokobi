"use client";
import React from "react";
import { ToggleState } from "@/app/(home)/layout";
import Logo from "@/components/brand/Logo";
import { Menu } from "lucide-react";

export default function TopNavbar(props: ToggleState) {
    const { isSidebarOpen, setIsSidebarOpen } = props;
    const handleOpenSidebar = () => {
        setIsSidebarOpen(true);
    };
    return (
        <header className={`bg-neutral-100`}>
            <nav className="relative">
                <ul className="w-full mx-auto flex items-center gap-2 p-2">
                    <li className="p-2 grid place-items-center">
                        <button
                            className={
                                isSidebarOpen ? "opacity-0" : "opacity-100"
                            }
                            onClick={handleOpenSidebar}
                        >
                            <Menu width={"24px"} height={"24px"}/>
                        </button>
                    </li>
                    <li className="w-full">
                        <Logo />
                    </li>
                </ul>
            </nav>
        </header>
    );
}
