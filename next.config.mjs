/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ['placehold.co'],
        dangerouslyAllowSVG: true, // Allow SVG images
        contentSecurityPolicy: "default-src 'self'; img-src *; media-src 'none'; script-src 'none'; sandbox;", // Extra security

    }
};

export default nextConfig;
