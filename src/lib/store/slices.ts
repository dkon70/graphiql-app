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

export const fetchData = createAsyncThunk(
  'FETCH_DATA',
  async (_, { getState }) => {
    const state = getState() as RootState;
    const query = state.data.query;
    const url = 'https://rickandmortyapi.graphcdn.app/';
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

    return JSON.stringify(data.data);
  }
);

const initialState = {
  headers: '',
  apiUrl: '',
  query: baseQuery,
  data: '',
  loading: false,
  value: 10,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
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
  },
});

export const { setQuery } = dataSlice.actions;
export default dataSlice.reducer;
