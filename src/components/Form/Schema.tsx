'use client';

import { TextContentType, textContent } from '@/lib/langText';
import * as z from 'zod';

let lang = 'en';
if (typeof window !== 'undefined' && window.localStorage) {
  const savedLang = localStorage.getItem('lang');
  if (savedLang) {
    lang = savedLang;
  }
}
const text = textContent[lang as keyof TextContentType].validation;

export const SignInFormSchema = z.object({
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

export const SignUpFormSchema = SignInFormSchema.extend({
  username: z.string().min(2, {
    message: text.username,
  }),
});

export type SignInFormData = z.infer<typeof SignInFormSchema>;
export type SignUpFormData = z.infer<typeof SignUpFormSchema>;
