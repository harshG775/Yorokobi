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
        <main className="space-y-10 py-2">
            <div className="container py-2 
                grid gap-2 lg:grid-cols-[1fr_300px]
                ">
                <div className="lg:order-1 grid gap-2 2xl:grid-cols-[200px_1fr]">
                    <section className="order-2 2xl:order-1">Episode</section>
                    <section className="order-1 2xl:order-2 aspect-video">Player</section>
                </div>
                <section className="lg:order-3">Overview</section>
                <section className="lg:order-2 lg:row-span-2">Related</section>
            </div>
            <div className="container grid gap-y-10 gap-x-2 lg:grid-cols-[1fr_300px]">
                <section className="min-h-96">Comments</section>
                <section className="min-h-96">Similar</section>
                <section className="min-h-96">Recommended</section>
            </div>
        </main>
    );
}
