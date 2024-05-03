import { z } from "zod";

// server env
const envSchema = z.object({
    CMT_BASE_URL: z.string(),
});
export const envServer = envSchema.parse(process.env);
