import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useEffect, useState } from 'react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const baseQuery = `
query {
  characters {
    results {
      id
      name
      status
      species
    }
  }
}
`;

export function useFetch(url = "https://rickandmortyapi.graphcdn.app/" ,query = baseQuery, headers = {}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);







useEffect(() => {
  const fetchData = ()=> {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: JSON.stringify({query})
    };
    const request = new Request(url, options);
    
    setLoading(true)
    fetch(request)
      .then((response) => (
        console.log(response),
        response.json()))
      .then((json) => setData(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }
  fetchData()
}, []);

console.log(error,data,loading);
  return {
    data,
    error,
    loading
  }
}
