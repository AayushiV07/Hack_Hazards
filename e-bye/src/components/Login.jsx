import { Card, CardContent, TextField, Button, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#010851',
    },
    secondary: {
      main: '#9A7AF1',
    },
    text: {
      secondary: '#707070',
    },
    error: {
      main: '#EE9AE5',
    },
  },
});

const Login = () => {
  const handleLogin = () => {
    // Add your login logic here
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card variant="outlined" style={{ width: 300 }}>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              Login
            </Typography>
            <form onSubmit={handleLogin}>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                color="secondary"
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                color="secondary"
              />
              <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: 20 }}>
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
};

export default Login;
