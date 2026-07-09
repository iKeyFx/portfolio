import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Screenshots are self-authored placeholder SVGs until real captures land.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
