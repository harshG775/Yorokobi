import HorizontalCard from "@/components/ui/cards/HorizontalCard";
import Image from "next/image";
import Link from "next/link";
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
                    small: string;
                };
            };
            relation_type: string;
            relation_type_formatted: string;
        }[];
    };
};
export default function Related({ data }: PlayerProps) {
    const { related_anime } = data;
    console.log(data);
    return (
        <Section title="Related">
            <SectionList>
                {related_anime.map(({ node }) => (
                    <SectionListItem key={node.id}>
                        <Link
                            href={`/anime/${node.id}`}
                            className={`flex mt-4 text-blue-500`}
                            key={node.id}
                        >
                            <Image
                                src={node.main_picture.large}
                                alt={""}
                                width={100}
                                height={100}
                            />
                            <span className="text-sm">{node.title}</span>
                        </Link>
                    </SectionListItem>
                ))}
            </SectionList>
        </Section>
    );
}




type SectionProps = {
    title: string;
    children: React.ReactNode;
};

function Section({ title, children }: SectionProps) {
    return (
        <section className="bg-neutral-200">
            <div>
                <h2 className="text-xl font-semibold text-rose-500">{title}</h2>
            </div>
            {children}
        </section>
    );
}
type SectionListProps = {
    children: React.ReactNode;
};
function SectionList({children}:SectionListProps) {

    return (
        <ul className="max-h-full overflow-y-auto ">
            {children}
        </ul>
    )
}
type SectionListItemProps = {
    children: React.ReactNode;
};
function SectionListItem({children}:SectionListItemProps) {
    return (
        <li>
            {children}
        </li>
    )
}