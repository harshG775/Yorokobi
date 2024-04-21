import axios from "axios";
import Image from "next/image";
import React from "react";

type props = {
    params: { id: string };
};
export default async function page({ params }: props) {
    try {
        const { data } = await axios.get(
            `https://api.jikan.moe/v4/anime/${params.id}`
        );
        console.log(data.data);
        return (
            <div>
                <Image
                    alt={data.data.title}
                    width={200}
                    height={200}
                    src={data.data.images.jpg.large_image_url}
                />
                <h4 className="font-bold">{data.data.title}</h4>
                <p>{data.data.synopsis}</p>
            </div>
        );
    } catch (error: any) {
        return (
            <div className="grid place-content-center min-h-96">
                {error?.response?.data?.message}
            </div>
        );
    }
}
