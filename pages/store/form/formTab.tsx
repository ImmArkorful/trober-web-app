/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface FormState {
  activeTab: number;
}

const initialState: FormState = {
  activeTab: 0,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<number>) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = formSlice.actions;

export default formSlice.reducer;
