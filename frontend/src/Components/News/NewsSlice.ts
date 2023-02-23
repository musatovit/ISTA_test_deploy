/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../App/api/apiNews';
import { State, OneNews, NewsId } from './Types/types';

const initialState: State = {
  news: [],
  message: undefined,
};

export const initNews = createAsyncThunk('news/load', () => api.loadNews());
export const addNews = createAsyncThunk('news/add', (newNews: OneNews) =>
  api.addNews(newNews)
);
export const deleteNews = createAsyncThunk('news/delete', (id: NewsId) =>
  api.delNews(id)
);
export const updatedNews = createAsyncThunk('news/update', (oneNews: OneNews) =>
  api.updateNews(oneNews)
);

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initNews.fulfilled, (state, action) => {
        state.news = action.payload;
      })
      .addCase(initNews.rejected, (state, action) => {
        state.message = action.error.message;
      })
      .addCase(addNews.fulfilled, (state, action) => {
        state.news.push(action.payload);
      })
      .addCase(addNews.rejected, (state, action) => {
        state.message = action.error.message;
      })
      .addCase(deleteNews.fulfilled, (state, action) => {
        const arr = state.news.filter((OneNew) => OneNew.id !== action.payload);
        state.news = arr;
      })
      .addCase(deleteNews.rejected, (state, action) => {
        state.message = action.error.message;
      })
      .addCase(updatedNews.fulfilled, (state, action) => {
        state.news = state.news.map((newNews) =>
          newNews.id === action.payload.id ? action.payload : newNews
        );
      })
      .addCase(updatedNews.rejected, (state, action) => {
        state.message = action.error.message;
      });
  },
});

export default newsSlice.reducer;
