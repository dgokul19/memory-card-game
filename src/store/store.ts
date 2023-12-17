import { combineReducers, configureStore } from '@reduxjs/toolkit'

import gameReducer from '../reducer/gameReducer';

const rootReducer = combineReducers ({
    gameReducer
})
export const store = configureStore({
  reducer: rootReducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
