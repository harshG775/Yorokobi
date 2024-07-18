import { AL_Token } from "@/lib/axios/api.anilist";
import { useQuery } from "@tanstack/react-query";
import { userQuery } from "../query/user.query";

export const useUserProfile = () => {
    return useQuery({
        queryKey: ["UserProfile"],
        queryFn: async () => AL_Token(userQuery),
    });
};
