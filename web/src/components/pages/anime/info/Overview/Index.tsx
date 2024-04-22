"use client";
import Image from "next/image";
import React from "react";
export type OverviewProps = {
    data: {
        main_picture: {
            large: string;
            medium: string;
            small: string;
        };
        title: string;
        synopsis: string;
        rating: string;

        media_type: string;
        // country
        start_season: {
            // premier
            season: string;
            year: number;
        };
        genres: {
            id: number;
            name: string;
        }[];

        start_date: string;
        end_date: string;

        status: string;
        mean: number; // mal rating
        num_scoring_users: number; // mal rating by user

        average_episode_duration: number; //in seconds
        num_episodes: number;
        studios: {
            id: number;
            name: string;
        }[];
        // producers
    };
};
export default function Overview({ data }: OverviewProps) {
    console.log(data);
    return (
        <div>
            <div>
                <div>
                    <Image
                        alt={data.title}
                        width={200}
                        height={200}
                        src={data.main_picture.large}
                        onError={(e: any) => {
                            console.log("image error");
                            e.target.src = data.main_picture.small;
                        }}
                    />
                </div>
                <h4>{data.title}</h4>
                <p>{data.synopsis}</p>
                <span>Rating: {data.rating}</span>
            </div>
            <ul className="[&>li]:grid [&>li]:grid-cols-[1fr_2fr]">
                <li>
                    <span>Type:</span> <span>{data.media_type}</span>
                </li>
                <li>{/* country */}</li>
                <li>
                    <span>Premiered</span>
                    <span>
                        {data.start_season.year} {data.start_season.season}
                    </span>
                </li>
                <li>
                    <span>Genres:</span>
                    <span className="flex gap-2 flex-wrap">
                        {data.genres.map((genre) => (
                            <span key={genre.id}>{genre.name},</span>
                        ))}
                    </span>
                </li>
                <li>
                    <span>status</span>
                    <span>{data.status}</span>
                </li>
                <li>
                    <span>MAL:</span>
                    <span>
                        {data.mean}
                        <span>by {data.num_scoring_users} users</span>
                    </span>
                </li>
                <li>
                    <span>Episodes:</span>
                    <span>{data.num_episodes}</span>
                </li>
                <li>
                    <span>Duration:</span>
                    <span>{data.average_episode_duration}</span>
                </li>
                <li>
                    <span>Studios:</span>
                    <span className="flex gap-2 flex-wrap">
                        {data.studios.map((studio) => (
                            <span key={studio.id}>{studio.name},</span>
                        ))}
                    </span>
                </li>
            </ul>
        </div>
    );
}
