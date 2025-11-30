import { Heading, Text } from "@react-email/components";
import { EmailButton } from "./_components/email-button";
import { EmailLayout } from "./_components/email-layout";
import { emailTheme } from "./_styles/email-theme";

interface PasswordResetProps {
	name?: string;
	resetUrl: string;
}

export default function PasswordReset({
	name = "there",
	resetUrl = "https://example.com/reset-password?token=123",
}: PasswordResetProps) {
	return (
		<EmailLayout preview="Reset your password">
			<Heading style={heading}>Reset your password</Heading>

			<Text style={text}>Hi {name},</Text>

			<Text style={text}>
				We received a request to reset the password for your SMB Utils account.
				Click the button below to create a new password.
			</Text>

			<div style={buttonContainer}>
				<EmailButton href={resetUrl}>Reset Password</EmailButton>
			</div>

			<div style={warningBox}>
				<Text style={warningText}>
					⚠️ This password reset link will expire in 1 hour for security reasons.
				</Text>
			</div>

			<Text style={mutedText}>
				If you didn't request a password reset, please ignore this email or
				contact support if you have concerns about your account security.
			</Text>

			<Text style={mutedText}>
				For security reasons, this link can only be used once. If you need to
				reset your password again, you'll need to submit a new request.
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

const warningBox = {
	backgroundColor: emailTheme.colors.muted,
	border: `1px solid ${emailTheme.colors.border}`,
	borderRadius: emailTheme.borderRadius,
	padding: emailTheme.spacing.sm,
	margin: `${emailTheme.spacing.md} 0`,
};

const warningText = {
	fontSize: emailTheme.fontSize.sm,
	color: emailTheme.colors.foreground,
	margin: 0,
	lineHeight: "1.6",
};
