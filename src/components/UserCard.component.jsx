import { Avatar, Stack, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserCard = ({ user }) => {
  const navigate = useNavigate();

  const matches = useMediaQuery('(max-width:480px)');

  return (
    <Stack
      className="user"
      direction="row"
      spacing={2}
      onClick={() =>
        navigate(`/${user.id}/${user.firstName + '-' + user.lastName}`)
      }
      sx={{ py: 1, alignItems: 'center' }}
    >
      <Avatar
        src={`https://avatars.dicebear.com/api/initials/${user.firstName}.svg`}
        sx={{
          width: matches ? '24px' : '32px',
          height: matches ? '24px' : '32px',
        }}
      />
      <Typography variant="subtitle2">
        {user.firstName} {user.lastName}
      </Typography>
    </Stack>
  );
};

export default UserCard;
