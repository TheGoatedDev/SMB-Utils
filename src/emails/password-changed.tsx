import { Heading, Text } from "@react-email/components";
import { EmailButton } from "./_components/email-button";
import { EmailLayout } from "./_components/email-layout";
import { emailTheme } from "./_styles/email-theme";

interface PasswordChangedProps {
	name?: string;
	changeTime?: string;
	supportUrl?: string;
}

export default function PasswordChanged({
	name = "there",
	changeTime = new Date().toLocaleString(),
	supportUrl = "https://example.com/support",
}: PasswordChangedProps) {
	return (
		<EmailLayout preview="Your password has been changed">
			<div style={successBadge}>✓</div>

			<Heading style={heading}>Password successfully changed</Heading>

			<Text style={text}>Hi {name},</Text>

			<Text style={text}>
				This is a confirmation that the password for your SMB Utils account was
				successfully changed on {changeTime}.
			</Text>

			<div style={infoBox}>
				<Text style={infoText}>
					Your account is now secured with your new password. You can use it to
					sign in on all devices.
				</Text>
			</div>

			<div style={alertBox}>
				<Text style={alertText}>
					<strong>Didn't change your password?</strong>
				</Text>
				<Text style={alertText}>
					If you didn't make this change, please contact our support team
					immediately. Your account may have been compromised.
				</Text>
				<div style={buttonContainer}>
					<EmailButton href={supportUrl} variant="destructive">
						Contact Support
					</EmailButton>
				</div>
			</div>

			<Text style={mutedText}>
				<strong>Security tips:</strong>
			</Text>
			<ul style={list}>
				<li style={listItem}>Never share your password with anyone</li>
				<li style={listItem}>
					Use a unique password that you don't use on other websites
				</li>
				<li style={listItem}>
					Consider enabling two-factor authentication for extra security
				</li>
			</ul>
		</EmailLayout>
	);
}

const successBadge = {
	width: "48px",
	height: "48px",
	borderRadius: "50%",
	backgroundColor: emailTheme.colors.muted,
	color: emailTheme.colors.foreground,
	fontSize: "24px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	margin: `0 auto ${emailTheme.spacing.md} auto`,
	fontWeight: "700",
	border: `1px solid ${emailTheme.colors.border}`,
};

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
};

const mutedText = {
	fontSize: emailTheme.fontSize.sm,
	color: emailTheme.colors.foreground,
	lineHeight: "1.6",
	margin: `${emailTheme.spacing.md} 0 ${emailTheme.spacing.xs} 0`,
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
};

const alertBox = {
	backgroundColor: emailTheme.colors.muted,
	border: `1px solid ${emailTheme.colors.border}`,
	borderRadius: emailTheme.borderRadius,
	padding: emailTheme.spacing.md,
	margin: `${emailTheme.spacing.md} 0`,
};

const alertText = {
	fontSize: emailTheme.fontSize.sm,
	color: emailTheme.colors.foreground,
	margin: `0 0 ${emailTheme.spacing.sm} 0`,
	lineHeight: "1.6",
};

const buttonContainer = {
	marginTop: emailTheme.spacing.sm,
	textAlign: "center" as const,
};

const list = {
	fontSize: emailTheme.fontSize.sm,
	color: emailTheme.colors.mutedForeground,
	lineHeight: "1.6",
	marginTop: emailTheme.spacing.xs,
	paddingLeft: emailTheme.spacing.md,
};

const listItem = {
	marginBottom: emailTheme.spacing.xs,
};
