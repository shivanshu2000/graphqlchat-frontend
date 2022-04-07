import { Avatar, Stack, Typography } from '@mui/material';
import React from 'react';

const UserCard = ({ user }) => {
  return (
    <Stack direction="row" spacing={2} sx={{ py: 1, alignItems: 'center' }}>
      <Avatar
        src={`https://avatars.dicebear.com/api/initials/asdf.svg`}
        sx={{
          width: '32px',
          height: '32px',
        }}
      />
      <Typography variant="subtitle2">Name</Typography>
    </Stack>
  );
};

export default UserCard;
