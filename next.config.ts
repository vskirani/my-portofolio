import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required so the Docker runtime only needs the traced standalone output.
  output: "standalone",
};

export default nextConfig;
