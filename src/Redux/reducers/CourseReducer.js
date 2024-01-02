import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCoursesFormServer = createAsyncThunk(
  'users/getCoursesFromServer',
  async (url) => {
    console.log('url', url);
    return fetch(url)
      .then((res) => res.json())
      .then((data) => data);
  }
);

const slice = createSlice({
  name: 'courses',
  initialState: [],
  reducers: {},
  extraReducers: (Builder) => {
    Builder.addCase(
      getCoursesFormServer.fulfilled,
      (state, action) => action.payload
    );
  },
});

export default slice.reducer;
