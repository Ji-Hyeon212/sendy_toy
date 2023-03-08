import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const theme = createTheme();

const Part3 = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ py: 10 }} maxWidth="lg">
        <Stack
          sx={{ pt: 16 }}
          direction="column"
          spacing={2}
          justifyContent="center"
        >
          <Container maxWidth="md">
            <Typography
              component="h2"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              <b>운송이 필요한 모두를 위해</b>
            </Typography>
            <Typography
              component="h5"
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              개인부터 법인까지 누구나, 센디는 운송이 필요한 모두를 위해
              만들어진 서비스입니다.
            </Typography>
          </Container>
          <Container maxWidth="sm">
            <img
              sizes="small"
              src={require("../../assets/img-service-desk.png").default}
              alt="random"
            />
          </Container>
        </Stack>

        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Container>
            <Typography
              component="h4"
              variant="h4"
              align="left"
              color="text.primary"
              gutterBottom
            >
              <b>센디 요금 계산기</b>
            </Typography>
            <Typography
              variant="body1"
              align="left"
              color="text.secondary"
              paragraph
            >
              운송일과 상하차지를 입력하고 실시간 센디 요금을 바로 확인하세요.
            </Typography>
            <Button
              variant="text"
              size="large"
              endIcon={<ArrowForwardIosIcon />}
              disableElevation
            >
              <b>바로가기</b>
            </Button>
          </Container>
          <Container>
            <Typography
              component="h4"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              <b>통화없이 운송조회</b>
            </Typography>
            <Typography
              variant="body1"
              align="center"
              color="text.secondary"
              paragraph
            >
              운송 시작부터 완료까지 전화없이 운송 단계를 추적하세요.
            </Typography>
            <Button
              variant="text"
              size="large"
              endIcon={<ArrowForwardIosIcon />}
              disableElevation
            >
              <b>바로가기</b>
            </Button>
          </Container>
          <Container>
            <Typography
              component="h4"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              <b>센디 이커머스</b>
            </Typography>
            <Typography
              variant="body1"
              align="center"
              color="text.secondary"
              paragraph
            >
              오픈마켓 판매자들을 위한 물류센터 입고부터 정산까지 센디에서 한
              번에.
            </Typography>
            <Button
              variant="text"
              size="large"
              endIcon={<ArrowForwardIosIcon />}
              disableElevation
            >
              <b>바로가기</b>
            </Button>
          </Container>
        </Stack>
      </Container>
    </ThemeProvider>
  );
};
export default Part3;
