'use client';

import { Validation } from '@/lib/langText';
import * as z from 'zod';

export function makeSchema(text: Validation, mode: string) {
  const schema = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, {
        message: text.password.min,
      })
      .max(32, {
        message: text.password.max,
      })
      .regex(/[a-zA-Z]/, {
        message: text.password.latin,
      })
      .regex(/[0-9]/, {
        message: text.password.number,
      })
      .regex(/[,."'!@#$%^&*()_+=-]/, {
        message: text.password.symbol,
      }),
  });
  if (mode === 'signUp') {
    const upSchema = schema.extend({
      username: z.string().min(2, {
        message: text.username,
      }),
    });
    return upSchema;
  }
  return schema;
}
