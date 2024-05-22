import { z } from "zod";

const envClientSchema = z.object({
    NEXT_PUBLIC_CMT_BASEURL: z.string(),
    NEXT_PUBLIC_AL_BASEURL_QL: z.string(),
    NEXT_PUBLIC_AL_ID: z.string(),
    NEXT_PUBLIC_AL_SECRET: z.string(),
    NEXT_PUBLIC_AL_REDIRECT_URI: z.string(),
});
export const envClient = envClientSchema.parse({
    NEXT_PUBLIC_CMT_BASEURL: process.env.NEXT_PUBLIC_CMT_BASEURL,
    NEXT_PUBLIC_AL_BASEURL_QL: process.env.NEXT_PUBLIC_AL_BASEURL_QL,
    NEXT_PUBLIC_AL_ID: process.env.NEXT_PUBLIC_AL_ID,
    NEXT_PUBLIC_AL_SECRET: process.env.NEXT_PUBLIC_AL_SECRET,
    NEXT_PUBLIC_AL_REDIRECT_URI: process.env.NEXT_PUBLIC_AL_REDIRECT_URI,
});
