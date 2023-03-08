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

const Part2 = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ py: 6 }} maxWidth="lg">
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
            color="text.primary"
            paragraph
          >
            1톤 용달부터 특수운송, 25톤 대형 트럭까지
            <br />
            원하는 용달차를 선택하고 운송을 시작해보세요.
          </Typography>
        </Container>
        <Grid sx={{ py: 3 }} container spacing={4}>
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
                <Button size="large" variant="contained" fullWidth>
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
                <Button size="large" variant="contained" fullWidth>
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
                <Button size="large" variant="contained" fullWidth>
                  예약하러 가기
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};
export default Part2;
