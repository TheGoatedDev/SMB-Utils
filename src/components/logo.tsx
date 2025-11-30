import { cn } from "@/lib/utils";

export const Logo = ({
	className,
	uniColor,
}: {
	className?: string;
	uniColor?: boolean;
}) => {
	return (
		<span
			className={cn(
				"h-5 text-foreground font-semibold text-lg tracking-tight",
				className,
			)}
		>
			SMB Utils
		</span>
	);
};

export const LogoIcon = ({
	className,
	uniColor,
}: {
	className?: string;
	uniColor?: boolean;
}) => {
	return (
		<span
			className={cn("size-5 text-foreground font-semibold text-sm", className)}
		>
			SMB
		</span>
	);
};

export const LogoStroke = ({ className }: { className?: string }) => {
	return (
		<span
			className={cn(
				"size-7 text-foreground font-semibold text-base tracking-tight",
				className,
			)}
		>
			SMB Utils
		</span>
	);
};
