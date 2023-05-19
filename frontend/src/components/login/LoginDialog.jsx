import React, { useState, useContext } from "react";
import {
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
  styled,
} from "@mui/material";

import { authenticateSignup, authenticateLogin } from "../../service/Api.js";
import { Datacontext } from "../context/DataProvider.jsx";

//  styling using styled component

const Components = styled(Box)`
  height: 70vh;
  width: 90vh;
`;
const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 100%;
  width: 40%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: white;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb6418;
  color: #fff;
  height: 48px;
  border-radius: 3px;
`;
const RequestOtpButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/30%);
`;
const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;
const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

// logical function

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login!",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "logout",
    heading: "Looks like you're new here!",
    subHeading: "Sign up with your mobile number to get started",
  },
};

// using input field name property=>
const signupValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValues = {
  username: "",
  password: "",
};

const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState(signupValues);

  const { setAccount } = useContext(Datacontext);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState(false);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
    setError(false)
  };
  const toggleSignUp = () => {
    toggleAccount(accountInitialValues.signup);
  };
  const onIputChange = (e) => {
    //   console.log(e.target.value);
    setSignup({ ...signup, [e.target.name]: e.target.value });
    // console.log(signup)
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if (!response) return;
    handleClose();
    setAccount(signup.firstname);
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    console.log(response);
    if (response.status === 200) {
      handleClose();
      setAccount(response.data.data.firstname);
    } else {
      setError(true);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Components>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>
              {account.subHeading}
            </Typography>
          </Image>
          {account.view === "login" ? (
            <Wrapper>
              <TextField
                onChange={(e) => onValueChange(e)}
                name="username"
                variant="standard"
                label="Enter Your Username"
              />
              {error && <Error>Please enter valid username or password</Error>}
              <TextField
                onChange={(e) => onValueChange(e)}
                name="password"
                variant="standard"
                label="Enter Your Password"
              />
              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginButton onClick={() => loginUser()}>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <RequestOtpButton>Request OTP</RequestOtpButton>
              <CreateAccount onClick={() => toggleSignUp()}>
                New to Flipkart? Create an account
              </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                name="firstname"
                label="Enter Your FirstName"
                onChange={(e) => onIputChange(e)}
              />
              <TextField
                variant="standard"
                name="lastname"
                label="Enter Your LastName"
                onChange={(e) => onIputChange(e)}
              />
              <TextField
                variant="standard"
                name="username"
                label="Enter Your UserName"
                onChange={(e) => onIputChange(e)}
              />
              <TextField
                variant="standard"
                name="email"
                label="Enter Your Email"
                onChange={(e) => onIputChange(e)}
              />
              <TextField
                variant="standard"
                name="password"
                label="Enter Your Password"
                onChange={(e) => onIputChange(e)}
              />
              <TextField
                variant="standard"
                name="phone"
                label="Enter Your Mobile Number"
                onChange={(e) => onIputChange(e)}
              />

              <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
            </Wrapper>
          )}
        </Box>
      </Components>
    </Dialog>
  );
};

export default LoginDialog;
