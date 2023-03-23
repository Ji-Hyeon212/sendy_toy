import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  createTheme,
  CssBaseline,
  Divider,
  Grid,
  InputAdornment,
  styled,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FlagIcon from "@mui/icons-material/Flag";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import Footer from "../../components/Layout/Footer/Footer";
import Address from "../../components/Address/Address";
import Header from "../../components/Layout/Header/Header";
import Distance from "../../components/Address/Distance";
import Cost from "../../components/Address/Cost";
import NToneTruck from "../../components/Truck/NToneTruck";

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

const SelectButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  color: "lightgray",
  height: 54,
  marginBottom: "8px",
  variant: "outlined",
  borderColor: "lightgray",
  "&:hover": {
    borderColor: "lightgray",
    boxShadow: "none",
  },
  "&:focus": {
    backgroundColor: "#2e58ec",
    color: "#f3f3f3",
    boarderColor: "#2e58ec",
  },
});

const CalcCost = () => {
  const [carType, setCarType] = useState("1톤 카고");
  const [transportTime, setTransportTime] = useState("주간");
  const [transportOption, setTransportOption] = useState("차량만");
  const [isBtnClicked, setisBtnClicked] = useState(false);
  const [departure, setDeparture] = useState("");
  const [jibunDeparture, setJibunDeparture] = useState("");
  const [isConfirmedDeparture, setIsConfirmedDeparture] = useState(false);
  const [destination, setDestination] = useState("");
  const [jibunDestination, setJibunDestination] = useState("");
  const [isConfirmedDestination, setIsConfirmedDestination] = useState(false);
  const [distance, setDistance] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
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
          <Stack direction={"row"} paddingTop={4} paddingBottom={25}>
            <Stack
              direction={"column"}
              spacing={4}
              paddingRight={3}
              width={"70%"}
            >
              <Box>
                <Typography fontSize={18} align="left" marginBottom={2}>
                  출/도착지를 입력해주세요.
                </Typography>
                <Box>
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocationOnIcon />
                        </InputAdornment>
                      ),
                    }}
                    placeholder="출발지를 입력해주세요."
                    fullWidth
                    value={departure}
                    onChange={(e) => {
                      setDeparture(e.target.value);
                      console.log(departure);
                    }}
                  ></TextField>
                  <Address
                    keyword={departure}
                    currentPage={"1"}
                    countPerPage={"5"}
                    resultType={JSON}
                    setRoad={setDeparture}
                    setJibun={setJibunDeparture}
                    setConfirmed={setIsConfirmedDeparture}
                  />
                </Box>
                <Box marginTop="10px">
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FlagIcon />
                        </InputAdornment>
                      ),
                    }}
                    placeholder="도착지를 입력해주세요."
                    fullWidth
                    value={destination}
                    onChange={(e) => {
                      setDestination(e.target.value);
                      console.log(destination);
                    }}
                  ></TextField>
                  <Address
                    keyword={destination}
                    currentPage={"1"}
                    countPerPage={"5"}
                    resultType={JSON}
                    setRoad={setDestination}
                    setJibun={setJibunDestination}
                    setConfirmed={setIsConfirmedDestination}
                  />
                </Box>
              </Box>
              <Box>
                <Typography fontSize={18} align="left" marginBottom={2}>
                  차량을 선택해주세요.
                </Typography>
                <Grid container spacing={1}>
                  <Grid item xs={3}>
                    <SelectButton
                      variant="outlined"
                      fullWidth
                      disableRipple
                      onClick={() => {
                        setCarType("다마스");
                        setisBtnClicked(false);
                      }}
                    >
                      다마스
                    </SelectButton>
                  </Grid>
                  <Grid item xs={3}>
                    <SelectButton
                      variant="outlined"
                      fullWidth
                      disableRipple
                      onClick={() => {
                        setCarType("라보");
                        setisBtnClicked(false);
                      }}
                    >
                      라보
                    </SelectButton>
                  </Grid>
                  <Grid item xs={3}>
                    <SelectButton
                      variant="outlined"
                      fullWidth
                      disableRipple
                      onClick={() => {
                        setCarType("1톤 카고");
                        setisBtnClicked(false);
                      }}
                    >
                      1톤 카고
                    </SelectButton>
                  </Grid>
                  <Grid item xs={3}>
                    <SelectButton
                      variant="outlined"
                      fullWidth
                      disableRipple
                      onClick={() => {
                        setisBtnClicked(true);
                      }}
                    >
                      기타
                    </SelectButton>
                  </Grid>
                </Grid>
                {isBtnClicked && <NToneTruck />}
              </Box>
              <Box>
                <Typography fontSize={18} align="left" marginBottom={2}>
                  운송 시간을 선택해주세요.
                </Typography>
                <Grid container>
                  <Grid item xs={6}>
                    <Button
                      variant="outlined"
                      startIcon={<WbSunnyIcon />}
                      fullWidth
                      onClick={() => setTransportTime("주간")}
                    >
                      <Typography>주간</Typography>
                      <Typography>08:00 ~ 18:00</Typography>
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      variant="outlined"
                      startIcon={<Brightness3Icon />}
                      fullWidth
                      onClick={() => setTransportTime("야간")}
                    >
                      <Typography>야간</Typography>
                      <Typography>18:00 ~ 08:00</Typography>{" "}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Typography fontSize={18} align="left" marginBottom={2}>
                  운송 옵션을 알려주세요.
                </Typography>
                <Grid container>
                  <Grid item xs={3}>
                    <SelectButton
                      variant="outlined"
                      fullWidth
                      onClick={() => setTransportOption("차량만")}
                    >
                      본인이 직접 옮김
                    </SelectButton>
                  </Grid>
                  <Grid item xs={3}>
                    <SelectButton
                      variant="outlined"
                      fullWidth
                      onClick={() => setTransportOption("상하차")}
                    >
                      상하차만 도움
                    </SelectButton>
                  </Grid>
                  <Grid item xs={3}>
                    <SelectButton
                      variant="outlined"
                      fullWidth
                      onClick={() => setTransportOption("상하차 및 운반")}
                    >
                      상하차 및 운반 도움
                    </SelectButton>
                  </Grid>
                  <Grid item xs={3}>
                    <SelectButton
                      variant="outlined"
                      fullWidth
                      onClick={() => setTransportOption("기사 + 인부 1명")}
                    >
                      운반 도움+인부 1명
                    </SelectButton>
                  </Grid>
                </Grid>
                <Stack direction="column"></Stack>
              </Box>
            </Stack>
            <Stack paddingLeft={2} width={"30%"}>
              <Stack direction={"row"}>
                <Typography>비용 계산 결과</Typography>
                <Button>초기화</Button>
              </Stack>
              <Box sx={{ borderColor: "lightgray" }}>
                <Stack direction={"column"}>
                  <Stack direction={"row"}>
                    <TrendingUpIcon />
                    <Typography>이동거리</Typography>
                    {isConfirmedDeparture && isConfirmedDestination ? (
                      <Distance
                        jibunDeparture={jibunDeparture}
                        roadDeparture={departure}
                        jibunDestination={jibunDestination}
                        roadDestination={destination}
                        setDist={setDistance}
                      />
                    ) : null}
                  </Stack>
                  <Stack direction={"row"}>
                    <LocalShippingIcon />
                    <Typography>차량</Typography>
                    <Box>{carType}</Box>
                  </Stack>
                  <Stack direction={"row"}>
                    <AccessTimeIcon />
                    <Typography>운송 시간</Typography>
                    <Box>{transportTime}</Box>
                  </Stack>
                  <Stack direction={"row"}>
                    <AddLocationIcon />
                    <Typography>운송 옵션</Typography>
                    <Box>{transportOption}</Box>
                  </Stack>
                  <Divider />
                  <Stack direction={"row"}>
                    <Typography>용달 비용</Typography>
                    {distance ? (
                      <Cost
                        distance={distance}
                        carType={carType}
                        transportTime={transportTime}
                        jibunDeparture={jibunDeparture}
                        roadDeparture={departure}
                        jibunDestination={jibunDestination}
                        roadDestination={destination}
                        workType={transportOption}
                      />
                    ) : null}
                  </Stack>
                  <Button sx={{ height: 56 }} variant="contained">
                    센디 첫 운송 5천 원 할인 받기
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default CalcCost;
