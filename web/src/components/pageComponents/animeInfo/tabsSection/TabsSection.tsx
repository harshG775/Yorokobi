"use client";
import Tabs from "@/components/ui/tabs/Tabs";
const tabsData = ["overview", "relations", "characters", "staff"];
export default function TabsSection() {
    return (
        <>
            <Tabs
                tabData={tabsData}
                render={({ currentTab }: { currentTab: string }) => {
                    switch (currentTab) {
                        case "overview":
                            return (
                                <section className="max-w-8xl mx-auto min-h-96">
                                    <h3>overview</h3>
                                </section>
                            );
                        case "relations":
                            return (
                                <section className="max-w-8xl mx-auto min-h-96">
                                    <h3>Relations</h3>
                                </section>
                            );
                        case "characters":
                            return (
                                <section className="max-w-8xl mx-auto min-h-96">
                                    <h3>Characters</h3>
                                </section>
                            );
                        case "staff":
                            return (
                                <section className="max-w-8xl mx-auto min-h-96">
                                    <h3>Staff</h3>
                                </section>
                            );
                        default:
                            return "not found";
                    }
                }}
            />
        </>
    );
}
