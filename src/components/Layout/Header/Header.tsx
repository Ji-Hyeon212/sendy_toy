import * as React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import { ReactComponent as Logo } from "./assets/sendy-logo-navy.svg";
import {
  createTheme,
  CssBaseline,
  Stack,
  Switch,
  ThemeProvider,
  Toolbar,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e58ec",
    },
    secondary: {
      main: "#f3f3f3",
    },
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "white",
          height: 3,
        },
      },
    },
  },
});

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // event.preventDefault();
      }}
      {...props}
    />
  );
}

const Header = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Toolbar className="flex justify-between">
        <Box sx={{ mt: 4, width: "100%" }}>
          <Tabs
            sx={{ width: "100%" }}
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <Stack direction="row" spacing={70} sx={{ width: "100%" }}>
              <Link to="/">
                <Box>
                  <img
                    src="assets/Logo-Navy.png"
                    alt="logo"
                    width="76"
                    height="26"
                  />
                </Box>
              </Link>

              <Box>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="nav tabs example"
                >
                  <LinkTab label="서비스" href="/" />
                  <LinkTab label="요금 안내" href="/" />
                  <Link to="/calccost" style={{ textDecoration: "none" }}>
                    <LinkTab label="비용 계산기" />
                  </Link>
                  <LinkTab label="고객센터" href="/" />
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <LinkTab label="로그인" />
                  </Link>
                  <LinkTab label="회원가입" href="/" />
                </Tabs>
              </Box>
            </Stack>
          </Tabs>
        </Box>
      </Toolbar>
    </ThemeProvider>
  );
};
export default Header;
