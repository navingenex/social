import React from "react";
import { Box, Button, OutlinedInput, Stack, Typography } from "@mui/material";
import login from "./Login.module.scss";
import ChatIcon from "@mui/icons-material/Chat";
import Image from "next/image";
import loginImg from "./../../public/login.png";
import SocialInput from "../../components/SocialInput";
import Link from "next/link";
export default function Login() {
  const [payload, setPayload] = React.useState({ email: "", password: "" });
  return (
    <Box className={login._login}>
      <Stack className={login._login_container}>
        <Box className={login._login_hero + " py-16"}>
          <Box className={login._login__hero_container}>
            <Stack direction="row" spacing={1} alignItems="center">
              <ChatIcon sx={{ color: "#ffffff" }} />
              <Typography className="fs-24 fw-b text-white">Social</Typography>
            </Stack>

            <Typography className="fs-16 text-white ">NextJS chat </Typography>
            <Image width={500} height={500} src={loginImg} alt="login" />
          </Box>
        </Box>
        <Box className={login._login_box_container}>
          <Box className={login.login_box}>
            <Stack className={login.login_box_stack} spacing={3}>
              <Stack>
                <Typography align="center" className="fs-24 fw-400">
                  Welcome Back!
                </Typography>
                <Typography align="center" className="fs-15 text-muted">
                  Sign in to continue to Social
                </Typography>
              </Stack>
              <Stack direction="column" spacing={5}>
                <SocialInput
                  value={payload.email}
                  onChange={(e: string) =>
                    setPayload((payload) => ({ ...payload, email: e }))
                  }
                  type="text"
                  label="Username"
                  placeholder="Enter username"
                />
                <SocialInput
                  value={payload.password}
                  onChange={(e: string) =>
                    setPayload((payload) => ({ ...payload, password: e }))
                  }
                  type="password"
                  label="Password"
                  placeholder="Enter password"
                />
                <Button
                  color="primary"
                  className="text-white fs-12"
                  variant="contained"
                >
                  Log in
                </Button>
                <Typography align="center" className="text-muted">
                  Do you have an account ?{" "}
                  <Link href="register" className="text-primary underline _cp">
                    Register
                  </Link>
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
