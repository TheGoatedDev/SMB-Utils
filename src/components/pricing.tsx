import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Pricing() {
	return (
		<section id="pricing" className="py-16 md:py-32">
			<div className="mx-auto max-w-5xl px-6">
				<div className="mx-auto max-w-2xl space-y-6 text-center">
					<h1 className="text-center text-4xl font-semibold lg:text-5xl">
						Simple Pricing for Complex Operations
					</h1>
					<p className="text-muted-foreground text-lg">
						Stop paying for enterprise bloat. SMB Utils gives you the surgical
						tools you need to manage operations, compliance, and cash flow.
					</p>
				</div>

				<div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-5 md:gap-0">
					<div className="rounded-(--radius) flex flex-col justify-between space-y-8 border p-6 md:col-span-2 md:my-2 md:rounded-r-none md:border-r-0 lg:p-10">
						<div className="space-y-4">
							<div>
								<h2 className="font-medium">Starter</h2>
								<span className="my-3 block text-2xl font-semibold">
									$0 / mo
								</span>
								<p className="text-muted-foreground text-sm">
									For businesses just getting started
								</p>
							</div>

							<Button disabled variant="outline" className="w-full">
								Get Started
							</Button>

							<hr className="border-dashed" />

							<ul className="list-outside space-y-3 text-sm text-muted-foreground">
								{[
									"Access to 1 Utility",
									"Manual Data Entry",
									"Basic Alerts",
									"Community Support",
								].map((item) => (
									<li key={item} className="flex items-center gap-2">
										<Check className="size-3 text-primary" />
										{item}
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className="dark:bg-muted rounded-(--radius) border p-6 shadow-lg shadow-gray-950/5 md:col-span-3 lg:p-10 dark:[--color-muted:var(--color-zinc-900)]">
						<div className="grid gap-6 sm:grid-cols-2">
							<div className="space-y-4">
								<div>
									<h2 className="font-medium">All-Access</h2>
									<span className="my-3 block text-2xl font-semibold">
										$29 / mo
									</span>
									<p className="text-muted-foreground text-sm">
										For growing businesses needing full visibility
									</p>
								</div>

								<Button disabled className="w-full">
									Get Started
								</Button>
							</div>

							<div>
								<div className="text-sm font-medium">
									Everything in Starter plus :
								</div>

								<ul className="mt-4 list-outside space-y-3 text-sm text-muted-foreground">
									{[
										"Access to All Utilities",
										"Real-time Integrations (QBO, Xero, Stripe)",
										"Unlimited Users",
										"Proactive Compliance Alerts",
										"Cash Runway Forecasting",
										"Export to Excel/CSV",
										"Priority Support",
									].map((item) => (
										<li key={item} className="flex items-center gap-2">
											<Check className="size-3 text-primary" />
											{item}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
