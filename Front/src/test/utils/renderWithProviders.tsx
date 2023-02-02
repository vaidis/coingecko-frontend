import { render, RenderOptions } from '@testing-library/react';
import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import type { PreloadedState } from '@reduxjs/toolkit'
import { setupStore } from '../../store'

// interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
//   preloadedState?: PreloadedState<RootState>
//   store?: AppStore
// }

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  } = {}
) {

  setupListeners(store.dispatch);

  function Wrapper({ children }: any) {
    return <Provider store={store}>{children}</Provider>
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
