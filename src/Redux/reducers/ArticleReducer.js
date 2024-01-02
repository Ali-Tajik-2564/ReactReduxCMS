import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getArticlesFormServer = createAsyncThunk(
  'users/getArticlesFromServer',
  async (url) => {
    console.log('url', url);
    return fetch(url)
      .then((res) => res.json())
      .then((data) => data);
  }
);
export const RemoveArticleFormServer = createAsyncThunk(
  'users/RemoveArticleFromServer',
  async (url) => {
    console.log('url', url);
    return fetch(url, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);
const slice = createSlice({
  name: 'Article',
  initialState: [],
  reducers: {},
  extraReducers: (Builder) => {
    Builder.addCase(
      getArticlesFormServer.fulfilled,
      (state, action) => action.payload
    );
    Builder.addCase(RemoveArticleFormServer.fulfilled, (state, action) => {
      const newState = state.filter(
        (article) => article._id !== action.payload.id
      );
      return newState;
    });
  },
});

export default slice.reducer;
