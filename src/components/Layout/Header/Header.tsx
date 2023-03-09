import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import { ReactComponent as Logo } from "./assets/sendy-logo-navy.svg";
import { Stack, Toolbar } from "@mui/material";

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const Header = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Toolbar className="flex justify-between">
      {/* <Link to="/">
        <Logo />
      </Link> */}
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <Stack direction="row" spacing={5}>
            <Box>
              <img src="assets/Logo-Navy.png" alt="blog" width="50%" />
            </Box>
            <LinkTab label="서비스" href="/" />
            <LinkTab label="요금 안내" href="/" />
            <LinkTab label="비용 계산기" href="/" />
            <LinkTab label="고객센터" href="/" />
            <LinkTab label="로그인" href="/" />
            <LinkTab label="회원가입" href="/" />
          </Stack>
        </Tabs>
      </Box>
    </Toolbar>
  );
};
export default Header;
