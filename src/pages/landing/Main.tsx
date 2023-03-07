import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../../components/Layout/Footer/Footer";
import Header from "../../components/Layout/Header/Header";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 30,
          }}
        >
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                <b>화물운송이 간편해집니다.</b>
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                비용과 시간을 모두 아껴보세요
              </Typography>
              <Button variant="contained">지금 시작하기</Button>
            </Container>
            <Container maxWidth="md">
              <img
                sizes="small"
                src="https://sendy.ai/images/homepage-v4/20200703/main-truck-woman.svg"
                alt="random"
              />
            </Container>
          </Stack>
        </Box>
        <Container sx={{ py: 6 }} maxWidth="md">
          {/* part2 */}
          <Container maxWidth="md">
            <Typography
              component="h2"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              <b>운송의 시작과 끝, 센디와 함께</b>
            </Typography>
            <Typography
              variant="body1"
              align="center"
              color="text.secondary"
              paragraph
            >
              1톤 용달부터 특수운송, 25톤 대형 트럭까지
              <br />
              원하는 용달차를 선택하고 운송을 시작해보세요.
            </Typography>
          </Container>
          <Grid container spacing={4}>
            <Grid item key={1} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "24px",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: "56.20%",
                  }}
                  image="https://sendy.ai/images/homepage-v4/20210630/1@2x.png"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="center"
                  >
                    <b>용달차가 필요할 때</b>
                  </Typography>
                  <Typography variant="h6" align="center">
                    1톤 트럭 <b>3만원 부터</b>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="large" variant="contained">
                    예약하러 가기
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item key={2} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "24px",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                  }}
                  image="https://sendy.ai/images/homepage-v4/20210630/2@2x.png"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="center"
                  >
                    <b>특수운송이 필요할 때</b>
                  </Typography>
                  <Typography variant="h6" align="center">
                    냉동 탑차 <b>4만원 부터</b>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="large" variant="contained">
                    예약하러 가기
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item key={1} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "24px",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                  }}
                  image="https://sendy.ai/images/homepage-v4/20210630/3@2x.png"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="center"
                  >
                    <b>물류센터 입고가 필요할 때</b>
                  </Typography>
                  <Typography variant="h6" align="center">
                    5톤 윙 <b>13만원 부터</b>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="large" variant="contained">
                    예약하러 가기
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
        {/* end of part2 */}
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default Main;
