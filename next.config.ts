import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        // Esto captura lo que viene de NEXT_PUBLIC_API_URL
        source: "/api/:path*", 
        // Esto lo manda a tu servidor de Go
        destination: "http://localhost:8080/api/:path*", 
      },
    ];
  },
};

export default nextConfig;