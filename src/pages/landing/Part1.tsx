/* eslint-disable react-hooks/rules-of-hooks */
import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link, useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e58ec",
    },
    secondary: {
      main: "#f3f3f3",
    },
  },
});

// const navigate = useNavigate();

// const navigateToLogin = () => {
//   navigate("/login");
// };

const Part1 = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 30,
        }}
      >
        <Container maxWidth="lg">
          <Stack
            sx={{ pt: 16 }}
            direction="row"
            spacing={1}
            justifyContent="center"
          >
            <Container maxWidth="lg">
              <Typography
                component="h2"
                variant="h2"
                align="left"
                color="text.primary"
                gutterBottom
              >
                <b>
                  화물운송이 <br />
                  간편해집니다.
                </b>
              </Typography>
              <Typography
                component="h5"
                variant="h5"
                align="left"
                color="text.primary"
                paragraph
                gutterBottom
              >
                비용과 시간을 모두 아껴보세요
              </Typography>
              <Box display={"flex"}>
                <Link to={"/login"}>
                  <Button
                    //onClick={navigateToLogin}
                    sx={{ width: 240, height: 56 }}
                    variant="contained"
                    size="large"
                    fullWidth
                    endIcon={<ArrowForwardIosIcon />}
                    disableElevation
                    disableRipple
                  >
                    지금 시작하기
                  </Button>
                </Link>
              </Box>
            </Container>
            <Container maxWidth="xl">
              <img
                src="/assets/main-truck-woman.svg"
                alt="random"
                width="100%"
              />
            </Container>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
};
export default Part1;
