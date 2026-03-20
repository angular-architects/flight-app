import { z } from 'zod';

export const airlineSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export type Airline = z.infer<typeof airlineSchema>;

export const initAirline: Airline = {
  id: 0,
  name: '',
};

export function parseAirlines(response: unknown) {
  return airlineSchema.array().parse(response);
}
