import React from 'react';
import { render, screen } from '@testing-library/react';
import MockTheme from '../../test/utils/mockTheme'

import Spinner from '../spinner';

test('spinner', () => {
  render(<MockTheme><Spinner /></MockTheme>);``
});
