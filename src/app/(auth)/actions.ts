"use server";

import { cookies } from "next/headers";

type setTokenType = {
    name: string;
    value: string;
    httpOnly?: boolean;
    path?: string;
};
export async function setToken(data: setTokenType) {
    cookies().set(data);
}
export async function deleteToken(data: string) {
    cookies().delete(data);
}
