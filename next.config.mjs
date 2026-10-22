/** Static export: works on Vercel Hobby AND Cloudflare Pages (output dir: out) */
const nextConfig = {
  output: "export",
  images: { unoptimized: true }, // images are pre-compressed with `npm run images`
  reactStrictMode: true,
  poweredByHeader: false,
  compiler: { removeConsole: { exclude: ["error"] } },
};
export default nextConfig;
