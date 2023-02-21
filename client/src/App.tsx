import React from 'react';
import { Box, CssBaseline, Paper, Typography, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import routes from './routes';
import { Routes, Route } from 'react-router-dom';
import theme from './theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Router } from 'react-router-dom';

function App() {


  return (
    <ThemeProvider theme={theme}>

      <CssBaseline />
      <Box height="100vh" display="flex" flexDirection="column">
        <BrowserRouter>
          <Navbar />
          <Routes>
            {routes.map(route =>
              <Route path={route.path} element={<route.component />} />
            )
            }
          </Routes>
          <Footer />
        </BrowserRouter>
      </Box>
    </ThemeProvider >
  );
}

export default App;
