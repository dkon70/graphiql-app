'use client';

import * as z from 'zod';

export const SignInFormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, {
      message: 'Password must be at least 8 characters.',
    })
    .max(32, {
      message: 'Password must be at least 2 characters.',
    })
    .regex(/[a-zA-Z]/, {
      message: 'Password must contain a latin letter',
    })
    .regex(/[0-9]/, {
      message: 'Password must contain a number',
    })
    .regex(/[,."'!@#$%^&*()_+=-]/, {
      message: `Password must contain a special character: ,."'!@#$%^&*()_+=-`,
    }),
});

export const SignUpFormSchema = SignInFormSchema.extend({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

export type SignInFormData = z.infer<typeof SignInFormSchema>;
export type SignUpFormData = z.infer<typeof SignUpFormSchema>;
