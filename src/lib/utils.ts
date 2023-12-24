import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useEffect, useState } from 'react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getSchema = (query: string) => {
  if (query === '') {
    //TODO normalize return
    return;
  }
  const url = '';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    //todo test this request
    body: JSON.stringify(`{ /n __schema { /n queryType { /n ${query}    }} }`),
  };
  const request = new Request(url, options);
  return request;
};



