import { configureStore } from '@reduxjs/toolkit';
import boardsSlice from './boardsSlice';

export const store = configureStore({
    reducer: {
        boards: boardsSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
