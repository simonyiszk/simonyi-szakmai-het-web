const withBundleAnalyzer = require("@next/bundle-analyzer");
const withPlugins = require("next-compose-plugins");

const basePath = process.env.NODE_ENV === "development" ? "" : "/szakmaihet";

module.exports = {
	basePath,
};

/*
module.exports = withPlugins([
	withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" }),
]);
*/
