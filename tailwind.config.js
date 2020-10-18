module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
		defaultLineHeights: true,
		standardFontWeights: true,
	},
	purge: ["./src/**/*.{js,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				text: "#e5e5e5",
				backgroundBlue: "#32293C",
				primary: "#F7A921",
				secondary: "#ED3A3C",
			},
			fontFamily: {
				Boldstrom: "Boldstrom",
				FuturaBT: "FuturaBT",
			},
			width: {
				minContent: "min-content",
				fitContent: "fit-content",
			},
		},
	},
	variants: {},
	plugins: [],
};
