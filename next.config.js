const withNextra = require("nextra")({
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
