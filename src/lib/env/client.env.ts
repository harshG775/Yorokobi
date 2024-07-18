"use client";
import { z } from "zod";
const envSchema = z.object({
    NEXT_PUBLIC_AL_BASEURL_QL: z.string().min(1, "AL_BASEURL_QL not found"),
});
export const clientEnv = envSchema.parse({
    NEXT_PUBLIC_AL_BASEURL_QL: process.env.NEXT_PUBLIC_AL_BASEURL_QL,
});
