import Hero from "@/components/pages/manga/home/Hero";
import MostViewed from "@/components/pages/manga/home/MostViewed";
import NewReleases from "@/components/pages/manga/home/NewReleases";
import RecentUpdates from "@/components/pages/manga/home/RecentUpdates";

export default function Manga() {
    return (
        <>
            <Hero />
            <MostViewed />
            <RecentUpdates />
            <NewReleases />
        </>
    );
}
