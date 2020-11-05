const withBundleAnalyzer = require("@next/bundle-analyzer");
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

const basePath = process.env.NODE_ENV === "development" ? "" : "/szakmaihet";

module.exports = withImages({
	basePath,
	trailingSlash: true,
	assetPrefix: basePath,
});

/*
module.exports = withPlugins([
	withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" }),
]);
*/
