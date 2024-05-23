import Icon from "@/components/icons/lucide";
import Link from "next/link";
import React from "react";

type SectionTitleType = {
    title: string;
    href?: string;
    titleRight?: React.ReactNode;
};
export function SectionTitle({ href, title, titleRight }: SectionTitleType) {
    return (
        <div className="flex justify-between items-center pt-8">
            <h2 className="grid gap-2 items-center grid-cols-[1fr_auto]">
                {href ? (
                    <>
                        <Link
                            href={"/"}
                            className="uppercase text-xl font-semibold text-foreground/80 hover:text-primary transition-colors ease-out"
                        >
                            {title}
                        </Link>
                        <Icon
                            name={"MoveRight"}
                            className="text-foreground/80"
                        />
                    </>
                ) : (
                    <span className="text-2xl font-bold">{title}</span>
                )}
            </h2>
            {titleRight}
        </div>
    );
}

export default function Home() {
    return (
        <main className="p-2 space-y-2">
            <section className="max-w-8xl mx-auto  border border-primary">
                <div className="h-96">
                    current carousel background
                </div>
                <section>
                    <h2 className="text-2xl font-bold text-center  border-y border-primary">Trending</h2>
                    <ul className="min-h-56">carousel content</ul>
                </section>
            </section>
            <div className="grid gap-2 lg:grid-cols-[3fr_1fr] max-w-8xl mx-auto">
                <aside>
                    <section>
                        <SectionTitle
                            title="Recently Updated"
                            titleRight={<div>options</div>}
                        />

                        <ul className="min-h-screen border border-primary">
                            content
                        </ul>
                    </section>
                    <section className="grid gap-2 lg:grid-cols-3">
                        <section>
                            <SectionTitle title="new release" href="/filter?by=new-release" />
                            <ul className="min-h-96 border border-primary">
                                content
                            </ul>
                        </section>
                        <section>
                            <SectionTitle title="new added" href="/filter?by=new-added" />
                            <ul className="min-h-96 border border-primary">
                                content
                            </ul>
                        </section>
                        <section>
                            <SectionTitle title="just completed" href="/filter?by=just-completed" />
                            <ul className="min-h-96 border border-primary">
                                content
                            </ul>
                        </section>
                    </section>
                </aside>
                <aside>
                    <SectionTitle
                        title="Top anime"
                        titleRight={<div>options</div>}
                    />
                    <ul className="min-h-96 border border-primary">content</ul>
                </aside>
            </div>
        </main>
    );
}
