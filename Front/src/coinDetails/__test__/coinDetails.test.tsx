import { screen, fireEvent } from '@testing-library/react';
import { waitFor } from '@testing-library/react'
import MockTheme from '../../test/utils/mockTheme';
import { MemoryRouter, Routes, Route } from 'react-router';

import { renderWithProviders } from '../../test/utils/renderWithProviders';
import CoinDetails from '../coinDetails';

renderWithProviders(
  <MockTheme>
    <MemoryRouter initialEntries={['/coin/monero']}>
      <Routes>
        <Route path="/coin/:id" element={<CoinDetails />} />
      </Routes>
    </MemoryRouter>
  </MockTheme>
);

test('CoinDetails', async () => {
  await waitFor(() => {
    screen.getAllByRole('heading', {level: 1, name: "Monero"});
    // screen.debug()
  });
});
