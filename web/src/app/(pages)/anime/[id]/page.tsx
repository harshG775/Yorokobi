import { getInfoById } from "@/services/GraphQL/anilist/Axios_aniList";

type AnimePageProps = {
    params: { id: string };
    searchParams: { s?: string; ep?: string };
};

export default async function AnimePage({
    params,
    searchParams,
}: AnimePageProps) {
    const [id] = params.id.split("-");
    // const { s, ep } = searchParams || {};
    const data = await getInfoById(id);
    console.log(data);
    return (
        <main className="space-y-2  py-2  [&_section]:border [&_section]:border-primary">
            <div className="container
                grid gap-2 lg:grid-cols-[1fr_300px]
                ">
                <div className="lg:order-1 grid gap-2 2xl:grid-cols-[200px_1fr]">
                    <section className="order-1 2xl:order-2 aspect-video">Player</section>
                    <section className="order-2 2xl:order-1 min-h-40">Episode</section>
                </div>
                <section className="lg:order-3">
                    <div className="min-h-96">Overview</div>
                    <div className="min-h-40">seasons if there is any</div>
                </section>
                <section className="lg:order-2 lg:row-span-2 min-h-96">Related</section>
            </div>
            <div className="container grid gap-2 lg:grid-cols-[1fr_300px]">
                <section className="min-h-96">Comments</section>
                <section className="min-h-96">Recommended</section>
            </div>
        </main>
    );
}
