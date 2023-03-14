// 제휴 업체
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

const Part5 = () => {
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
              <img src="assets/ic-section-partners.png" alt="building" />
              <Typography
                component="h3"
                variant="h3"
                align="left"
                color="text.primary"
                gutterBottom
              >
                <b>
                  많은 사용자들이 이미
                  <br />
                  센디와 함께하고 있습니다.
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
                개인 운송뿐만 아니라 기업 운송까지, 지금 센디와 함께하세요.
              </Typography>
              <Box display={"flex"}>
                <Button
                  sx={{ width: 240, height: 56 }}
                  variant="contained"
                  size="large"
                  fullWidth
                  disableElevation
                  disableRipple
                >
                  고객사례 전체보기
                </Button>
              </Box>
              {/* <Container>
                슬라이드
              </Container> */}
            </Container>
            <Container maxWidth="xs">
              <img
                src="assets\img-partner-man@2x.png"
                alt="random"
                width={"100%"}
              />
            </Container>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
};
export default Part5;
