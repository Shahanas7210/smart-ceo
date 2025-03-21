const nextConfig = {
    // output:"export",
    images: {
        domains: ["placehold.co"],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; img-src *; media-src 'none'; script-src 'none'; sandbox;",
    },
   
};

export default nextConfig;