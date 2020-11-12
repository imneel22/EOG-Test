import { createSlice } from 'redux-starter-kit';

const initialState = {
  selectedMetrics: [],
};

const selected = createSlice({
  name: 'activeMetrics',
  initialState,
  reducers: {
    active: (state, action) => {
      state.selectedMetrics = [...state.selectedMetrics, action.payload];
    },
    remove: (state, action) => {
      state.selectedMetrics = state.selectedMetrics.filter(element => element.metricName !== action.payload);
    },
  },
});

export const activeMetrics = selected.reducer;
export const activeMetricsactions = selected.actions;
