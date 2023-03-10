import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        //minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container sx={{ justifyContent: "flex-start" }} maxWidth="xl">
          <Typography variant="h5" marginTop={6}>
            <b>sendy</b>
          </Typography>
          <Typography variant="h6" marginTop={3}>
            (주)센디
          </Typography>
          <Typography variant="body2" marginTop={3}>
            사업자 등록번호 : 617-86-04939 사업자정보확인
            <br />
            대표 : 염상준 <br />
            연락처 : 1833-6606 <br />
            화물운송주선사업자 : 제 805호 <br />
            통신판매업신고 : 2019-부산남구-0519 부산광역시 부산진구 서면로 39,
            KT&G 상상마당 6층 9호, 10호 <br />
            이메일 : cs@sendy.ai <br />
            제휴문의 : partner@sendy.ai
            <br />
          </Typography>
          <Typography variant="h6" marginTop={3}>
            <b>센디 고객문의 연락처 1833-6606</b>
          </Typography>
          <Typography variant="body2" marginTop={3}>
            이용 정보 안내
          </Typography>
          <Typography variant="body2">
            <b>회사소개</b>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
