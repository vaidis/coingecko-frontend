import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';

import Header from './Header'
import CoinList from './coinList/coinList';
import CoinDetails from './coinDetails/coinDetails';

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function App() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        typography: {
          h1: {
            fontSize: 28,
            fontWeight: 500,
          },
          h2: {
            fontSize: 24,
            fontWeight: 200,
            paddingBottom: 20,
          }
        },
        palette: {
          mode,
          primary: {
            main: teal[700],
          },
        },
      }),
    [mode],
  );

  return (
    <div className="App">
      <BrowserRouter>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <Header />
            <Container maxWidth="md">
              <Box sx={{ flexGrow: 1 }}>
                <Grid container
                  spacing={0}
                  direction="column"
                  justifyContent="center"
                >
                  <Routes>
                    <Route path="/" element={<CoinList />} />
                    <Route path="/coin/:id" element={<CoinDetails />} />
                  </Routes>
                </Grid>
              </Box>
            </Container>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
