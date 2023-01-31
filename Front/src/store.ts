import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { coinListApi } from './coinApi/coinApi';
import { themeSlice } from './themeSlice';

// Reducers
const rootReducer = combineReducers({
  theme: themeSlice.reducer,
  [coinListApi.reducerPath]: coinListApi.reducer,
})

// Store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (defaultMiddleware) => defaultMiddleware().concat(coinListApi.middleware),
});

// for AppStore
export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    // preloadedState,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(coinListApi.middleware),
  })
}

// Store types
export type AppStore = ReturnType<typeof setupStore>; // from AppStore
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Select / Dispatch hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
