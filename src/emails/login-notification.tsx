import { Heading, Text } from "@react-email/components";
import { EmailButton } from "./_components/email-button";
import { EmailLayout } from "./_components/email-layout";
import { emailTheme } from "./_styles/email-theme";

interface LoginNotificationProps {
	name?: string;
	loginTime?: string;
	ipAddress?: string;
	device?: string;
	location?: string;
	secureAccountUrl?: string;
}

export default function LoginNotification({
	name = "there",
	loginTime = new Date().toLocaleString(),
	ipAddress = "192.168.1.1",
	device = "Chrome on macOS",
	location = "Unknown",
	secureAccountUrl = "https://example.com/account/security",
}: LoginNotificationProps) {
	return (
		<EmailLayout preview="New login to your account">
			<Heading style={heading}>New login detected</Heading>

			<Text style={text}>Hi {name},</Text>

			<Text style={text}>
				We detected a new login to your SMB Utils account. If this was you, you
				can safely ignore this email.
			</Text>

			<div style={infoBox}>
				<table style={table}>
					<tbody>
						<tr>
							<td style={labelCell}>Time:</td>
							<td style={valueCell}>{loginTime}</td>
						</tr>
						<tr>
							<td style={labelCell}>IP Address:</td>
							<td style={valueCell}>{ipAddress}</td>
						</tr>
						<tr>
							<td style={labelCell}>Device:</td>
							<td style={valueCell}>{device}</td>
						</tr>
						<tr>
							<td style={labelCell}>Location:</td>
							<td style={valueCell}>{location}</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div style={alertBox}>
				<Text style={alertText}>
					<strong>Didn't recognize this login?</strong>
				</Text>
				<Text style={alertText}>
					If you didn't sign in at this time, your account may have been
					compromised. Please secure your account immediately by changing your
					password and reviewing your recent activity.
				</Text>
				<div style={buttonContainer}>
					<EmailButton href={secureAccountUrl} variant="destructive">
						Secure My Account
					</EmailButton>
				</div>
			</div>

			<Text style={mutedText}>
				For your security, we recommend enabling two-factor authentication and
				using a strong, unique password.
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

const infoBox = {
	backgroundColor: emailTheme.colors.muted,
	border: `1px solid ${emailTheme.colors.border}`,
	borderRadius: emailTheme.borderRadius,
	padding: emailTheme.spacing.md,
	margin: `${emailTheme.spacing.md} 0`,
};

const table = {
	width: "100%",
	borderCollapse: "collapse" as const,
};

const labelCell = {
	fontSize: emailTheme.fontSize.sm,
	color: emailTheme.colors.mutedForeground,
	padding: `${emailTheme.spacing.xs} 0`,
	fontWeight: "500",
	width: "35%",
};

const valueCell = {
	fontSize: emailTheme.fontSize.sm,
	color: emailTheme.colors.foreground,
	padding: `${emailTheme.spacing.xs} 0`,
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
