import { z } from 'zod';

export const flightSchema = z.object({
  id: z.number(),
  from: z.string(),
  to: z.string(),
  date: z.string(),
  delayed: z.boolean(),
});

export type Flight = z.infer<typeof flightSchema>;

export const initFlight: Flight = {
  id: 0,
  from: '',
  to: '',
  date: '',
  delayed: false,
};

export function parseFlights(response: unknown) {
  return flightSchema.array().parse(response);
}

const defautlFlight: Flight = {
  id: 1,
  from: 'London',
  to: 'Paris',
  date: '2026-01-01',
  delayed: false,
}

function flight(values: Partial<Flight> = {}) {
  return { ...defautlFlight, ...values };
}

const flighStoreMock = {
  load: vitest.fn().mockResolvedValue([flight({
    from: "Zürich}), flight(), flight()]),
  }

expect(flighStoreMock.load()).toHaveBeenCalledWith();