//blog
import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { ReactComponent as Blog } from "assets/_img-blog-thumbnails.svg";

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

const Part7 = () => {
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
              <img
                src="assets/img-blog-thumbnails@2x.png"
                alt="blog"
                width="100%"
              />
            </Container>
            <Container maxWidth="md">
              <Typography
                component="h3"
                variant="h3"
                align="left"
                color="text.primary"
                gutterBottom
              >
                <b>
                  센디 제품팀이 들려주는
                  <br />
                  화물 운송 이야기
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
                다양한 화물 운송 소식부터 센디 인사이트까지 센디의 모든 것을
                이곳에서 만나보세요.
              </Typography>
              <Container>
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  disableElevation
                  disableRipple
                >
                  블로그 보러가기
                </Button>
              </Container>
            </Container>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Part7;
