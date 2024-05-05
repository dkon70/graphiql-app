'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormEmailRuMessage,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { makeSchema } from './Schema';
import { signUp } from '@/firebase/signUp';
import { signIn } from '@/firebase/signIn';
import { toast } from '../ui/use-toast';
import { useLang } from '@/lib/langContext';
import { TextContentType, textContent } from '@/lib/langText';

export function InputForm({ mode }: { mode: string }) {
  const { lang } = useLang();
  const text = textContent[lang as keyof TextContentType];

  const defaultdata =
    mode === 'signUp'
      ? {
          username: '',
          email: '',
          password: '',
        }
      : {
          email: '',
          password: '',
        };

  type formDataType = typeof defaultdata;
  const schema = makeSchema(text.validation, mode);

  const form = useForm<formDataType>({
    resolver: zodResolver(schema),
    defaultValues: defaultdata,
  });

  async function onSubmit(data: formDataType) {
    try {
      if (data.username) {
        await signUp(data);
      } else {
        await signIn(data);
      }
      toast({
        variant: 'success',
        title: text.authPage.toast.title,
        description: text.authPage.toast.description,
      });
    } catch (err) {
      if (err instanceof Error) {
        toast({
          variant: 'destructive',
          title: text.authPage.toast.error,
          description: err.message,
        });
      }
    }
  }

  return (
    <div className="w-80 lg:w-96 p-5 overflow-y-auto">
      <h1 className="font-bold text-xl mb-5">
        {mode === 'signUp'
          ? text.authPage.title.register
          : text.authPage.title.login}
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {mode === 'signUp' && (
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{text.authPage.usernameLabel}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={text.authPage.usernamePlaceholder}
                      {...field}
                      autoComplete="username"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{text.authPage.emailLabel}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={text.authPage.emailPlaceholder}
                    {...field}
                    autoComplete="email"
                  />
                </FormControl>
                {lang === 'en' ? <FormMessage /> : <FormEmailRuMessage />}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{text.authPage.passwordLabel}</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder={text.authPage.passwordPlaceholder}
                    {...field}
                    autoComplete={
                      mode === 'signUp' ? 'new-password' : 'current-password'
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">{text.authPage.submitButton}</Button>
        </form>
      </Form>
    </div>
  );
}
