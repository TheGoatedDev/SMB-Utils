import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { HeroHeader } from "./header";

const transitionVariants = {
	item: {
		hidden: {
			opacity: 0,
			filter: "blur(12px)",
			y: 12,
		},
		visible: {
			opacity: 1,
			filter: "blur(0px)",
			y: 0,
			transition: {
				type: "spring" as const,
				bounce: 0.3,
				duration: 1.5,
			},
		},
	},
};

export default function HeroSection() {
	return (
		<>
			<HeroHeader />
			<main className="overflow-hidden">
				<div
					aria-hidden
					className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
				>
					<div className="-translate-y-87.5 -rotate-45 absolute top-0 left-0 h-320 w-140 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
					<div className="-rotate-45 absolute top-0 left-0 h-320 w-60 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
					<div className="-translate-y-87.5 -rotate-45 absolute top-0 left-0 h-320 w-60 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
				</div>
				<section>
					<div className="relative pt-24 md:pt-36">
						<AnimatedGroup
							className="mask-b-from-35% mask-b-to-90% -z-20 absolute inset-0 top-56 lg:top-32"
							variants={{
								container: {
									visible: {
										transition: {
											delayChildren: 1,
										},
									},
								},
								item: {
									hidden: {
										opacity: 0,
										y: 20,
									},
									visible: {
										opacity: 1,
										y: 0,
										transition: {
											type: "spring",
											bounce: 0.3,
											duration: 2,
										},
									},
								},
							}}
						>
							<Image
								alt="background"
								className="hidden size-full dark:block"
								height="4095"
								src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
								width="3276"
							/>
						</AnimatedGroup>

						<div
							aria-hidden
							className="-z-10 absolute inset-0 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
						/>

						<div className="mx-auto max-w-7xl px-6">
							<div className="text-center sm:mx-auto lg:mt-0 lg:mr-auto">
								<AnimatedGroup variants={transitionVariants}>
									<Link
										className="group mx-auto flex w-fit items-center gap-4 rounded-full border bg-muted p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 hover:bg-background dark:border-t-white/5 dark:shadow-zinc-950 dark:hover:border-t-border"
										href="#link"
									>
										<span className="text-foreground text-sm">
											Know exactly how long your money will last
										</span>
										<span className="block h-4 w-0.5 border-l bg-white dark:border-background dark:bg-zinc-700"></span>

										<div className="size-6 overflow-hidden rounded-full bg-background duration-500 group-hover:bg-muted">
											<div className="-translate-x-1/2 flex w-12 duration-500 ease-in-out group-hover:translate-x-0">
												<span className="flex size-6">
													<ArrowRight className="m-auto size-3" />
												</span>
												<span className="flex size-6">
													<ArrowRight className="m-auto size-3" />
												</span>
											</div>
										</div>
									</Link>
								</AnimatedGroup>

								<h1 className="mx-auto mt-8 max-w-4xl text-5xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[5.25rem]">
									<TextEffect
										as="span"
										className="block"
										preset="fade-in-blur"
										speedSegment={0.3}
									>
										Too Big for Sheets?
									</TextEffect>
									<TextEffect
										as="span"
										className="block"
										preset="fade-in-blur"
										speedSegment={0.3}
									>
										Too Small for Enterprise?
									</TextEffect>
								</h1>
								<TextEffect
									as="p"
									className="mx-auto mt-8 max-w-2xl text-balance text-lg"
									delay={0.5}
									per="line"
									preset="fade-in-blur"
									speedSegment={0.3}
								>
									Track your cash runway with real-time updates from your
									financial tools. Get proactive alerts before you run out of
									money, without the bloat of enterprise software or the
									fragility of spreadsheets. More tools coming soon.
								</TextEffect>

								<AnimatedGroup
									className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
									variants={{
										container: {
											visible: {
												transition: {
													staggerChildren: 0.05,
													delayChildren: 0.75,
												},
											},
										},
										...transitionVariants,
									}}
								>
									<div
										className="rounded-[calc(var(--radius-xl)+0.125rem)] border bg-foreground/10 p-0.5"
										key={1}
									>
										<Button
											asChild
											className="rounded-xl px-5 text-base"
											size="lg"
										>
											<Link href="#link">
												<span className="text-nowrap">Get Started</span>
											</Link>
										</Button>
									</div>
									<Button
										asChild
										className="h-10.5 rounded-xl px-5"
										key={2}
										size="lg"
										variant="ghost"
									>
										<Link href="#link">
											<span className="text-nowrap">View Tools</span>
										</Link>
									</Button>
								</AnimatedGroup>
							</div>
						</div>

						<AnimatedGroup
							variants={{
								container: {
									visible: {
										transition: {
											staggerChildren: 0.05,
											delayChildren: 0.75,
										},
									},
								},
								...transitionVariants,
							}}
						>
							<div className="mask-b-from-55% -mr-56 relative mt-8 overflow-hidden px-2 sm:mt-12 sm:mr-0 md:mt-20">
								<div className="relative inset-shadow-2xs mx-auto max-w-6xl overflow-hidden rounded-2xl border bg-background p-4 shadow-lg shadow-zinc-950/15 ring-1 ring-background dark:inset-shadow-white/20">
									{/* TODO: Add app screenshot later */}
									<div className="flex aspect-15/8 items-center justify-center rounded-2xl bg-muted">
										<span className="font-bold text-4xl text-muted-foreground">
											Coming Soon
										</span>
									</div>
								</div>
							</div>
						</AnimatedGroup>
					</div>
				</section>
			</main>
		</>
	);
}
