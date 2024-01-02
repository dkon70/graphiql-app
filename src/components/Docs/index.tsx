import { RootState } from '@/lib/store/store';


import { useSelector } from 'react-redux';


// const DocsComponent = React.lazy(() => import('@/components/Docs'));
const schemaQuery = ` {
  __schema {
    types {
      name
      fields {
        name
        type {
         name
        }
      }
    }
  }
}
`;

// type Schema = {
//   __schema: {
//     types: {
//       name: string;
//       fields: {
//         name: string;
//         type: {
//           name: string;
//         };
//       }[];
//     }[];
//   };
// }


const fetchSchema =  async (url: string) => {
  const options = {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: schemaQuery }),
  };
  
  
  const request = new Request(url, options);
  
  console.log("call fetch SChema")
    const req = await fetch(request)
  console.log("after fetch in frtch schema")
    const data = await req.json();
    // await new Promise(resolve => setTimeout(resolve, 10000))
    console.log(data.data.__schema.types)
    return data
  }

export default async function Docs(){




// const url = useSelector((state: RootState) => state.data.apiUrl);
const url = 'https://rickandmortyapi.graphcdn.app/'
console.log("docs await")  
const docsSchema = await fetchSchema(url)


    //  return(<div>{JSON.stringify(docsSchema)}</div>)

  console.log("docs return")  
 return <div>{JSON.stringify(docsSchema)}</div>
}

