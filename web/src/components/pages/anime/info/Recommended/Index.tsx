"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
type RecommendedProps = {
    data: {
        id: number;
        recommendations: {
            node: {
                id: number;
                title: string;
                main_picture: {
                    large: string;
                    medium: string;
                };
            };
            num_recommendations: number;
        }[];
    };
};
export default function Recommended({ data }: RecommendedProps) {
    const { recommendations } = data;

    console.log(data);
    return (
        <Section title="Recommended">
            <ListItem>
                {recommendations.map(({ node, num_recommendations }) => (
                    <List key={node.id}>
                        <Link
                            href={`/anime/${node.id}`}
                            className={
                                "flex rounded-md overflow-hidden bg-neutral-200/50 hover:bg-neutral-200 focus:bg-neutral-200 active:bg-neutral-200"
                            }
                            key={node.id}
                        >
                            <div className="h-full grid grid-flow-col gap-4 items-center">
                                <Image
                                    className="h-32 object-cover"
                                    src={node.main_picture.medium}
                                    alt={node.title}
                                    width={96}
                                    height={128}
                                />
                                <div className="space-y-2 p-2">
                                    <p className="text-lg font-bold tracking-tight text-neutral-800">{node.title}</p>
                                    <div className="text-neutral-500 capitalize">Recommend by: {num_recommendations}</div>
                                </div>
                            </div>
                        </Link>
                    </List>
                ))}
            </ListItem>
        </Section>
    );
}

type ListItemProps = {
    children: React.ReactNode;
};
type ListProps = {
    children: React.ReactNode;
};
type SectionProps = {
    title: string;
    children: React.ReactNode;
};

export function List({ children }: ListItemProps) {
    return <li>{children}</li>;
}
export function ListItem({ children }: ListProps) {
    return (
        <ul className="max-h-[1028px] overflow-y-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-none gap-2 py-2">
            {children}
        </ul>
    );
}
function Section({ title, children }: SectionProps) {
    return (
        <section>
            <h2 className="p-2 text-xl font-semibold text-rose-500">{title}</h2>
            {children}
        </section>
    );
}
