import React from 'react';
import { render, screen } from '@testing-library/react';
import { serializeError } from 'serialize-error';

import Error from '../error';

const error = { status: 'SOME ERROR TITLE',  error: "some error description"}

test('renders error message', () => {
  render(<Error errorProp={serializeError(error)}/>);

  const title = screen.getByText(/SOME ERROR TITLE/i);
  const descrption = screen.getByText(/some error description/i);

  expect(title).toBeInTheDocument();
  expect(descrption).toBeInTheDocument();
});
