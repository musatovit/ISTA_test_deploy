/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../App/api/api';
import { State, Post, PostId } from './Types/types';

const initialState: State = {
  posts: [],
  error: undefined,
};

export const initPosts = createAsyncThunk('posts/load', () => api.loadPosts());
export const addPosts = createAsyncThunk('posts/add', (newPost: Post) =>
  api.addPost(newPost)
);
export const deletePosts = createAsyncThunk('posts/delete', (id: PostId) =>
  api.delPost(id)
);
export const updateDPost = createAsyncThunk('posts/update', (post: Post) =>
  api.updatePost(post)
);
const postsSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(initPosts.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addPosts.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(addPosts.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deletePosts.fulfilled, (state, action) => {
        const arr = state.posts.filter((post) => post.id !== action.payload);
        state.posts = arr;
      })

      .addCase(deletePosts.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateDPost.fulfilled, (state, action) => {
        state.posts = state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        );
      })
      .addCase(updateDPost.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
