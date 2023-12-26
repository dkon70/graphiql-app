import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getSchema = async () => {
  // if (query === '') {
    //   return;
    // }
    //   //TODO use redux state
    
  const url = '';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    //todo test this request
    body: JSON.stringify(`{\n  __schema {\n    queryType {\n      name\n      description\n      fields {\n        name\n        description\n        args {\n          name\n          description\n          type {\n            name\n            kind\n          }\n        }\n        type {\n          name\n          kind\n        }\n      }\n    }\n  }\n}`),
  };
  const request = new Request(url, options);
  const req = await fetch(request);
  const data = await req.json();

  return data.data;
};



