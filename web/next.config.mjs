/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     domains: ["https://cdn.myanimelist.net"],
    // },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
