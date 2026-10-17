import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
	// Export a static site so GitHub Pages can host it without a Node server
	output: "export",
	basePath,
	assetPrefix: basePath || undefined,
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
