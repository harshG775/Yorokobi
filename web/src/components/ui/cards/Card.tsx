import Image from "next/image";
import Link from "next/link";

export default function Card({ data }: any) {
    return (
        <li className="grid grid-rows-[1fr_auto] hover:scale-105 transition-transform ease-out duration-200 ">
            <Link href={`/watch/${data.id}`} className="h-56 overflow-hidden rounded-t-md">
                <Image
                    src={data.image}
                    alt={data.title}
                    width={170}
                    height={224}
                    className="w-full object-cover rounded-md"
                />
            </Link>
            <div className=" p-2 shadow-md rounded-md">
                <h3 className="font-medium text-sm line-clamp-2 hover:text-primary ">{data.title}</h3>
                <div className="text-xs">
                    <span>TV</span> - <span>23 min</span>
                </div>
            </div>
        </li>
    );
}
