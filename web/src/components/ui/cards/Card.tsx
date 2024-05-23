import Image from "next/image";
import Link from "next/link";

export default function Card({ data }: any) {
    return (
        <li className="group overflow-hidden rounded-md grid grid-rows-[3fr_1fr] hover:scale-105 transition-transform ease-out duration-200">
            <Link href={`/watch/${data.id}`}>
                <Image
                    src={data.image}
                    alt={data.title}
                    width={170}
                    height={224}
                    className="h-full w-full"
                />
            </Link>
            <Link href={`/watch/${data.id}`} className="px-2 shadow-md rounded-md grid grid-rows-2">
                <h3 className="font-medium text-sm  group-hover:text-primary ">
                    <span className="line-clamp-2">{data.title}</span>
                </h3>
                <div className="text-xs">
                    <span>TV</span> - <span>23 min</span>
                </div>
            </Link>
        </li>
    );
}
