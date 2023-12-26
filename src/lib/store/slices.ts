import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

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

const schemaQuery =` {
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
  `



export const fetchSchema = createAsyncThunk(
    'FETCH_SCHEMA',
    async (_, { getState }) => {
      const state = getState() as RootState;
      const url = state.data.apiUrl;
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: schemaQuery }),
      };
      const request = new Request(url, options);
  
      const req = await fetch(request);
      const data = await req.json();
  
      return data.data;
    }
  );


export const fetchData = createAsyncThunk(
  'FETCH_DATA',
  async (_, { getState }) => {
    const state = getState() as RootState;
    const query = state.data.query;
    const url = state.data.apiUrl;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    };
    const request = new Request(url, options);

    const req = await fetch(request);
    const data = await req.json();

    return data.data;
  }
);

interface InitialState {
  headers: string;
  variables: string;
  apiUrl: string;
  query: string;
  data: object | null;
  loading: boolean;
  schemaLoading: boolean;
  value: number;
  schema: object | null
}

const initialState: InitialState = {
  headers: '',
  variables: '',
  apiUrl: 'https://rickandmortyapi.graphcdn.app/',
  query: baseQuery,
  data: null,
  loading: false,
  schemaLoading: false,
  value: 10,
  schema: null
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setVariables: (state, action: PayloadAction<string>) => {
      state.variables = action.payload;
    },
    setHeaders: (state, action: PayloadAction<string>) => {
      state.headers = action.payload;
    },
    setUrl: (state, action: PayloadAction<string>) => {
        state.apiUrl = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchData.rejected, (state) => {
        state.loading = false;
    });
    builder.addCase(fetchSchema.fulfilled, (state, action) => {
        state.schema = action.payload
    })
    
    builder.addCase(fetchSchema.pending, (state) => {
        state.schemaLoading = true;
    })

    builder.addCase(fetchSchema.rejected, (state) => {
        state.schemaLoading = false;
    })
   
  },
});

export const { setQuery, setVariables, setHeaders, setUrl } = dataSlice.actions;
export default dataSlice.reducer;
