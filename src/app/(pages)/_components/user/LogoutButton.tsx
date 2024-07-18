"use client";
import { deleteToken } from "@/app/(auth)/actions";
import { Button } from "@/components/ui/button";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
    const router = useRouter();
    const handleLogout = async () => {
        await deleteToken("access_token");
        router.refresh();
    };
    return (
        <DropdownMenuItem asChild>
            <Button className="w-full cursor-pointer" onClick={handleLogout}>
                Logout
            </Button>
        </DropdownMenuItem>
    );
}
