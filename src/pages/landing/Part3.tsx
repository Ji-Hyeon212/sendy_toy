import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

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
              component="h6"
              variant="h6"
              align="center"
              color="text.secondary"
              paragraph
            >
              개인부터 법인까지 누구나, 센디는 운송이 필요한 모두를 위해
              만들어진 서비스입니다.
            </Typography>
          </Container>
          <Box sx={{ textAlign: "center" }} maxWidth="md">
            <img
              src="/assets/img-service-desk.png"
              alt="random"
              width={"100%"}
            />
          </Box>
        </Stack>

        <Stack
          sx={{ pt: 20 }}
          direction="row"
          spacing={1}
          justifyContent="center"
        >
          <Container>
            <img src="assets/ic-ser-calc.png" alt="calc" />
            <Typography
              component="h5"
              variant="h5"
              align="left"
              color="text.primary"
              gutterBottom
            >
              <b>센디 요금 계산기</b>
            </Typography>
            <Typography
              variant="h6"
              align="left"
              color="text.secondary"
              paragraph
            >
              운송일과 상하차지를 입력하고 실시간 센디 요금을 바로 확인하세요.
            </Typography>
            <Link to={"/calccost"} style={{ textDecoration: "none" }}>
              <Button
                variant="text"
                size="large"
                endIcon={<ArrowForwardIosIcon />}
                disableElevation
                disableRipple
              >
                <b>바로가기</b>
              </Button>
            </Link>
          </Container>
          <Container>
            <img src="assets/ic-ser-location.png" alt="location" />
            <Typography
              component="h5"
              variant="h5"
              align="left"
              color="text.primary"
              gutterBottom
            >
              <b>통화없이 운송조회</b>
            </Typography>
            <Typography
              variant="h6"
              align="left"
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
              disableRipple
            >
              <b>바로가기</b>
            </Button>
          </Container>
          <Container>
            <img src="assets/ic-ser-ecom.png" alt="ecom" />
            <Typography
              component="h5"
              variant="h5"
              align="left"
              color="text.primary"
              gutterBottom
            >
              <b>센디 이커머스</b>
            </Typography>
            <Typography
              variant="h6"
              align="left"
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
              disableRipple
            >
              <b>바로가기</b>
            </Button>
          </Container>
        </Stack>
      </Container>
      <Box
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          justifyContent: "center",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
        display="flex"
      >
        <img src="assets\img-partners.png" alt="partners" />
      </Box>
    </ThemeProvider>
  );
};
export default Part3;
