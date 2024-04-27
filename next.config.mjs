import createJiti from "jiti";
import {fileURLToPath} from "node:url";

const jiti = createJiti(fileURLToPath(import.meta.url));

jiti("./src/app/env");

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'crafatar.com',
                port: '',
                pathname: '/renders/head/**',
            },
        ],
    },
};

export default nextConfig;
