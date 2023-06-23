import { configureStore } from "@reduxjs/toolkit";
import deckSlice from "./features/deckSlice";

export const store = configureStore({
    reducer: {
        deck: deckSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
