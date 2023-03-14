import React from "react";
import {
  Box,
  Button,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  InputAdornment,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FlagIcon from "@mui/icons-material/Flag";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e58ec",
    },
    secondary: {
      main: "#f3f3f3",
    },
  },
  typography: {
    fontFamily: ["Noto Sans KR"].join(","),
  },
});

const calcCost = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ pt: "54px", pb: "31px", width: "100%", bgcolor: "#F7F8FE" }}>
        <Container maxWidth="md">
          <Typography fontSize="18px" color={"#727272"} align="center">
            비용 계산기
          </Typography>
          <Typography
            fontSize={56}
            align="center"
            marginTop="4px"
            marginBottom="12px"
          >
            <b>용달 비용 계산까지 1분</b>
          </Typography>
          <Typography fontSize={18} color={"#727272"} align="center">
            화물 운송·용달 비용을 미리 계산하세요.
          </Typography>
          <Box marginTop="19.7px" textAlign={"center"}>
            <img src="assets/Group 767@2x.png" alt="calculator" width={360} />
          </Box>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Box>
          <Typography fontSize={48} align="center" paddingTop={15}>
            <b>용달 비용 계산 하기</b>
          </Typography>
          <Box display={"flex"}>
            <Stack direction={"column"} spacing={4}>
              <Box>
                <Typography fontSize={18} align="left">
                  출/도착지를 입력해주세요.
                </Typography>
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon />
                      </InputAdornment>
                    ),
                  }}
                  placeholder="출발지를 입력해주세요."
                ></TextField>
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FlagIcon />
                      </InputAdornment>
                    ),
                  }}
                  placeholder="도착지를 입력해주세요."
                ></TextField>
              </Box>
              <Box>
                <Typography fontSize={18} align="left">
                  차량을 선택해주세요.
                </Typography>
                <Grid container>
                  <Grid item xs={3}>
                    <Button variant="outlined">다마스</Button>
                  </Grid>
                  <Grid item xs={3}>
                    <Button variant="outlined">라보</Button>
                  </Grid>
                  <Grid item xs={3}>
                    <Button variant="outlined">1톤 카고</Button>
                  </Grid>
                  <Grid item xs={3}>
                    <Button variant="outlined">기타</Button>
                  </Grid>
                </Grid>
              </Box>
            </Stack>
            <Box></Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default calcCost;
