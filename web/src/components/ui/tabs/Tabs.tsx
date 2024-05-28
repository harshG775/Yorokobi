"use client";
import { useState } from "react";

function Tab({ tab, activeTab, setActiveTab }: any) {
    const { title, id } = tab;
    return (
        <li>
            <button
                className={` ${
                    activeTab === id
                        ? "bg-primary text-primary-foreground"
                        : " text-primary hover:bg-primary-foreground focus-visible:bg-primary-foreground"
                } focus-outline w-full pb-1 pt-2 h-6 sm:h-8 sm:text-sm text-xs rounded-sm sm:rounded-md cursor-pointer font-medium uppercase flex items-center justify-center
            
            `}
                onClick={() => setActiveTab(id)}
            >
                {title}
            </button>
        </li>
    );
}
type MaxFourArray<T> = 
  [] | [T] | [T, T] | [T, T, T] | [T, T, T, T];
type TabPropsType = {
    tabData: MaxFourArray<{ title: string; render: JSX.Element }>;
};
export default function Tabs({ tabData }: TabPropsType) {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <>
            <ul className="max-w-8xl w-full mx-auto shadow-md shadow-primary/10 py-2 container grid gap-2 sm:grid-cols-[repeat(auto-fill,minmax(120px,1fr))]">
                {tabData.map((tab: { title: string }, i: number) => (
                    <Tab
                        key={i}
                        tab={{ id: i, ...tab }}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                ))}
            </ul>
            {tabData[activeTab].render}
        </>
    );
}
