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
				mobileSpacer: "15vh",
				desktopSpacer: "28vh",
			},
			maxHeight: {
				"280px": "280px",
			},
			colors: {
				text: "#e5e5e5",
				backgroundBlue: "#32293C",
				navbarBG: "#231d2a",
				primary: "#F7A921",
				secondary: "#ED3A3C",
			},
			fontFamily: {
				Boldstrom: "Boldstrom",
				FuturaBT: "FuturaBT",
				Kanit: "Kanit",
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
			fontSize: {
				"7xl": "6rem",
			},
		},
	},
	variants: {
		padding: ["responsive", "hover", "focus"],
	},
	plugins: [],
};
