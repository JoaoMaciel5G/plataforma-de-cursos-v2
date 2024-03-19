/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "cdn.jsdelivr.net"
            },
            {
                hostname: "www.locaweb.com.br"
            }
        ],
    },
};

export default nextConfig;
