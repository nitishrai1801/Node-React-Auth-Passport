import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Grid, TextField, Paper, Button } from "@mui/material";

import AuthContext, { AuthContextType } from "../context/AuthContext";
const Auth = () => {
  const authContext = useContext(AuthContext) as AuthContextType;
  const navigate = useNavigate();
  const onLoginHandler = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/login",
        { email: loginFormState.username, password: loginFormState.password },
        {
          withCredentials: true,
        }
      );

      console.log(response.data.token);
      authContext.login();
      navigate("/home");
    } catch (error) {
      console.log("Error----->", error);
    }
  };

  const [loginFormState, setLoginFormState] = useState({
    username: "",
    password: "",
  });

  const onLoginFormUsernameChangeHandler = (
    evt: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLoginFormState((prev) => {
      return { ...prev, username: evt.target.value };
    });
  };

  const onLoginFormPasswordChangeHandler = (
    evt: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLoginFormState((prev) => {
      return { ...prev, password: evt.target.value };
    });
  };
  return (
    <Box sx={{ height: "100%" }}>
      {/* container
        spacing={3}
        direction={'column'}
        justify={'center'}
        alignItems={'center'} */}
      <Paper>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              label="Username"
              value={loginFormState.username}
              onChange={onLoginFormUsernameChangeHandler}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type={"password"}
              value={loginFormState.password}
              onChange={onLoginFormPasswordChangeHandler}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth onClick={onLoginHandler}>
              {" "}
              Login{" "}
            </Button>
          </Grid>
        </Grid>
      </Paper>{" "}
    </Box>
  );
};

export default Auth;
