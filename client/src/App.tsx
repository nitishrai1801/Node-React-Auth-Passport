import React from "react";
import {
  Box,
  CssBaseline,
  Paper,
  Typography,
  ThemeProvider,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import routes from "./routes";
import { Routes, Route } from "react-router-dom";
import theme from "./theme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Router } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from './components/auth/ProtectedRoute'
import Payment from "./pages/Payment";
import Logout from "./components/auth/Logout";
function App() {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box height="100vh" display="flex" flexDirection="column">
          <BrowserRouter>
            <Navbar />
            <Routes>
              {routes.map((route) => (
                <Route path={route.path} element={<route.component />} />
              ))}
              <Route element={<ProtectedRoute />}>
                <Route path='logout' element={<Logout />} />
                <Route path='payment' element={<Payment />} />
              </Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </Box>
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default App;
