import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Settings2, Sparkles, Zap } from "lucide-react";
import type { ReactNode } from "react";

export default function Features() {
	return (
		<section
			id="features"
			className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent"
		>
			<div className="@container mx-auto max-w-5xl px-6">
				<div className="text-center">
					<h2 className="text-balance text-4xl font-semibold lg:text-5xl">
						Runway tracking that actually works
					</h2>
					<p className="mt-4 text-lg text-muted-foreground">
						Stop guessing how long your cash will last. Get real-time runway
						visibility with automatic updates from your financial tools.
					</p>
				</div>

				<Card className="bg-transparent @min-4xl:max-w-full @min-4xl:grid-cols-3 @min-4xl:divide-x @min-4xl:divide-y-0 mx-auto mt-8 grid max-w-sm divide-y overflow-hidden shadow-zinc-950/5 *:text-center md:mt-16">
					<div className="group shadow-zinc-950/5">
						<CardHeader className="pb-3">
							<CardDecorator>
								<Zap className="size-6" aria-hidden />
							</CardDecorator>

							<h3 className="mt-6 font-medium">Instant Visibility</h3>
						</CardHeader>

						<CardContent>
							<p className="text-sm text-muted-foreground">
								See your runway in minutes, not days. Connect your accounts and
								get an accurate cash runway calculation immediately—no manual
								data entry required.
							</p>
						</CardContent>
					</div>

					<div className="group shadow-zinc-950/5">
						<CardHeader className="pb-3">
							<CardDecorator>
								<Settings2 className="size-6" aria-hidden />
							</CardDecorator>

							<h3 className="mt-6 font-medium">Proactive Alerts</h3>
						</CardHeader>

						<CardContent>
							<p className="mt-3 text-sm text-muted-foreground">
								Get notified before you run out of cash. Receive alerts when
								your runway drops below thresholds, with forecasts that update
								automatically as your financial data changes.
							</p>
						</CardContent>
					</div>

					<div className="group shadow-zinc-950/5">
						<CardHeader className="pb-3">
							<CardDecorator>
								<Sparkles className="size-6" aria-hidden />
							</CardDecorator>

							<h3 className="mt-6 font-medium">Focused Excellence</h3>
						</CardHeader>

						<CardContent>
							<p className="mt-3 text-sm text-muted-foreground">
								Built specifically for runway tracking. No feature bloat, no
								unnecessary complexity—just accurate, real-time cash runway
								visibility that you can trust.
							</p>
						</CardContent>
					</div>
				</Card>
			</div>
		</section>
	);
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
	<div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
		<div
			aria-hidden
			className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[24px_24px] dark:opacity-50"
		/>

		<div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
			{children}
		</div>
	</div>
);
