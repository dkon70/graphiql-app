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
import { SignInFormSchema, SignUpFormSchema } from './SchemaEn';
import { SignInFormRuSchema, SignUpFormRuSchema } from './SchemaRu';
import { signUp } from '@/firebase/signUp';
import { signIn } from '@/firebase/signIn';
import { toast } from '../ui/use-toast';
import { useLang } from '@/lib/langContext';
import { TextContentType, textContent } from '@/lib/langText';

export function InputForm({ mode }: { mode: string }) {
  const { lang } = useLang();
  const text = textContent[lang as keyof TextContentType].authPage;

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
  const schema =
    mode === 'signUp'
      ? lang === 'en'
        ? SignUpFormSchema
        : SignUpFormRuSchema
      : lang === 'en'
        ? SignInFormSchema
        : SignInFormRuSchema;

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
        title: text.toast.title,
        description: text.toast.description,
      });
    } catch (err) {
      if (err instanceof Error) {
        toast({
          variant: 'destructive',
          title: text.toast.error,
          description: err.message,
        });
      }
    }
  }

  return (
    <div className="w-80 lg:w-96 p-5 overflow-y-auto">
      <h1 className="font-bold text-xl mb-5">
        {mode === 'signUp' ? text.title.register : text.title.login}
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {mode === 'signUp' && (
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{text.usernameLabel}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={text.usernamePlaceholder}
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
                <FormLabel>{text.emailLabel}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={text.emailPlaceholder}
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
                <FormLabel>{text.passwordLabel}</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder={text.passwordPlaceholder}
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
          <Button type="submit">{text.submitButton}</Button>
        </form>
      </Form>
    </div>
  );
}
