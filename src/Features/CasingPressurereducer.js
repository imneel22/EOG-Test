import { createSlice } from 'redux-starter-kit';

const initialState = {
  casingPressureData: [],
};

const selected = createSlice({
  name: 'casingPressureData',
  initialState,
  reducers: {
    casingPressureData: (state, action) => {
      state.casingPressureData = [...state.casingPressureData, action.payload];
    },
  },
});

export const casingPReducer = selected.reducer;
export const casingPressureActions = selected.actions;
