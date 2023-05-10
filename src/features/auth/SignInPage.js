import { Navigate, useLocation } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { useLoginMutation, useMeQuery } from "api/authApi";


function SignInPage() {
  const location = useLocation();
  const { isSuccess: meSuccess, isLoading: meLoading } = useMeQuery();
  const { from = '' } = location.state || {};
  const [login, { isSuccess: loginSuccess, isError }] = useLoginMutation();

  if (meLoading) {
    return <></>;
  }

  if (meSuccess || loginSuccess) {
    // Redirect to '/' or previous page
    if (from) {
      return <Navigate to={from} replace />
    } else {
      return <Navigate to="/" replace />
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      await login({
        usr: data.get('email').trim(),
        pwd: data.get('password').trim(),
        device: 'mobile', // make set-cookie work on ERPNext
      }).unwrap();
    } catch (error) {
      console.error('Failed to login: ', error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default SignInPage;