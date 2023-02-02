import { screen } from '@testing-library/react';
import { waitFor } from '@testing-library/react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { renderWithProviders } from '../../test/utils/renderWithProviders';
import MockTheme from '../../test/utils/mockTheme';
import Pager from '../coinListPager';

test('Pager: 4 buttons exist', async () => {
    const page = 1;
    const per_page = 25;
    renderWithProviders(
        <BrowserRouter>
            <MockTheme>
                <Pager page={page} per_page={per_page} />
            </MockTheme>
        </BrowserRouter>
    );
    await waitFor(() => {
        const items = screen.getAllByRole('button');
        expect(items).toHaveLength(4);
    });
});

test('Pager: Count 10 Rows per Page', async () => {
    const page = 1;
    const per_page = 10;
    renderWithProviders(
        <BrowserRouter>
            <MockTheme>
                <Pager page={page} per_page={per_page} />
            </MockTheme>
        </BrowserRouter>
    );
    await waitFor(() => {
        expect(screen.getByText('Page 1 from 124')).toBeInTheDocument();
    });
});

test('Pager: Count 25 Rows per Page', async () => {
    const page = 1;
    const per_page = 25;
    renderWithProviders(
        <BrowserRouter>
            <MockTheme>
                <Pager page={page} per_page={per_page} />
            </MockTheme>
        </BrowserRouter>
    );
    await waitFor(() => {
        expect(screen.getByText('Page 1 from 50')).toBeInTheDocument();
    });
});
