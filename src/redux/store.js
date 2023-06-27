import { configureStore } from '@reduxjs/toolkit';
import planes from './slices/planeSlice.js';
import singlePlane from './slices/singlePlaneSlice.js';

export const store = configureStore({
  reducer: {
    planes,
    singlePlane,
  },
});
