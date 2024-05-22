import { z } from "zod";
const envClientSchema = z.object({
    NEXT_PUBLIC_MAL_BASE_URL: z.string(),
});
export const envClient = envClientSchema.parse({
    NEXT_PUBLIC_MAL_BASE_URL: process.env.NEXT_PUBLIC_MAL_BASE_URL,
});
