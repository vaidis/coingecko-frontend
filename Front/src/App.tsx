import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { teal, grey } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Header from './Header'
import CoinList from './coinList/coinList';
import CoinDetails from './coinDetails/coinDetails';

import { useSelector } from "react-redux";
import { RootState } from './store';

function App() {
  const { mode } = useSelector((state: RootState ) => state.theme);

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
          },
          subtitle1: {
            fontSize: 14,
            fontWeight: 'bold',
            color: mode === 'light' ? grey[900] : grey[200]
          },
          subtitle2: {
            fontSize: 14,
            fontWeight: 200,
            color: mode === 'light' ? grey[700] : grey[500]
          },
        },
        palette: {
          mode,
          action: {
            active: "#00f",
            hover: "#f00",
            focus: "#00f",
            selected: "#00f",
            disabled: "#fff",
            disabledBackground: "#444",
          },
          primary: {
            main: teal[800],
          },
          ...(mode === 'light'
            ? {
              // light
              text: {
                primary: grey[800],
                secondary: grey[800],
              },
            }
            : {
              // dark
              background: {
                default: grey[900],
                paper: grey[900],
              },
              text: {
                primary: grey[200],
                secondary: grey[200],
              },
            }
          ),
        },
      }),
    [mode]
  );

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Container maxWidth="md">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={0} direction="column" justifyContent="center">
                <Routes>
                  <Route path="/" element={<CoinList />} />
                  <Route path="/coin/:id" element={<CoinDetails />} />
                </Routes>
              </Grid>
            </Box>
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
