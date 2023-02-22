import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import operations from './duck/operations';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import image from '../../images/Lays-Logo.png'
import './Login.css'


const theme = createTheme();



export const Login = (props) => {
    const dispatch = useDispatch();
    const [loginData, setLoginData] = useState({
        user:'',
        password:'',
        
    });
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault()
        try{
            await dispatch(operations.logIn(user,password))
            navigate("/dashboard")
        }
        catch(err){
            alert(err)
        }
    }

    const {user, password} = loginData;

    return(<div className='login'>

        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                    <Box
                        sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                        }}
                    >
                        
                        <img className='logo' src={image} alt='logo' />
                        
                        
                        <h2 className='title'>Log in to the company storage</h2>
                        
                        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="user"
                                label="User"
                                name="user"
                                autoComplete="user"
                                autoFocus
                                value={user}
                                onChange={(e) => setLoginData({ ...loginData, user: e.target.value })}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                            />
                            
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                >
                                Log in
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body1">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/create-account" variant="body1">
                                        {"Create an account"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                
            </Container>
         </ThemeProvider>
         </div>

    )
}

export default Login;