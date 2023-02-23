/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../App/api/apiDescr';
import { Description, DescriptionId, State } from './Types/type';

const initialState: State = {
  descriptions: [],
  message: undefined,
};

export const initDescription = createAsyncThunk('description/load', () =>
  api.loadDescription()
);
export const addDescriptions = createAsyncThunk(
  'description/add',
  (newDescription: Description) => api.addDescription(newDescription)
);
export const deleteDescriptions = createAsyncThunk(
  'description/delete',
  (id: DescriptionId) => api.delDescription(id)
);
export const updateDescriptions = createAsyncThunk(
  'description/update',
  (description: Description) => api.updateDescription(description)
);

const descriptionSlice = createSlice({
  name: 'description',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initDescription.fulfilled, (state, action) => {
        state.descriptions = action.payload;
      })
      .addCase(initDescription.rejected, (state, action) => {
        state.message = action.error.message;
      })
      .addCase(addDescriptions.fulfilled, (state, action) => {
        state.descriptions.push(action.payload);
      })
      .addCase(addDescriptions.rejected, (state, action) => {
        state.message = action.error.message;
      })
      .addCase(deleteDescriptions.fulfilled, (state, action) => {
        const arr = state.descriptions.filter(
          (description) => description.id !== action.payload
        );
        state.descriptions = arr;
      })

      .addCase(deleteDescriptions.rejected, (state, action) => {
        state.message = action.error.message;
      })
      .addCase(updateDescriptions.fulfilled, (state, action) => {
        state.descriptions = state.descriptions.map((description) =>
          description.id === action.payload.id ? action.payload : description
        );
      })
      .addCase(updateDescriptions.rejected, (state, action) => {
        state.message = action.error.message;
      });
  },
});

export default descriptionSlice.reducer;
