import type { Metadata } from "next";
import { Geist } from "next/font/google";
import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import { TRPCReactProvider } from "@/trpc/react";
import { HydrateClient } from "@/trpc/server";

export const metadata: Metadata = {
	title: "SMB Utils",
	description: "SMB Utils Application",
	icons: [{ rel: "icon", url: "/favicon.png" }],
};

export default function PublicLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<>
			{children}
			<FooterSection />
		</>
	);
}
