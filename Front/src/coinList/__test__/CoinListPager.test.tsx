import { render, screen } from '@testing-library/react';
import { waitFor } from '@testing-library/react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { renderWithProviders } from '../../test/utils/renderWithProdivers';
import MockTheme from '../../test/utils/mockTheme';
import Pager from '../coinListPager';

const page = 1;
const per_page = 25;

test('Pager', async () => {
    renderWithProviders(
        <BrowserRouter>
            <MockTheme>
                <Pager page={page} per_page={per_page} />
            </MockTheme>
        </BrowserRouter>
    );
    await waitFor(() => {
        const items = screen.getAllByRole('button')
        expect(items).toHaveLength(4);
        screen.debug()
    });
});
