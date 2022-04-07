import { Avatar, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserCard = ({ user }) => {
  const navigate = useNavigate();

  return (
    <Stack
      className="user"
      direction="row"
      spacing={2}
      onClick={() => navigate(`/${1}/${'shivanshu'}`)}
      sx={{ py: 1, alignItems: 'center' }}
    >
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
