import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

const baseQuery = `query($id: ID!) {
  character(id: $id) {
		name
  }
}
`;

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
    const stateHeaders = state.data.headers;
    let jsonHeaders;

    try {
      jsonHeaders = JSON.parse(stateHeaders);
    } catch (err) {
      throw new Error(
        'Headers must be a valid JSON string. ' + (err as Error).message
      );
    }
    const variables = state.data.variables;
    const requestBody = {
      query: query,
      variables: {},
    };
    variables ? (requestBody.variables = JSON.parse(variables)) : null;
    const options = {
      method: 'POST',
      headers: jsonHeaders,
      body: JSON.stringify(requestBody),
    };

    const request = new Request(url, options);
    const req = await fetch(request);
    if (req.ok) {
      const data = await req.json();
      return data.data;
    } else {
      const data = await req.json();
      return data;
    }
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
  schema: object | null;
  error: string | null;
}

const initialState: InitialState = {
  headers: '{"Content-Type": "application/json"}',
  variables: `  {
    "id": "1"
  }`,
  apiUrl: 'https://rickandmortyapi.graphcdn.app/',
  query: baseQuery,
  data: {},
  loading: false,
  schemaLoading: false,
  schema: null,
  error: '',
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
    setData: (state, action: PayloadAction<object>) => {
      state.data = action.payload;
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

    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.data = {};
      state.error = action.error.message as string;
    });
    builder.addCase(fetchSchema.fulfilled, (state, action) => {
      state.schema = action.payload;
    });

    builder.addCase(fetchSchema.pending, (state) => {
      state.schemaLoading = true;
    });

    builder.addCase(fetchSchema.rejected, (state) => {
      state.schemaLoading = false;
    });
  },
});

export const { setQuery, setVariables, setHeaders, setUrl } = dataSlice.actions;
export default dataSlice.reducer;
