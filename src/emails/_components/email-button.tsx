import { Button } from "@react-email/components";
import * as React from "react";
import { emailTheme } from "../_styles/email-theme";

interface EmailButtonProps {
	href: string;
	children: React.ReactNode;
	variant?: "primary" | "destructive" | "secondary";
}

export function EmailButton({
	href,
	children,
	variant = "primary",
}: EmailButtonProps) {
	const variantStyles = {
		primary: {
			backgroundColor: emailTheme.colors.primary,
			color: emailTheme.colors.primaryForeground,
		},
		destructive: {
			backgroundColor: emailTheme.colors.destructive,
			color: emailTheme.colors.destructiveForeground,
		},
		secondary: {
			backgroundColor: emailTheme.colors.muted,
			color: emailTheme.colors.foreground,
			border: `1px solid ${emailTheme.colors.border}`,
		},
	};

	return (
		<Button
			href={href}
			style={{
				...buttonStyle,
				...variantStyles[variant],
			}}
		>
			{children}
		</Button>
	);
}

const buttonStyle = {
	borderRadius: emailTheme.borderRadius,
	padding: "12px 24px",
	fontSize: emailTheme.fontSize.base,
	fontWeight: "500",
	textDecoration: "none",
	textAlign: "center" as const,
	display: "inline-block",
	lineHeight: "1.5",
	fontFamily: emailTheme.fontFamily,
};
