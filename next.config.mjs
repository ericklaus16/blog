/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/blog',
    output: 'export',
    images: {
        loader: 'akamai',
        path: '',
    },
    assetPrefix: './',
};

export default nextConfig;
