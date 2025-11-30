import { Heading, Text } from "@react-email/components";
import { EmailButton } from "./_components/email-button";
import { EmailLayout } from "./_components/email-layout";
import { emailTheme } from "./_styles/email-theme";

interface EmailVerificationProps {
	name?: string;
	verificationUrl: string;
}

export default function EmailVerification({
	name = "there",
	verificationUrl = "https://example.com/verify?token=123",
}: EmailVerificationProps) {
	return (
		<EmailLayout preview="Verify your email address">
			<Heading style={heading}>Verify your email address</Heading>

			<Text style={text}>Hi {name},</Text>

			<Text style={text}>
				Thanks for signing up for SMB Utils! To complete your registration and
				start using your account, please verify your email address by clicking
				the button below.
			</Text>

			<div style={buttonContainer}>
				<EmailButton href={verificationUrl}>Verify Email Address</EmailButton>
			</div>

			<Text style={mutedText}>
				This verification link will expire in 24 hours for security reasons.
			</Text>

			<Text style={mutedText}>
				If you didn't create an account with SMB Utils, you can safely ignore
				this email.
			</Text>
		</EmailLayout>
	);
}

const heading = {
	fontSize: emailTheme.fontSize["2xl"],
	fontWeight: "700",
	color: emailTheme.colors.foreground,
	margin: `0 0 ${emailTheme.spacing.md} 0`,
};

const text = {
	fontSize: emailTheme.fontSize.base,
	color: emailTheme.colors.foreground,
	lineHeight: "1.6",
	margin: `0 0 ${emailTheme.spacing.sm} 0`,
};

const mutedText = {
	fontSize: emailTheme.fontSize.sm,
	color: emailTheme.colors.mutedForeground,
	lineHeight: "1.6",
	margin: `0 0 ${emailTheme.spacing.sm} 0`,
};

const buttonContainer = {
	margin: `${emailTheme.spacing.md} 0`,
	textAlign: "center" as const,
};
