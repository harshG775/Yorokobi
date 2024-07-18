import { PropsWithChildren } from "react";
import UserDropdown from "./_components/user/UserDropdown";
import Link from "next/link";
import { getAccessToken } from "../actions";
import { Button } from "@/components/ui/button";
import { serverEnv } from "@/lib/env/server.env";

export default async function PagesLayout({ children }: PropsWithChildren) {
    const accessToken = await getAccessToken();

    const client_id = serverEnv.AL_CLIENT_ID;

    return (
        <>
            <nav className="p-2 flex justify-between container">
                <ul>
                    <li>
                        <Link href="/" className="text-primary hover:underline">
                            Home
                        </Link>
                    </li>
                </ul>
                {accessToken ? (
                    <UserDropdown accessToken={accessToken} />
                ) : (
                    <Button variant={"link"}>
                        <a
                            href={`https://anilist.co/api/v2/oauth/authorize?client_id=${client_id}&response_type=token`}
                        >
                            Login with AniList
                        </a>
                    </Button>
                )}
            </nav>
            {children}
        </>
    );
}
