import { z } from 'zod';

export const airlineSchema = z.object({
  id: z.number(),
  name: z.string().min(1),
  iataCode: z
    .string()
    .trim()
    .toUpperCase()
    .regex(/^[A-Z0-9]{2,3}$/)
    .optional(),
  country: z.string().trim().min(1).optional(),
  alliance: z.string().trim().min(1).optional(),
  foundedYear: z
    .number()
    .int()
    .min(1900)
    .max(new Date().getFullYear())
    .optional(),
  website: z.url().optional(),
});

export type Airline = z.infer<typeof airlineSchema>;

export const initAirline: Airline = {
  id: 0,
  name: '',
  iataCode: undefined,
  country: undefined,
  alliance: undefined,
  foundedYear: undefined,
  website: undefined,
};

export function parseAirlines(response: unknown) {
  return airlineSchema.array().parse(response);
}
