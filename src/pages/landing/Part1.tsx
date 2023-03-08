import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../../components/Layout/Footer/Footer";
import Header from "../../components/Layout/Header/Header";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const theme = createTheme();

const Part1 = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* part1 */}
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
                component="h1"
                variant="h1"
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
              <Container>
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  endIcon={<ArrowForwardIosIcon />}
                  disableElevation
                >
                  지금 시작하기
                </Button>
              </Container>
            </Container>
            <Container maxWidth="xs">
              <img
                src="https://sendy.ai/images/homepage-v4/20200703/main-truck-woman.svg"
                alt="random"
              />
            </Container>
          </Stack>
        </Container>
      </Box>
      {/* end of part1 */}
    </ThemeProvider>
  );
};
export default Part1;
