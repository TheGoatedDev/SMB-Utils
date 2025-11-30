import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const healthRouter = createTRPCRouter({
	check: publicProcedure.query(() => {
		return {
			status: "ok",
			timestamp: new Date().toISOString(),
		};
	}),

	ping: publicProcedure
		.input(z.object({ message: z.string().optional() }))
		.query(({ input }) => {
			return {
				pong: true,
				message: input.message || "Hello from tRPC!",
				timestamp: new Date().toISOString(),
			};
		}),
});
