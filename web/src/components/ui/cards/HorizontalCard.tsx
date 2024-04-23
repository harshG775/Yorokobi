import Image from "next/image";
import React from "react";

type HorizontalCardProps = {
    cardData: any
}
export default function HorizontalCard({cardData}:HorizontalCardProps) {
    // const {} = cardData
    return (
        <div>
            <div>
                <Image
                    src="/images/1.jpg"
                    alt="image"
                    width={200}
                    height={200}
                />
            </div>
            <span>{"sideStory"}</span>
            <h1>{"title"}</h1>
            <div>
                <span>{"media_type"}</span>
                <span>{"700k"}</span>
            </div>
            
        </div>
    );
}
