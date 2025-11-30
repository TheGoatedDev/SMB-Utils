import { Heading, Text } from "@react-email/components";
import { EmailButton } from "./_components/email-button";
import { EmailLayout } from "./_components/email-layout";
import { emailTheme } from "./_styles/email-theme";

interface WelcomeProps {
	name?: string;
	dashboardUrl?: string;
}

export default function Welcome({
	name = "there",
	dashboardUrl = "https://example.com/dashboard",
}: WelcomeProps) {
	return (
		<EmailLayout preview="Welcome to SMB Utils!">
			<Heading style={heading}>Welcome to SMB Utils! 🎉</Heading>

			<Text style={text}>Hi {name},</Text>

			<Text style={text}>
				Thank you for verifying your email! Your account is now fully activated
				and ready to use. We're excited to have you on board!
			</Text>

			<div style={buttonContainer}>
				<EmailButton href={dashboardUrl}>Get Started</EmailButton>
			</div>

			<Text style={sectionHeading}>What you can do with SMB Utils:</Text>

			<div style={featureGrid}>
				<div style={featureCard}>
					<div style={featureIcon}>📊</div>
					<Text style={featureTitle}>Manage Your Business</Text>
					<Text style={featureDescription}>
						Access powerful tools to streamline your business operations
					</Text>
				</div>

				<div style={featureCard}>
					<div style={featureIcon}>🔐</div>
					<Text style={featureTitle}>Secure & Reliable</Text>
					<Text style={featureDescription}>
						Your data is protected with enterprise-grade security
					</Text>
				</div>

				<div style={featureCard}>
					<div style={featureIcon}>📈</div>
					<Text style={featureTitle}>Track Progress</Text>
					<Text style={featureDescription}>
						Monitor your business metrics with real-time analytics
					</Text>
				</div>
			</div>

			<div style={tipsBox}>
				<Text style={tipsHeading}>Getting Started Tips:</Text>
				<ul style={list}>
					<li style={listItem}>
						Complete your profile to personalize your experience
					</li>
					<li style={listItem}>
						Explore the dashboard to familiarize yourself with the tools
					</li>
					<li style={listItem}>
						Check out our help center if you need any assistance
					</li>
				</ul>
			</div>

			<Text style={text}>
				If you have any questions or need help getting started, don't hesitate
				to reach out to our support team. We're here to help!
			</Text>

			<Text style={text}>
				Welcome aboard,
				<br />
				The SMB Utils Team
			</Text>
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
};

const sectionHeading = {
	fontSize: emailTheme.fontSize.lg,
	fontWeight: "600",
	color: emailTheme.colors.foreground,
	margin: `${emailTheme.spacing.lg} 0 ${emailTheme.spacing.md} 0`,
};

const buttonContainer = {
	margin: `${emailTheme.spacing.md} 0`,
	textAlign: "center" as const,
};

const featureGrid = {
	margin: `${emailTheme.spacing.md} 0`,
};

const featureCard = {
	backgroundColor: emailTheme.colors.muted,
	border: `1px solid ${emailTheme.colors.border}`,
	borderRadius: emailTheme.borderRadius,
	padding: emailTheme.spacing.md,
	marginBottom: emailTheme.spacing.sm,
	textAlign: "center" as const,
};

const featureIcon = {
	fontSize: "32px",
	marginBottom: emailTheme.spacing.sm,
};

const featureTitle = {
	fontSize: emailTheme.fontSize.base,
	fontWeight: "600",
	color: emailTheme.colors.foreground,
	margin: `0 0 ${emailTheme.spacing.xs} 0`,
};

const featureDescription = {
	fontSize: emailTheme.fontSize.sm,
	color: emailTheme.colors.mutedForeground,
	margin: 0,
	lineHeight: "1.5",
};

const tipsBox = {
	backgroundColor: emailTheme.colors.muted,
	border: `1px solid ${emailTheme.colors.border}`,
	borderRadius: emailTheme.borderRadius,
	padding: emailTheme.spacing.md,
	margin: `${emailTheme.spacing.md} 0`,
};

const tipsHeading = {
	fontSize: emailTheme.fontSize.base,
	fontWeight: "600",
	color: emailTheme.colors.foreground,
	margin: `0 0 ${emailTheme.spacing.sm} 0`,
};

const list = {
	fontSize: emailTheme.fontSize.sm,
	color: emailTheme.colors.foreground,
	lineHeight: "1.6",
	marginTop: 0,
	paddingLeft: emailTheme.spacing.md,
};

const listItem = {
	marginBottom: emailTheme.spacing.xs,
};
