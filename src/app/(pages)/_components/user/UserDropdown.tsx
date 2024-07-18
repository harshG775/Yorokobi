"use client";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AL } from "@/lib/axios/api.anilist";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { deleteAccessToken } from "@/app/actions/authActions";
import { Button } from "@/components/ui/button";

type UserDropdownProps = {
    className?: string;
    accessToken: string;
};
export default function UserDropdown({
    className,
    accessToken,
}: UserDropdownProps) {
    const router = useRouter();
    const handleLogout = async () => {
        await deleteAccessToken("access_token");
        router.refresh();
    };
    const { data, status } = useQuery({
        queryKey: ["userProfile"],
        queryFn: () => {
            return AL({
                query: `
                    {
                        Viewer {
                            id
                            name
                            avatar {
                                large
                                medium
                            }
                            bannerImage
                        }
                    }
                `,
                accessToken: accessToken,
            });
        },
    });
    if (status === "pending")
        return (
            <div className="rounded-full w-8 h-8 overflow-hidden bg-foreground/50"></div>
        );
    if (status === "error") return <div className="rounded-full w-8 h-8 overflow-hidden bg-red-600/50">Error</div>;

    const user = data?.data?.data?.Viewer;
    // TODO: if accessToken is revoked, re-authenticate user
    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                className={cn(
                    "rounded-full w-8 h-8 overflow-hidden",
                    className
                )}
            >
                <img
                    src={user.avatar.large}
                    alt={user.name}
                    width={100}
                    height={100}
                />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Button
                        className="w-full cursor-pointer"
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}