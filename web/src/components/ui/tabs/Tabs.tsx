"use client";
import { useState } from "react";

function Tab({ tab, activeTab, setActiveTab }: any) {
    const { name, id } = tab;
    return (
        <li>
            <button
                className={` ${
                    activeTab === id
                        ? "bg-primary text-primary-foreground"
                        : " text-primary hover:bg-primary/80 hover:text-primary-foreground"
                } w-full   pb-1 pt-2 h-6 sm:h-8 sm:text-sm text-xs rounded-md cursor-pointer font-medium uppercase flex items-center justify-center
            
            `}
                onClick={() => setActiveTab(id)}
            >
                {name}
            </button>
        </li>
    );
}
export default function Tabs({ tabData, render }: any) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <ul
                className="max-w-8xl mx-auto shadow-md g-primary-foreground/50 p-2 grid sm:gap-2 sm:grid-cols-[repeat(auto-fill,minmax(120px,1fr))]"
            >
                {tabData.map((tab: string, i: number) => (
                    <Tab
                        key={i}
                        tab={{ name: tab, id: i }}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                ))}
            </ul>
            {render({ currentTab: tabData[activeTab] })}
        </>
    );
}
