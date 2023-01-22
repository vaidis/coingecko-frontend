import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { teal, grey } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Header from './layout/header'
import Footer from './layout/footer'

import CoinList from './coinList/coinList';
import CoinDetails from './coinDetails/coinDetails';

import { useSelector } from "react-redux";
import { RootState } from './store';

function App() {
  const { mode } = useSelector((state: RootState) => state.theme);

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
            active: "#000",
            hover: "#f00",
            focus: "#000",
            selected: "#000",
            disabled: "#fff",
            disabledBackground: "#444",
          },
          primary: {
            main: teal[800],
          },
          ...(mode === 'light'
            ? {
              // light
              background: {
                default: 'white',
                paper: grey[200],
              },
              text: {
                primary: grey[800],
                secondary: grey[800],
              },
            }
            : {
              // dark
              background: {
                default: grey[900],
                paper: 'black',
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
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container maxWidth="md">
          <Box>
            <Routes>
              <Route path="/" element={<CoinList />} />
              <Route path="/coin/:id" element={<CoinDetails />} />
            </Routes>
          </Box>
        </Container>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
