import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-3";
import Features from "@/components/features-3";
import Pricing from "@/components/pricing";

export default async function Home() {
	return (
		<>
			<HeroSection />
			<Features />
			<IntegrationsSection />
			<Pricing />
		</>
	);
}
