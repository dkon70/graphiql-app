'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SignInFormSchema, SignUpFormSchema } from './Schema';
import { signUp } from '@/firebase/signUp';
import { signIn } from '@/firebase/signIn';
import { toast } from '../ui/use-toast';

export function InputForm({ mode }: { mode: string }) {
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
  const schema = mode === 'signUp' ? SignUpFormSchema : SignInFormSchema;

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
        title: 'Success',
        description: 'You are successfully authorized',
      });
    } catch (err) {
      if (err instanceof Error) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: err.message,
        });
      }
    }
  }

  return (
    <div className="w-80 lg:w-96 p-5">
      <h1 className="font-bold text-xl mb-5">
        {mode === 'signUp' ? 'Registration' : 'Authorization'}
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {mode === 'signUp' && (
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your name"
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
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your e-mail"
                    {...field}
                    autoComplete="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Your password"
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
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
