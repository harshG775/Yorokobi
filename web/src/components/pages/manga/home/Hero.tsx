"use client";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
const items = [
    {
        id: "1",
        title: "The Rising of the Shield Hero",
        imageSrc:
            "https://static.mangafire.to/i/1/11/e136d1558c65e78debc4701d8a25e56f.jpg",
        releasingData: "2022",
        description:
            "Naofumi Iwatani is a 20-year-old otaku who finds himself inexplicably transported to the kingdom of Melromarc. Alongside three other summoned individuals, Naofumi discovers that he's a Cardinal Hero, tasked with defeating the dangerous \"Waves of Catastrophe.\" Unfortunately, Naofumi is assigned the title of \"Shield Hero,\" the weakest of the Four. To make matters worse, he's given only a meager shield and no other powerful tools or weapons. The kingdom's mercenaries refuse to assist him except for Malty Melromarc, the stunning princess. However, Malty betrays Naofumi by stealing his belongings and falsely accusing him of rape. Though Naofumi is spared from execution due to his status as a Cardinal Hero, he's forced to face the repercussions of his supposed crime. Struggling to find allies, Naofumi purchases the help of a demi-human slave girl named Raphtalia. Together, they embark on a dangerous quest for justice and revenge, encountering the mysteries of the kingdom along the way. ",
        chapters: "104",
        volume: "26",
        genres: ["Action", "Drama", "Isekai"],
    },
    {
        id: "2",
        title: "The Rising of the Shield Hero",
        imageSrc:
            "https://static.mangafire.to/i/1/11/e136d1558c65e78debc4701d8a25e56f.jpg",
        releasingData: "2022",
        description:
            "Naofumi Iwatani is a 20-year-old otaku who finds himself inexplicably transported to the kingdom of Melromarc. Alongside three other summoned individuals, Naofumi discovers that he's a Cardinal Hero, tasked with defeating the dangerous \"Waves of Catastrophe.\" Unfortunately, Naofumi is assigned the title of \"Shield Hero,\" the weakest of the Four. To make matters worse, he's given only a meager shield and no other powerful tools or weapons. The kingdom's mercenaries refuse to assist him except for Malty Melromarc, the stunning princess. However, Malty betrays Naofumi by stealing his belongings and falsely accusing him of rape. Though Naofumi is spared from execution due to his status as a Cardinal Hero, he's forced to face the repercussions of his supposed crime. Struggling to find allies, Naofumi purchases the help of a demi-human slave girl named Raphtalia. Together, they embark on a dangerous quest for justice and revenge, encountering the mysteries of the kingdom along the way. ",
        chapters: "104",
        volume: "26",
        genres: ["Action", "Drama", "Isekai"],
    },
    {
        id: "3",
        title: "The Rising of the Shield Hero",
        imageSrc:
            "https://static.mangafire.to/i/1/11/e136d1558c65e78debc4701d8a25e56f.jpg",
        releasingData: "2022",
        description:
            "Naofumi Iwatani is a 20-year-old otaku who finds himself inexplicably transported to the kingdom of Melromarc. Alongside three other summoned individuals, Naofumi discovers that he's a Cardinal Hero, tasked with defeating the dangerous \"Waves of Catastrophe.\" Unfortunately, Naofumi is assigned the title of \"Shield Hero,\" the weakest of the Four. To make matters worse, he's given only a meager shield and no other powerful tools or weapons. The kingdom's mercenaries refuse to assist him except for Malty Melromarc, the stunning princess. However, Malty betrays Naofumi by stealing his belongings and falsely accusing him of rape. Though Naofumi is spared from execution due to his status as a Cardinal Hero, he's forced to face the repercussions of his supposed crime. Struggling to find allies, Naofumi purchases the help of a demi-human slave girl named Raphtalia. Together, they embark on a dangerous quest for justice and revenge, encountering the mysteries of the kingdom along the way. ",
        chapters: "104",
        volume: "26",
        genres: ["Action", "Drama", "Isekai"],
    },
    {
        id: "4",
        title: "The Rising of the Shield Hero",
        imageSrc:
            "https://static.mangafire.to/i/1/11/e136d1558c65e78debc4701d8a25e56f.jpg",
        releasingData: "2022",
        description:
            "Naofumi Iwatani is a 20-year-old otaku who finds himself inexplicably transported to the kingdom of Melromarc. Alongside three other summoned individuals, Naofumi discovers that he's a Cardinal Hero, tasked with defeating the dangerous \"Waves of Catastrophe.\" Unfortunately, Naofumi is assigned the title of \"Shield Hero,\" the weakest of the Four. To make matters worse, he's given only a meager shield and no other powerful tools or weapons. The kingdom's mercenaries refuse to assist him except for Malty Melromarc, the stunning princess. However, Malty betrays Naofumi by stealing his belongings and falsely accusing him of rape. Though Naofumi is spared from execution due to his status as a Cardinal Hero, he's forced to face the repercussions of his supposed crime. Struggling to find allies, Naofumi purchases the help of a demi-human slave girl named Raphtalia. Together, they embark on a dangerous quest for justice and revenge, encountering the mysteries of the kingdom along the way. ",
        chapters: "104",
        volume: "26",
        genres: ["Action", "Drama", "Isekai"],
    },
    {
        id: "5",
        title: "The Rising of the Shield Hero",
        imageSrc:
            "https://static.mangafire.to/i/1/11/e136d1558c65e78debc4701d8a25e56f.jpg",
        releasingData: "2022",
        description:
            "Naofumi Iwatani is a 20-year-old otaku who finds himself inexplicably transported to the kingdom of Melromarc. Alongside three other summoned individuals, Naofumi discovers that he's a Cardinal Hero, tasked with defeating the dangerous \"Waves of Catastrophe.\" Unfortunately, Naofumi is assigned the title of \"Shield Hero,\" the weakest of the Four. To make matters worse, he's given only a meager shield and no other powerful tools or weapons. The kingdom's mercenaries refuse to assist him except for Malty Melromarc, the stunning princess. However, Malty betrays Naofumi by stealing his belongings and falsely accusing him of rape. Though Naofumi is spared from execution due to his status as a Cardinal Hero, he's forced to face the repercussions of his supposed crime. Struggling to find allies, Naofumi purchases the help of a demi-human slave girl named Raphtalia. Together, they embark on a dangerous quest for justice and revenge, encountering the mysteries of the kingdom along the way. ",
        chapters: "104",
        volume: "26",
        genres: ["Action", "Drama", "Isekai"],
    },
    {
        id: "6",
        title: "The Rising of the Shield Hero",
        imageSrc:
            "https://static.mangafire.to/i/1/11/e136d1558c65e78debc4701d8a25e56f.jpg",
        releasingData: "2022",
        description:
            "Naofumi Iwatani is a 20-year-old otaku who finds himself inexplicably transported to the kingdom of Melromarc. Alongside three other summoned individuals, Naofumi discovers that he's a Cardinal Hero, tasked with defeating the dangerous \"Waves of Catastrophe.\" Unfortunately, Naofumi is assigned the title of \"Shield Hero,\" the weakest of the Four. To make matters worse, he's given only a meager shield and no other powerful tools or weapons. The kingdom's mercenaries refuse to assist him except for Malty Melromarc, the stunning princess. However, Malty betrays Naofumi by stealing his belongings and falsely accusing him of rape. Though Naofumi is spared from execution due to his status as a Cardinal Hero, he's forced to face the repercussions of his supposed crime. Struggling to find allies, Naofumi purchases the help of a demi-human slave girl named Raphtalia. Together, they embark on a dangerous quest for justice and revenge, encountering the mysteries of the kingdom along the way. ",
        chapters: "104",
        volume: "26",
        genres: ["Action", "Drama", "Isekai"],
    },
    {
        id: "7",
        title: "The Rising of the Shield Hero",
        imageSrc:
            "https://static.mangafire.to/i/1/11/e136d1558c65e78debc4701d8a25e56f.jpg",
        releasingData: "2022",
        description:
            "Naofumi Iwatani is a 20-year-old otaku who finds himself inexplicably transported to the kingdom of Melromarc. Alongside three other summoned individuals, Naofumi discovers that he's a Cardinal Hero, tasked with defeating the dangerous \"Waves of Catastrophe.\" Unfortunately, Naofumi is assigned the title of \"Shield Hero,\" the weakest of the Four. To make matters worse, he's given only a meager shield and no other powerful tools or weapons. The kingdom's mercenaries refuse to assist him except for Malty Melromarc, the stunning princess. However, Malty betrays Naofumi by stealing his belongings and falsely accusing him of rape. Though Naofumi is spared from execution due to his status as a Cardinal Hero, he's forced to face the repercussions of his supposed crime. Struggling to find allies, Naofumi purchases the help of a demi-human slave girl named Raphtalia. Together, they embark on a dangerous quest for justice and revenge, encountering the mysteries of the kingdom along the way. ",
        chapters: "104",
        volume: "26",
        genres: ["Action", "Drama", "Isekai"],
    },
];

type HeroItemsProps = {
    itemData: {
        id: string;
        title: string;
        imageSrc: string;
        releasingData: string;
        description: string;
        chapters: string;
        volume: string;
        genres: string[];
    };
};
function HeroItems(props: HeroItemsProps) {
    const {
        title,
        imageSrc,
        releasingData,
        description,
        chapters,
        volume,
        genres,
    } = props.itemData;
    return (
        <div>
            <Image src={imageSrc} alt={title} width={200} height={300} />
            <span>{releasingData}</span>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Chapters: {chapters}</p>
            <p>Volume: {volume}</p>
            <div className="flex gap-1">
                {genres.map((genre) => (
                    <span
                        key={genre}
                        className="rounded-full bg-slate-200 px-2 py-1 text-xs"
                    >
                        {genre}
                    </span>
                ))}
            </div>
        </div>
    );
}
export default function Hero() {
    return (
        <Carousel>
            <CarouselContent>
                {items.map((item) => (
                    <CarouselItem key={item.id} className="h-56 basis-1/3">
                        <HeroItems itemData={item} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="pt-7 flex justify-center sm:justify-end">
                <CarouselPrevious className="static" />
                <CarouselNext className="static" />
            </div>
        </Carousel>
    );
}
