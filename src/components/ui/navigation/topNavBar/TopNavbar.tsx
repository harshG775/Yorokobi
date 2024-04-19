"use client";
import Link from "next/link";
import { I } from "@/components/icons/iconify/I";
import React from "react";
import { ToggleState } from "@/app/(home)/layout";

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
                            <I
                                className="text-3xl"
                                icon="material-symbols:menu"
                            />
                        </button>
                    </li>
                    <li className="w-full">
                        <Link href={"/"} className="text-2xl">
                            CrunchesRoll
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}