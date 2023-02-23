import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PhoneForm, State } from './Types/types';
import { addPhone } from '../../App/api/apiPhone';

const initialState: State = {
  phones: [],
  message: undefined,
};

export const addPhones = createAsyncThunk('phones/add', (newPhone: PhoneForm) =>
  addPhone(newPhone)
);

const phoneSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addPhones.fulfilled, (state, action) => {
        state.phones?.push(action.payload);
      })
      .addCase(addPhones.rejected, (state, action) => {
        state.message = action.error.message;
      });
  },
});

export default phoneSlice;
