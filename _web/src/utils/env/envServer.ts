import { z } from "zod";

// server env
const envSchema = z.object({
    MAL_BASE_URL: z.string(),
    MAL_CLIENT_ID: z.string(),
    MAL_CLIENT_SECRET: z.string(),
});
export const envServer = envSchema.parse(process.env);
