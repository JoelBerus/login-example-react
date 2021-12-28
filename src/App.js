import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './views/Home';
import Login from './views/auth/Login';
import About from './views/About';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from "./components/layout/Layout";

const theme = createTheme();

function App() {
  return (
    <Layout className="Layout">
      {/* <h1>Welcome to React Router!</h1> */}
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="about" element={<About />} /><Route
              path="*"
              element={<Navigate to="/" />}
          />
        </Routes>
      </ThemeProvider>
    </Layout>
  );
}

export default App;