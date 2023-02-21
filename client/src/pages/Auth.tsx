import React, { useState } from 'react';
import axios from 'axios';
import {
    Box,
    Grid,
    TextField,
    Paper,
    Button
} from '@mui/material';

const Auth = () => {
    const onLoginHandler = async () => {

        try {
            const response = await axios.post('http://localhost:5000/api/v1/login',
                { email: loginFormState.username, password: loginFormState.password },
                {
                    withCredentials: true
                }
            );

            console.log(response.data.token);

        } catch (error) {
            console.log("Error----->", error);
        }


        // fetch("http://localhost:5000/api/v1/login", { //<== this is the main change
        //     method: "POST",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     mode: "cors",
        //     credentials: "include", // Don't forget to specify this if you need cookies
        //     // body: JSON.stringify({ email: loginFormState.username, password: loginFormState.password }),
        //     body: JSON.stringify({ email: loginFormState.username, password: loginFormState.password }),
        // }).then(
        //     (res) => {
        //         console.log(res);
        //     },
        //     (err) => {
        //         console.log(err);
        //     }
        // );
    };

    const [loginFormState, setLoginFormState] = useState({ username: "", password: "" });

    const onLoginFormUsernameChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setLoginFormState(prev => {
            return { ...prev, username: evt.target.value }


        })
    };

    const onLoginFormPasswordChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setLoginFormState(prev => {
            return { ...prev, password: evt.target.value }


        })
    };
    return (
        <Box sx={{ height: "100%" }}>
            {/* container
        spacing={3}
        direction={'column'}
        justify={'center'}
        alignItems={'center'} */}
            <Paper >
                <Grid container>
                    <Grid item xs={12}>
                        <TextField label="Username" value={loginFormState.username} onChange={onLoginFormUsernameChangeHandler}></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Password" type={'password'} value={loginFormState.password} onChange={onLoginFormPasswordChangeHandler}></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth onClick={onLoginHandler}> Login </Button>
                    </Grid>
                </Grid>
            </Paper> </Box>
    )
}

export default Auth;
