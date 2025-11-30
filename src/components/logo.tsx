import { BriefcaseBusiness } from "lucide-react";
import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
	return (
		<div
			className={cn(
				"flex items-center gap-2 font-semibold text-foreground text-lg tracking-tight",
				className,
			)}
		>
			<BriefcaseBusiness className="size-5" />
			<span>SMB Utils</span>
		</div>
	);
};

export const LogoIcon = ({ className }: { className?: string }) => {
	return (
		<BriefcaseBusiness className={cn("size-5 text-foreground", className)} />
	);
};

export const LogoStroke = ({ className }: { className?: string }) => {
	return (
		<div
			className={cn(
				"flex items-center gap-2 font-semibold text-base text-foreground tracking-tight",
				className,
			)}
		>
			<BriefcaseBusiness className="size-7" />
			<span>SMB Utils</span>
		</div>
	);
};
