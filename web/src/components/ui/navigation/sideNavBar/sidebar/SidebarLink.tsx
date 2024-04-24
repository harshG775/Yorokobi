import Link from "next/link";

import { usePathname } from "next/navigation";
import React from "react";
import { type LucideIcon } from "lucide-react";
export type Type_sidebarLinks={
    linkTo:string,
    title:string,
    Icon:LucideIcon,
}
export default function SidebarLink({linkTo,title,Icon}:Type_sidebarLinks) {
    const paths = usePathname();
    return (
        <li>
            <Link href={linkTo} className={`flex gap-2 font-semibold ${paths.startsWith(linkTo)?"text-blue-600":"text-white"}`}>
                <Icon />
                <span>{title}</span>
            </Link>
        </li>
    );
}