import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "@/server/better-auth";
import { getSession } from "@/server/better-auth/server";
import { HydrateClient } from "@/trpc/server";
import HeroSection from "@/components/hero-section";

export default async function Home() {
	return (
		<>
			<HeroSection />
		</>
	);
}
