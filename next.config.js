/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // mandatory, otherwise won't export
  },
  // Optional: Change the output directory `out` -> `dist`
  // distDir: "build"
};

const withNextra = require("nextra")({
  nextConfig,
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra({
  redirects: () => [
    {
      source: "/content",
      destination: `/content`,
      permanent: true,
    },
  ],
  reactStrictMode: true,
});
