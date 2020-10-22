const withBundleAnalyzer = require("@next/bundle-analyzer");
const withPlugins = require("next-compose-plugins");

module.exports = {
	basePath: "/szakmaihet",
	async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
		return {
			"/": { page: "/" },
		};
	},
};

/*
module.exports = withPlugins([
	withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" }),
]);
*/
