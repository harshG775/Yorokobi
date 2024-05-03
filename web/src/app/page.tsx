import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col justify-center items-center">
            <h1>
                <Link href="/anime">Home</Link>
            </h1>
        </main>
    );
}
