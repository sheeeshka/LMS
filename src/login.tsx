import React from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import './login.css'; // Import the CSS file
import logoImage from './assets/logo.png';
import bgImage from './assets/bg.png';

const LoginForm: React.FC = () => {
  return (
    <div className="background-container">
      <Paper elevation={3} className="login-paper">
        <Box sx={{ mb: 2 }}>
          <img src={logoImage} alt="PLM Logo" width={400} />
        </Box>

        <form>
          <Box sx={{ textAlign: 'left', width: '100%' }}>
            <Typography variant="h5">PLM Email</Typography>
          </Box>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            type="email"
            required
            className="text-field"
          />

          <Box sx={{ textAlign: 'left', width: '100%' }}>
            <Typography variant="h5">Password</Typography>
          </Box>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            type="password"
            required
            className="text-field"
          />

          <Box sx={{ position: 'relative', width: '100%', mt: 2 }}>
            <Button
              type="submit"
              variant="contained"
              className="submit-button"
            >
              LOG IN
            </Button>
          </Box>

          <Box mt={2} className="forgot-password-btn">
            <Button variant="text" color="secondary">
              Forgot Password?
            </Button>
          </Box>
        </form>
      </Paper>
    </div>
  );
};

export default LoginForm;