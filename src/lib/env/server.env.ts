import { z } from "zod";
const envSchema = z.object({
    AL_CLIENT_SECRET: z.string().min(1, "AL_CLIENT_SECRET not found"),
    AL_CLIENT_ID: z.string().min(1, "AL_CLIENT_ID not found"),
    AL_BASEURL_QL: z.string().min(1, "AL_BASEURL_QL not found"),
    AL_REDIRECT_URI: z.string().min(1, "AL_REDIRECT_URI not found"),

    CMT_BASEURL: z.string().min(1, "CMT_BASEURL not found"),
});
export const serverEnv = envSchema.parse(process.env);
