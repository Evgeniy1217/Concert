import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IId } from '../../types/id';

const INITIAL_STATE: IId = {
  id: null,
};

export const idSlice = createSlice({
  name: 'id',
  initialState: INITIAL_STATE,
  reducers: {
    idSuccess(state, action: PayloadAction<number>) {
      state.id = action.payload;
    },
  },
});

export default idSlice.reducer;
