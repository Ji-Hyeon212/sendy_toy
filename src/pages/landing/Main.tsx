import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../../components/Layout/Footer/Footer";
import Header from "../../components/Layout/Header/Header";
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";

const theme = createTheme();

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <Part1 />
        <Part2 />
        <hr />
        <Part3 />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default Main;
