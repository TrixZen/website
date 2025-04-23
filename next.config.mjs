/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/unegui",
        destination: "http://localhost:8080/scrape/unegui",
      },
      {
        source: "/api/excavator",
        destination: "http://localhost:8080/scrape/excavator",
      }
    ];
  },
};

export default nextConfig;
