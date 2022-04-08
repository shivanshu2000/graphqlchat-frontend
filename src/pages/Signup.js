import React, { useState } from 'react';
import {
  Box,
  Card,
  Stack,
  Alert,
  Typography,
  CircularProgress,
  Button,
  TextField,
} from '@mui/material';
import { useMutation } from '@apollo/client';
import { SIGNUP } from '../graphql/mutations';
import { useNavigate } from 'react-router-dom';

export const CustomTextField = ({
  value,
  onChange,
  name,
  label,
  type = '',
}) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
      name={name}
      label={label}
      variant="outlined"
      type={type}
      size="small"
      InputProps={{ style: { fontSize: 14 } }}
      InputLabelProps={{ style: { fontSize: 14 } }}
    />
  );
};

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const [formError, setFormError] = useState('');
  const [signupError, setSignupError] = useState('');

  const [loading, setLoading] = useState(false);

  const [signup, { data, _, error }] = useMutation(SIGNUP, {
    onCompleted(data) {
      console.log('completed');
      setLoading(false);
      navigate('/login');
    },

    onError(error) {
      console.log('error is: ', error, error.message);
      setLoading(false);
      setSignupError(error.message);
    },
  });

  console.log('isLoading', loading);

  const handleChange = (e) => {
    setFormError('');
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
      setFormError('All fields are required!');
      return;
    }
    console.log(formData);
    setLoading(true);

    signup({
      variables: {
        user: formData,
      },
    });
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
          {!!signupError && <Alert severity="error">{signupError}</Alert>}
          <Typography sx={{ textAlign: 'center' }} variant="h5">
            Signup
          </Typography>

          {!!formError && <Alert severity="error">{error}</Alert>}
          <CustomTextField
            value={formData.firstName}
            onChange={handleChange}
            name="firstName"
            label="First name"
            variant="outlined"
          />
          <CustomTextField
            value={formData.lastName}
            onChange={handleChange}
            name="lastName"
            label="Last name"
            variant="outlined"
          />
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
            {loading ? 'Signing up...' : 'Signup'}
          </Button>
        </Stack>
      </Card>
    </Box>
  );
};

export default Signup;
