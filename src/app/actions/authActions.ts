"use server";
import { cache } from "react";
import { cookies } from "next/headers";
export const getAccessToken = cache(async (): Promise<string | undefined> => {
    const accessToken = cookies().get("access_token");
    return accessToken ? accessToken?.value : undefined;
});

export const setAccessToken = async (value: string): Promise<boolean> => {
    cookies().set({
        name: "access_token",
        value: value,
        httpOnly: true,
        path: "/",
    });
    return true
};
export const deleteAccessToken = async (name: string): Promise<void> => {
    cookies().delete(name);
};
