import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import UserCard from './UserCard.component';

const SideBar = () => {
  return (
    <Box backgroundColor="#f7f7f7" height="100vh" width="250px" padding="10px">
      <Typography variant="h6">Chats</Typography>
      <Divider />
      {['', '', '', '', ''].map((user, i) => (
        <UserCard key={i} user={user} />
      ))}
    </Box>
  );
};

export default SideBar;
