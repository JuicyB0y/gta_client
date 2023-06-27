import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createNewPlane, getPlane } from './services/planeService';

export const getSinglePlane = createAsyncThunk(
  'GET_PLANE',
  async function (id, { rejectWithValue }) {
    try {
      return await getPlane(id);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const createPlane = createAsyncThunk(
  'CREATE_PLANE',
  async function (planeData, { rejectWithValue }) {
    try {
      return await createNewPlane(planeData);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  plane: null,
  isError: false,
  isLoading: false,
  message: '',
  errors: null,
};

export const singlePlaneSlice = createSlice({
  name: 'singlePlane',
  initialState,
  reducers: {
    resetPlaneErrors: (state) => {
      state.errors = null;
    },
  },
  extraReducers: {
    [getSinglePlane.pending]: (state) => {
      state.isLoading = true;
    },
    [getSinglePlane.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.plane = action.payload[0];
    },
    [getSinglePlane.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
      state.plane = null;
    },

    [createPlane.pending]: (state) => {
      state.errors = null;
    },
    [createPlane.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errors = null;
    },
    [createPlane.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errors = action.payload;
    },
  },
});

export const { resetPlaneErrors } = singlePlaneSlice.actions;

export default singlePlaneSlice.reducer;
