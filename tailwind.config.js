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
			height: {
				"60px": "60px",
				"1080px": "1080px",
				"1334px": "1334px",
			},
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
			backgroundImage: (theme) => ({
				"hero-pc": "url('/static/images/pc.png')",
				"hero-mobile": "url('/static/images/mobile.png')",
			}),
			zIndex: {
				"-1": -1,
			},
		},
	},
	variants: {},
	plugins: [],
};
