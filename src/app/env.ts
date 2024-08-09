import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_MC_SERVER_IP: z.string().min(1),
    NEXT_PUBLIC_BASE_URL: z.string().min(1),
  },
  runtimeEnv: {
    NEXT_PUBLIC_MC_SERVER_IP: process.env.NEXT_PUBLIC_MC_SERVER_IP,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
});
