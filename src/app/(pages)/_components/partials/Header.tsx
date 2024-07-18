import Link from "next/link";
import UserDropdown from "../UserDropdown";
import { Button } from "@/components/ui/button";
import { getAccessToken } from "@/app/actions/authActions";
import { serverEnv } from "@/lib/env/server.env";

export default async function Header() {
    const accessToken = await getAccessToken();

    const client_id = serverEnv.AL_CLIENT_ID;
    return (
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
                <Button variant={"link"} asChild>
                    <a
                        href={`https://anilist.co/api/v2/oauth/authorize?client_id=${client_id}&response_type=token`}
                    >
                        Login with AniList
                    </a>
                </Button>
            )}
        </nav>
    );
}
