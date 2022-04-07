import { Stack, Typography } from '@mui/material';
import React from 'react';

const Welcome = () => {
  return (
    <Stack flexGrow={1} justifyContent="center" alignItems="center">
      <Typography variant="subtitle2">
        Select a user to start a conversation with!
      </Typography>
    </Stack>
  );
};

export default Welcome;
