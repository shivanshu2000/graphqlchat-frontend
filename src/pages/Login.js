import React, { useState } from 'react';
import { Box, Card, Stack, Typography, Button } from '@mui/material';
import { CustomTextField } from './Signup';

const AuthScreen = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setError('');
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password
    ) {
      setError('All fields are required!');
      return;
    }
    console.log(formData);
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="80vh"
      component="form"
      onSubmit={handleSubmit}
    >
      <Card
        sx={{
          padding: '25px',
        }}
        variant="outlined"
      >
        <Stack direction="column" spacing={2} sx={{ width: '400px' }}>
          <Typography sx={{ textAlign: 'center' }} variant="h5">
            Login
          </Typography>
          {!!error && (
            <Typography
              sx={{
                textAlign: 'center',
                border: '1px solid red',
                backgroundColor: '#ff000040',
                padding: '7px 5px',
                color: 'white',
                fontWeight: 'bold',
                borderRadius: '5px',
              }}
            >
              {error}
            </Typography>
          )}

          <CustomTextField
            value={formData.email}
            onChange={handleChange}
            name="email"
            label="Email"
            variant="outlined"
            type="email"
          />
          <CustomTextField
            value={formData.password}
            onChange={handleChange}
            name="password"
            label="Password"
            type="password"
          />
          <Button
            sx={{ marginTop: '30px !important', display: 'block' }}
            variant="outlined"
            type="submit"
          >
            Login
          </Button>
        </Stack>
      </Card>
    </Box>
  );
};

export default AuthScreen;
