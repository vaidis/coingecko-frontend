import { screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import { waitFor } from '@testing-library/react'
import MockTheme from '../../test/utils/mockTheme';

import { renderWithProviders } from '../../test/utils/renderWithProviders';
import CoinList from '../coinList';

test('CoinList Global Info', async () => {
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
  });
});

test('CoinList Table Rows', async () => {
  renderWithProviders(
    <BrowserRouter>
      <MockTheme>
        <CoinList />
      </MockTheme>
    </BrowserRouter>
  );
  await waitFor(() => {
    const trElements = screen.getAllByRole('row')
    expect(trElements).toHaveLength(26)
  });
});

test('CoinList Pager Buttons', async () => {
  renderWithProviders(
    <BrowserRouter>
      <MockTheme>
        <CoinList />
      </MockTheme>
    </BrowserRouter>
  );
  await waitFor(() => {
    expect(screen.getByText(/Page\ 1\ from\ 50/i)).toBeInTheDocument()

    const buttonNext = screen.getByRole('button', { name: /Next/i })
    fireEvent.click(buttonNext)
    expect(screen.getByText(/Page\ 2\ from\ 50/i)).toBeInTheDocument()

    const buttonLast = screen.getByRole('button', { name: /Last/i })
    fireEvent.click(buttonLast)
    expect(screen.getByText(/Page\ 50\ from\ 50/i)).toBeInTheDocument()
  })
});
