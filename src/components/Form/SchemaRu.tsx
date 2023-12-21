'use client';

import { textContent } from '@/lib/langText';
import * as z from 'zod';

const text = textContent.ru.validation;

export const SignInFormRuSchema = z.object({
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

export const SignUpFormRuSchema = SignInFormRuSchema.extend({
  username: z.string().min(2, {
    message: text.username,
  }),
});

export type SignInFormData = z.infer<typeof SignInFormRuSchema>;
export type SignUpFormData = z.infer<typeof SignUpFormRuSchema>;
