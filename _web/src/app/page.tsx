import Link from "next/link";
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="grid grid-cols-2 place-content-center gap-4">
                <Link
                    className="hover:text-indigo-600 text-neutral-400 font-bold"
                    href="/anime"
                >
                    Anime
                </Link>
                <Link
                    className="hover:text-rose-600 text-neutral-400 font-bold"
                    href="/manga"
                >
                    Manga
                </Link>
            </div>
        </main>
    );
}
