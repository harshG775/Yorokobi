import SectionTitle from "../_components/SectionTitle";
import RecentEpisodes from "./_components/RecentEpisodes";

export default function Home() {
    return (
        <main className="p-2 space-y-2">
            <section className="max-w-8xl mx-auto  border border-primary">
                <div className="h-96">current carousel background</div>
                <section>
                    <h2 className="text-2xl font-bold text-center  border-y border-primary">
                        Trending
                    </h2>
                    <ul className="min-h-56">carousel content</ul>
                </section>
            </section>
            <div className="grid gap-2 lg:grid-cols-[3fr_1fr] max-w-8xl mx-auto">
                <aside>
                    <RecentEpisodes />
                    <section className="grid gap-2 lg:grid-cols-3">
                        <section>
                            <SectionTitle
                                title="new release"
                                href="/filter?by=new-release"
                            />
                            <ul className="min-h-96 border border-primary">
                                content
                            </ul>
                        </section>
                        <section>
                            <SectionTitle
                                title="new added"
                                href="/filter?by=new-added"
                            />
                            <ul className="min-h-96 border border-primary">
                                content
                            </ul>
                        </section>
                        <section>
                            <SectionTitle
                                title="just completed"
                                href="/filter?by=just-completed"
                            />
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
