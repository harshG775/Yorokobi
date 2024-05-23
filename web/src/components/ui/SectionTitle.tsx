import Link from "next/link";
import Icon from "@/components/icons/lucide";

type SectionTitleType = {
    title: string;
    href?: string;
    titleRight?: React.ReactNode;
};
export default function SectionTitle({ href, title, titleRight }: SectionTitleType) {
    return (
        <div className="flex justify-between items-center pt-8 mb-4">
            <h2 className="grid gap-2 items-center grid-cols-[1fr_auto]">
                {href ? (
                    <>
                        <Link
                            href={"/"}
                            className="uppercase text-xl font-semibold text-foreground/80 hover:text-primary transition-colors ease-out"
                        >
                            {title}
                        </Link>
                        <Icon
                            name={"MoveRight"}
                            className="text-foreground/80"
                        />
                    </>
                ) : (
                    <span className="text-2xl font-bold">{title}</span>
                )}
            </h2>
            {titleRight}
        </div>
    );
}
