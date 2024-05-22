import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
export type Type_sidebarLinks={
    linkTo:string,
    title:string,
    Icon:string,
}
export default function SidebarLink({linkTo,title,Icon}:Type_sidebarLinks) {
    const paths = usePathname();
    return (
        <li>
            <Link href={linkTo} className={`flex gap-2 font-semibold ${paths.startsWith(linkTo)?"text-blue-600":"text-neutral-900"}`}>
                <Icon/>
                <span>{title}</span>
            </Link>
        </li>
    );
}