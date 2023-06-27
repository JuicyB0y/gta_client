import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllPlanes } from './services/planeService';

export const getPlanes = createAsyncThunk('GET_PLANES', async function (_, { rejectWithValue }) {
  try {
    return await getAllPlanes();
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const initialState = {
  planes: null,
  isError: false,
  isLoading: false,
  message: true,
};

export const planesSlice = createSlice({
  name: 'planes',
  initialState,
  reducers: {
    sortPlanesByAsc(state) {
      state.planes.sort((a, b) => a.price - b.price);
    },
    sortPlanesByDesc(state) {
      state.planes.sort((a, b) => b.price - a.price);
    },
    getPlaneById(state, action) {
      state.planes.find((item) => item._id === action.payload);
    },
  },
  extraReducers: {
    [getPlanes.pending]: (state) => {
      state.isLoading = true;
    },
    [getPlanes.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.planes = action.payload;
    },
    [getPlanes.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.planes = null;
    },
  },
});

export const { sortPlanesByAsc, sortPlanesByDesc, getPlaneById } = planesSlice.actions;

export default planesSlice.reducer;
