import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
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

const Part4 = () => {
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
          <Container>
            <Typography
              component="h3"
              variant="h3"
              align="left"
              color="text.primary"
              gutterBottom
            >
              <b>
                손 안에서 펼쳐지는 <br />
                간편한 운송관리
              </b>
            </Typography>
            <Typography
              component="h6"
              variant="h6"
              align="left"
              color="text.primary"
              paragraph
              gutterBottom
            >
              운송의 시작부터 끝까지, 센디와 함께하는 간편한 운송을
              체험해보세요.
            </Typography>
          </Container>
          <Stack
            sx={{ pt: 16 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Stack direction="column">
              <Container sx={{ mb: 4 }}>
                <Typography
                  component="h5"
                  variant="h5"
                  align="left"
                  color="text.primary"
                  gutterBottom
                >
                  <b>실시간 요금 확인</b>
                </Typography>
                <Typography
                  component="h6"
                  variant="h6"
                  align="left"
                  color="text.primary"
                  paragraph
                  gutterBottom
                >
                  운송일, 상차지, 하차지를 입력하고 실시간 운송요금을
                  확인하세요.
                </Typography>
              </Container>
              <Container sx={{ mb: 4 }}>
                <Typography
                  component="h5"
                  variant="h5"
                  align="left"
                  color="text.primary"
                  gutterBottom
                >
                  <b>운송비 간편결제</b>
                </Typography>
                <Typography
                  component="h6"
                  variant="h6"
                  align="left"
                  color="text.primary"
                  paragraph
                  gutterBottom
                >
                  카드를 간편하게 추가하고 편리하게 결제하세요.
                </Typography>
              </Container>
              <Container sx={{ mb: 4 }}>
                <Typography
                  component="h5"
                  variant="h5"
                  align="left"
                  color="text.primary"
                  gutterBottom
                >
                  <b>기사님 정보 확인</b>
                </Typography>
                <Typography
                  component="h6"
                  variant="h6"
                  align="left"
                  color="text.primary"
                  paragraph
                  gutterBottom
                >
                  운송별 담당 기사님과 차량번호를 센디에서 바로 확인해보세요.
                </Typography>
              </Container>
              <Container sx={{ mb: 4 }}>
                <Typography
                  component="h5"
                  variant="h5"
                  align="left"
                  color="text.primary"
                  gutterBottom
                >
                  <b>운송 현황</b>
                </Typography>
                <Typography
                  component="h6"
                  variant="h6"
                  align="left"
                  color="text.primary"
                  paragraph
                  gutterBottom
                >
                  출발지부터 도착지까지 전화 없이 운송을 추적해보세요.
                </Typography>
              </Container>
            </Stack>
            <Container maxWidth="xs">
              <img src="assets/Group 676.png" alt="random" />
            </Container>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
};
export default Part4;
