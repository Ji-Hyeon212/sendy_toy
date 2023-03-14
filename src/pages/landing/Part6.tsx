//센디 가이드
import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

const Part6 = () => {
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
        <Box
          sx={{
            py: 3,
            px: 2,
            mt: "auto",
            height: "437",
            justifyContent: "center",
            backgroundColor: theme.palette.primary.main,
          }}
        ></Box>

        <Container maxWidth="lg">
          <Stack
            sx={{ pt: 16 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Container maxWidth="md">
              <img src="assets/ic-section-mag.png" alt="mag" />
              <Typography
                component="h3"
                variant="h3"
                align="left"
                color="text.primary"
                gutterBottom
              >
                <b>
                  더 자세한 정보를 <br />
                  찾고 계신가요?
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
                센디 이용가이드에서 필요한 정보를 지금 바로 확인하세요.
              </Typography>
              <Button
                sx={{ width: 240, height: 56 }}
                variant="contained"
                size="large"
                fullWidth
                disableElevation
                disableRipple
              >
                센디 가이드 전체 보기
              </Button>
            </Container>
            <Stack direction="column">
              <Container
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[200]
                      : theme.palette.grey[800],
                }}
              >
                <Typography
                  component="h6"
                  variant="h6"
                  align="left"
                  color="text.primary"
                  gutterBottom
                >
                  <b>어떤 차량으로 옮겨야 하죠?</b>
                </Typography>
                <Typography
                  variant="body2"
                  align="left"
                  color="text.primary"
                  paragraph
                  gutterBottom
                >
                  운송 물품에 따른 용달 차량을 확인해보세요.
                </Typography>
              </Container>
              <Container>
                <Typography
                  component="h6"
                  variant="h6"
                  align="left"
                  color="text.primary"
                  gutterBottom
                >
                  <b>당일 운송 예약도 가능한가요?</b>
                </Typography>
                <Typography
                  variant="body2"
                  align="left"
                  color="text.primary"
                  paragraph
                  gutterBottom
                >
                  시간대에 따라 달라질 수 있습니다. 예약 가능 시간을
                  확인해보세요.
                </Typography>
              </Container>
              <Container>
                <Typography
                  component="h6"
                  variant="h6"
                  align="left"
                  color="text.primary"
                  gutterBottom
                >
                  <b>운송 예약 전 체크리스트</b>
                </Typography>
                <Typography
                  variant="body2"
                  align="left"
                  color="text.primary"
                  paragraph
                  gutterBottom
                >
                  운송 예약 전에 이것만은 꼭 확인하세요.
                </Typography>
              </Container>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
};
export default Part6;
