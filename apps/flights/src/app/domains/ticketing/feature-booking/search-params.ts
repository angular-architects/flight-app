import { z } from 'zod';

export const searchParamsSchema = z.object({
  from: z.string().nonempty('Feld muss ausgefüllt sein'),
  to: z.string().nonempty('Feld muss ausgefüllt sein'),
});

export function parseSearchParams(data: unknown) {
  return searchParamsSchema.parse(data);
}

export type SearchParams = z.infer<typeof searchParamsSchema>;
