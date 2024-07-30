/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vkifcvvhrrkidnqcpfdq.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/Cabin-images/**",
      },
    ],
  },
  // output : 'export'
};

export default nextConfig;
