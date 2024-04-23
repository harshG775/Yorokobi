"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
type PlayerProps = {
    data: {
        id: number;
        related_anime: {
            node: {
                id: number;
                title: string;
                main_picture: {
                    large: string;
                    medium: string;
                };
            };
            relation_type: string;
            relation_type_formatted: string;
        }[];
    };
};
export default function Related({ data }: PlayerProps) {
    const { related_anime } = data;
    const [relationOptions, setRelationOptions] = useState("side_story");
    const [filteredRelate, setFilteredRelate] = useState(related_anime);

    useEffect(() => {
        function filterRelated(filterBy:string) {
            const newData = related_anime.filter((item) => item.relation_type === filterBy);
            setFilteredRelate(newData);
        }
        filterRelated(relationOptions)
    }, [relationOptions])
    console.log(data)
    return (
        <Section title="Related">
            <div>
                <select name="relationOptions" value={relationOptions} onChange={(e)=>setRelationOptions(e.target.value)}>
                    <option value="side_story">Side Story</option>
                    <option value="summary">Summary</option>
                    <option value="sequel">Sequel</option>
                    <option value="prequel">Prequel</option>
                    <option value="alternative_setting">Alternative Setting</option>
                    <option value="alternative_version">Alternative Version</option>
                    <option value="parent_story">Parent Story</option>
                    <option value="full_story">Full Story</option>
                </select>
            </div>
            <ListItem>
                {filteredRelate.map(({ node ,relation_type}) => (
                    <List key={node.id}>
                        <Link
                            href={`/anime/${node.id}`}
                            className={"flex rounded-md overflow-hidden bg-neutral-200/50 hover:bg-neutral-200 focus:bg-neutral-200 active:bg-neutral-200"}
                            key={node.id}
                        >
                            <div className="h-full grid items-center">
                                <Image
                                    className=" h-32 rounded-md object-cover"
                                    src={node.main_picture.medium}
                                    alt={""}
                                    width={96}
                                    height={128}
                                />
                            </div>
                            <div>
                                <p className="text-sm">{node.title}</p>
                                <span>{relation_type}</span>
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
}
type ListProps = {
    children: React.ReactNode;
};
type SectionProps = {
    title: string;
    children: React.ReactNode;
};

export function List({children}:ListItemProps) {
    return (
        <li>
            {children}
        </li>
    )
}
export function ListItem({ children }: ListProps) {
    return (
        <ul className="max-h-[1028px] overflow-y-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-none gap-2 p-2">
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



