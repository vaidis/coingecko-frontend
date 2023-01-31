import React from 'react';
import { ThemeProvider} from '@mui/material/styles';
import { useTheme } from '@mui/material';

function MockTheme({ children }: any) {
  const theme = useTheme();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default MockTheme;