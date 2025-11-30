// Email theme constants matching the app's dark mode design system
// Colors are converted from OKLCH to hex/rgba for email client compatibility
// Source: src/styles/globals.css (.dark class)
export const emailTheme = {
	colors: {
		// Primary colors
		// Primary (oklch(0.92 0.004 286.32)) - light primary in dark mode
		primary: "#ebebec",
		// Primary foreground (oklch(0.21 0.006 285.885)) - dark text on light
		primaryForeground: "#34333a",

		// Background colors
		// Main Body Background (darker than card) - Custom for email depth
		bodyBackground: "#000000",
		// Card/Container Background (oklch(0.141 0.005 285.823))
		background: "#24232a",
		// Foreground (oklch(0.985 0 0)) - light text
		foreground: "#fafafa",

		// Muted colors
		// Muted (oklch(0.274 0.006 286.033)) - used for secondary backgrounds/boxes
		muted: "#46454c",
		// Muted foreground (oklch(0.705 0.015 286.067)) - light muted text
		mutedForeground: "#b4b3b8",

		// Border colors
		// Border (oklch(1 0 0 / 10%)) - subtle white border with opacity
		border: "rgba(255, 255, 255, 0.1)",

		// Destructive colors
		// Destructive (oklch(0.704 0.191 22.216)) - lighter red for dark mode
		destructive: "#ef4444",
		destructiveForeground: "#ffffff",

		// Success colors (kept for compatibility, but using neutral styling)
		success: "#b4b3b8",
		successForeground: "#ffffff",
	},

	fontFamily:
		"'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",

	borderRadius: "10px",

	spacing: {
		xs: "8px",
		sm: "16px",
		md: "24px",
		lg: "32px",
		xl: "48px",
	},

	fontSize: {
		xs: "12px",
		sm: "14px",
		base: "16px",
		lg: "18px",
		xl: "24px",
		"2xl": "32px",
	},
};
