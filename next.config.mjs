/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so the site can be deployed to Hostinger (or any static host)
  // exactly like your Reva Diagnostics workflow.
  output: "export",
  trailingSlash: true,
  images: {
    // Required for `output: export` — images are served as-is.
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
