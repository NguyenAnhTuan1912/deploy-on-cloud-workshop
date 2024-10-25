import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: () => [
    {
      source: "/content",
      destination: `/content`,
      permanent: true,
    },
  ],
  reactStrictMode: true,
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },
}

export default withNextra(nextConfig)