import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
            spacing={2}
            justifyContent="center"
          >
            <Container maxWidth="md">
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
                component="h4"
                variant="h4"
                align="left"
                color="text.primary"
                paragraph
                gutterBottom
              >
                비용과 시간을 모두 아껴보세요
              </Typography>
              <Box display={"flex"}>
                <Button
                  sx={{ width: 240 }}
                  variant="contained"
                  size="large"
                  fullWidth
                  endIcon={<ArrowForwardIosIcon />}
                  disableElevation
                >
                  지금 시작하기
                </Button>
              </Box>
            </Container>
            <Container maxWidth="lg">
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