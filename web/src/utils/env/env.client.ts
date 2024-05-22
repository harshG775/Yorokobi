import { z } from "zod";
const envClientSchema = z.object({
    NEXT_PUBLIC_CMT_BASEURL: z.string(),
});
export const envClient = envClientSchema.parse({
    NEXT_PUBLIC_CMT_BASEURL: process.env.NEXT_PUBLIC_CMT_BASEURL,
});
