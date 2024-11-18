/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost', 'loremflickr.com'], // Tambahkan localhost dan domain eksternal di sini
    },
}

export default nextConfig;
