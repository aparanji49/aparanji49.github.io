/** @type {import('next').NextConfig} */

// const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    // reactStrictMode: true,
    output: 'export',
    images:{
     unoptimized: true
    },
    trailingSlash: true,
    assetPrefix: '',
    // assetPrefix:  isProd ? '/aparanji49.github.io' : '',
    // basePath: isProd ? '/aparanji49.github.io' : '',
};

export default nextConfig;
