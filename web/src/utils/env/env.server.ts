import { z } from "zod";

// server env
const envSchema = z.object({
});
export const envServer = envSchema.parse(process.env);
