import { render, screen } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { waitFor } from '@testing-library/react'
import MockTheme from '../../test/utils/mockTheme';

import { renderWithProviders } from '../../test/utils/renderWithProdivers';
import CoinList from '../coinList';


test('CoinList-Global', async () => {
  renderWithProviders(
    <BrowserRouter>
      <MockTheme>
        <CoinList />
      </MockTheme>
    </BrowserRouter>
  );

  await waitFor(() => {
    expect(screen.getByText(/1111/i)).toBeInTheDocument();
    expect(screen.getByText(/2222/i)).toBeInTheDocument();
    // screen.debug();
  });
});

test('CoinList-Table-rows', async () => {
  renderWithProviders(
    <BrowserRouter>
      <MockTheme>
        <CoinList />
      </MockTheme>
    </BrowserRouter>
  );

  await waitFor(() => {
    // const table = screen.getByLabelText('coins-table', {exact:false});
    const trElements = screen.getAllByRole('row')
    expect(trElements).toHaveLength(7)
    // screen.debug();
  });
});

