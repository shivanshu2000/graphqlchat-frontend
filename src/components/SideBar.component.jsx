import { Box, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';

import UserCard from './UserCard.component';

const SideBar = () => {
  return (
    <Box backgroundColor="#f7f7f7" height="96.7vh" width="250px" padding="10px">
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6">Chats</Typography>
        <LogoutIcon />
      </Stack>
      <Divider />
      {['', '', '', '', ''].map((user, i) => (
        <UserCard key={i} user={user} />
      ))}
    </Box>
  );
};

export default SideBar;
