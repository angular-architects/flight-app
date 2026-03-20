import { z } from 'zod';

export const configSchema = z.object({
  baseUrl: z.string(),
});

export type Config = z.infer<typeof configSchema>;

export const initConfig: Config = configSchema.parse({
  baseUrl: '',
});
