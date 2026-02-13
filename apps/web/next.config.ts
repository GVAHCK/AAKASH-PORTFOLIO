import path from "node:path";
import type { NextConfig } from "next";

const repoRoot = path.resolve(__dirname, "../..");
const nextConfig: NextConfig = {
	experimental: {
		// ppr: true, // Deprecated in Next.js 16
	},
	outputFileTracingRoot: repoRoot,
	turbopack: {
		// Ensure Turbopack can resolve workspace deps in the monorepo (bun store lives at repo root).
		root: repoRoot,
	},
	images: {
		remotePatterns: [
			{
				hostname: "avatar.vercel.sh",
			},
			{
				protocol: "https",
				hostname: "cdn.simpleicons.org",
			},
			{
				protocol: "https",
				hostname: "ui.shadcn.com",
			},
			{
				protocol: "https",
				hostname: "cursor.com",
			},
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
			},
		],
	},
};

export default nextConfig;
