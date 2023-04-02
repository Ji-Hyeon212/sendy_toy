import {
  Button,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Layout/Footer/Footer";
import Header from "../../components/Layout/Header/Header";

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

function HorizonLine() {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        borderBottom: "1px solid #aaa",
        lineHeight: "0.1em",
        margin: "10px 0 20px",
      }}
    >
      <span style={{ background: "#fff", padding: "0 10px" }}>또는</span>
    </div>
  );
}
function Copyright() {
  return (
    <Box textAlign={"center"}>
      <Typography sx={{ mt: 5, mb: 20 }} variant="body2" color="text.secondary">
        {"Copyright. "}
        <Link color="inherit" to="https://sendy.ai/">
          Sendy Crop.
        </Link>{" "}
        All rights reserved.
      </Typography>
    </Box>
  );
}

const Login = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="xs" sx={{ mt: "100" }}>
        <Box sx={{ textAlign: "center" }}>
          <Box maxWidth="xs" marginTop={13}>
            <img src="assets/Logo-Navy.png" alt="random" height="50" />
          </Box>
          <Typography variant="h6" marginTop={2}>
            <b>용달이 필요한 순간, 센디</b>
          </Typography>
          <Typography variant="body2" marginTop={2}>
            아직 회원이 아니신가요? <Link to={"/"}>회원가입하기</Link>
          </Typography>
        </Box>
        <Container sx={{ textAlign: "center" }}>
          <Stack marginTop={5}>
            <Typography align="left">
              <b>아이디</b>
            </Typography>
            <TextField
              id="id"
              type="email"
              placeholder="example@gmail.com"
              InputLabelProps={{
                shrink: true,
              }}
            ></TextField>
          </Stack>
          <Stack marginTop={3}>
            <Typography align="left">
              <b>비밀번호 입력</b>
            </Typography>
            <TextField
              id="password"
              type="password"
              placeholder="비밀번호"
              InputLabelProps={{
                shrink: true,
              }}
            ></TextField>
          </Stack>
          <Button
            sx={{ width: 350, height: 56, my: 3 }}
            variant="contained"
            size="large"
            fullWidth
            disableElevation
            disableRipple
          >
            로그인
          </Button>
        </Container>
        <HorizonLine />
        <Grid container spacing={1} marginTop={3} padding={4}>
          <Grid item xs={6}>
            <Button
              sx={{ color: "black", borderBlockColor: "lightgray" }}
              variant="outlined"
              fullWidth
            >
              카카오
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              sx={{ color: "black", borderBlockColor: "lightgray" }}
              variant="outlined"
              fullWidth
            >
              네이버
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              sx={{ color: "black", borderBlockColor: "lightgray" }}
              variant="outlined"
              fullWidth
            >
              구글
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              sx={{ color: "black", borderBlockColor: "lightgray" }}
              variant="outlined"
              fullWidth
            >
              애플
            </Button>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" marginTop={3} marginBottom={15}>
            <Link to="/">비밀번호를 잊으셨나요?</Link>
          </Typography>
        </Box>
      </Container>
      <hr color="lightgray" />
      <Copyright />
      <Footer />
    </ThemeProvider>
  );
};

export default Login;
