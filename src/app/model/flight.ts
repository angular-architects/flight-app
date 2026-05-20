import { z } from 'zod';

export const flightSchema = z.object({
  id: z.number().positive(),
  from: z.string().min(3),
  to: z.string().min(3),
  date: z.string(),
  delayed: z.boolean(),
});

export function parseFlight(data: unknown) {
  return flightSchema.parse(data);
}

export function parseFlights(data: unknown) {
  return z.array(flightSchema).parse(data);
}

export type Flight = z.infer<typeof flightSchema>;
