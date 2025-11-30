import {
	Body,
	Container,
	Head,
	Html,
	Preview,
	Section,
	Text,
} from "@react-email/components";
import * as React from "react";
import { emailTheme } from "../_styles/email-theme";

interface EmailLayoutProps {
	preview: string;
	children: React.ReactNode;
}

export function EmailLayout({ preview, children }: EmailLayoutProps) {
	return (
		<Html>
			<Head />
			<Preview>{preview}</Preview>
			<Body style={main}>
				<Container style={container}>
					{/* Header */}
					<Section style={header}>
						<Text style={logo}>SMB Utils</Text>
					</Section>

					{/* Content */}
					<Section style={content}>{children}</Section>

					{/* Footer */}
					<Section style={footer}>
						<Text style={footerText}>
							© {new Date().getFullYear()} SMB Utils. All rights reserved.
						</Text>
						<Text style={footerText}>
							This email was sent to you as part of your account activity.
						</Text>
					</Section>
				</Container>
			</Body>
		</Html>
	);
}

const main = {
	backgroundColor: emailTheme.colors.bodyBackground,
	fontFamily: emailTheme.fontFamily,
};

const container = {
	backgroundColor: emailTheme.colors.background,
	margin: "40px auto",
	padding: `${emailTheme.spacing.xl} ${emailTheme.spacing.sm}`,
	maxWidth: "600px",
	borderRadius: emailTheme.borderRadius,
	border: `1px solid ${emailTheme.colors.border}`,
};

const header = {
	padding: `${emailTheme.spacing.md} 0`,
	borderBottom: `1px solid ${emailTheme.colors.border}`,
	marginBottom: emailTheme.spacing.lg,
};

const logo = {
	fontSize: emailTheme.fontSize.xl,
	fontWeight: "700",
	color: emailTheme.colors.foreground,
	margin: 0,
};

const content = {
	padding: `${emailTheme.spacing.md} 0`,
};

const footer = {
	borderTop: `1px solid ${emailTheme.colors.border}`,
	marginTop: emailTheme.spacing.lg,
	paddingTop: emailTheme.spacing.md,
};

const footerText = {
	fontSize: emailTheme.fontSize.xs,
	color: emailTheme.colors.mutedForeground,
	textAlign: "center" as const,
	margin: `${emailTheme.spacing.xs} 0`,
};
