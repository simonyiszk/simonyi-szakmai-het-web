const basePath = process.env.NODE_ENV === "development" ? "" : "/szakmaihet";

module.exports = {
	plugins: {
		"postcss-import": {},
		tailwindcss: {},
		"postcss-preset-env": {},
		"postcss-baseurl": { base: basePath },
	},
};
