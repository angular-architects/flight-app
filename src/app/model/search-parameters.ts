import { required, schema, validate } from '@angular/forms/signals';

export interface SearchParameters {
  from: string;
  to: string;
}

export const searchSchema = schema<SearchParameters>(path => {
  required(path.from, {message: 'From is required'})
  required(path.to, {message: 'To is required'})

  validate(path.from, ctx => {
    if (ctx.value() === ctx.valueOf(path.to)) {
      return {
        kind: 'roundtrip',
        message: 'Roundtrips are not allowed'
      }
    }

    return undefined
  })
})
