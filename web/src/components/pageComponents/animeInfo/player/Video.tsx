import { useGetAvailableServers } from "@/services/queries";

type VideoPropsType = {
    episode: string;
};
export default function Video({ episode }: VideoPropsType) {
    const { data, status } = useGetAvailableServers(episode);
    if (status === "pending") {
        return (
            <div className="w-full aspect-video grid place-content-center">
                Loading...
            </div>
        );
    }
    if (status === "error") {
        return (
            <div className="w-full aspect-video grid place-content-center">
                Error
            </div>
        );
    }
    return (
        <div className="w-full aspect-video">
            <iframe
                src={data[0].url}
                key={data[0].url}
                className="w-full h-full"
                allowFullScreen
                
            ></iframe>
        </div>
    );
}
