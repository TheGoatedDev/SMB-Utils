import { Heading, Text } from "@react-email/components";
import { EmailButton } from "./_components/email-button";
import { EmailLayout } from "./_components/email-layout";
import { emailTheme } from "./_styles/email-theme";

interface MagicLinkProps {
	magicLinkUrl: string;
	expiresInMinutes?: number;
}

export default function MagicLink({
	magicLinkUrl = "https://example.com/auth/magic?token=123",
	expiresInMinutes = 15,
}: MagicLinkProps) {
	return (
		<EmailLayout preview="Sign in to SMB Utils">
			<Heading style={heading}>Sign in to SMB Utils</Heading>

			<Text style={text}>
				Click the button below to securely sign in to your account. This link
				will only work once and expires in {expiresInMinutes} minutes.
			</Text>

			<div style={buttonContainer}>
				<EmailButton href={magicLinkUrl}>Sign In</EmailButton>
			</div>

			<div style={infoBox}>
				<Text style={infoText}>
					🔒 This is a one-time secure sign-in link. Once you use it, it will no
					longer be valid.
				</Text>
			</div>

			<Text style={mutedText}>
				If you didn't request this sign-in link, you can safely ignore this
				email. Someone may have accidentally entered your email address.
			</Text>

			<div style={divider} />

			<Text style={alternativeText}>
				Alternatively, you can copy and paste this URL into your browser:
			</Text>
			<Text style={urlText}>{magicLinkUrl}</Text>
		</EmailLayout>
	);
}

const heading = {
	fontSize: emailTheme.fontSize["2xl"],
	fontWeight: "700",
	color: emailTheme.colors.foreground,
	margin: `0 0 ${emailTheme.spacing.md} 0`,
	textAlign: "center" as const,
};

const text = {
	fontSize: emailTheme.fontSize.base,
	color: emailTheme.colors.foreground,
	lineHeight: "1.6",
	margin: `0 0 ${emailTheme.spacing.sm} 0`,
	textAlign: "center" as const,
};

const mutedText = {
	fontSize: emailTheme.fontSize.sm,
	color: emailTheme.colors.mutedForeground,
	lineHeight: "1.6",
	margin: `0 0 ${emailTheme.spacing.sm} 0`,
	textAlign: "center" as const,
};

const buttonContainer = {
	margin: `${emailTheme.spacing.lg} 0`,
	textAlign: "center" as const,
};

const infoBox = {
	backgroundColor: emailTheme.colors.muted,
	border: `1px solid ${emailTheme.colors.border}`,
	borderRadius: emailTheme.borderRadius,
	padding: emailTheme.spacing.md,
	margin: `${emailTheme.spacing.md} 0`,
};

const infoText = {
	fontSize: emailTheme.fontSize.sm,
	color: emailTheme.colors.foreground,
	margin: 0,
	lineHeight: "1.6",
	textAlign: "center" as const,
};

const divider = {
	borderTop: `1px solid ${emailTheme.colors.border}`,
	margin: `${emailTheme.spacing.lg} 0`,
};

const alternativeText = {
	fontSize: emailTheme.fontSize.sm,
	color: emailTheme.colors.mutedForeground,
	margin: `0 0 ${emailTheme.spacing.xs} 0`,
	textAlign: "center" as const,
};

const urlText = {
	fontSize: emailTheme.fontSize.xs,
	color: emailTheme.colors.mutedForeground,
	wordBreak: "break-all" as const,
	backgroundColor: emailTheme.colors.muted,
	padding: emailTheme.spacing.sm,
	borderRadius: emailTheme.borderRadius,
	fontFamily: "monospace",
	textAlign: "center" as const,
};
