import Link from "next/link";

export default function RootPage() {
    return (
        <main className="grid place-content-center gap-2 h-screen text-center">
            <h1 className="text-2xl font-bold text-primary">Onyx</h1>
            <p className=" text-xl max-w-96 text-foreground/50">
                Anime Streaming Platform {" "}
                <br />
                <Link
                    href="/home"
                    className="hover:underline text-primary font-medium"
                >
                    Go to Home
                </Link>
            </p>
        </main>
    );
}
