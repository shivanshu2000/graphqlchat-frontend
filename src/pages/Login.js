import React, { useState } from 'react';
import { Box, Card, Stack, Alert, Typography, Button } from '@mui/material';
import { useMutation } from '@apollo/client';

import { LOGIN } from '../graphql/mutations';
import { CustomTextField } from './Signup';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const [login, { _, loading: l }] = useMutation(LOGIN, {
    onCompleted(data) {
      setLoading(false);
      localStorage.setItem('token', data.user.token);
      navigate('/');
    },

    onError(error) {
      setLoading(false);
      setLoginError(error.message);
    },
  });

  const handleChange = (e) => {
    setLoginError('');
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setLoginError('All fields are required!');
      return;
    }
    setLoading(true);
    login({
      variables: {
        user: formData,
      },
    });
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
          {!!loginError && <Alert severity="error">{loginError}</Alert>}

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
            type={loading ? 'button' : 'submit'}
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </Button>
        </Stack>
      </Card>
    </Box>
  );
};

export default Login;
