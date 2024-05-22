import { Flame } from "lucide-react";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href={"/"} className="grid grid-flow-col items-center text-2xl">
            <Flame/>
            Natsu
        </Link>
    );
}
