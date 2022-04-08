import { Box, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

import UserCard from './UserCard.component';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../graphql/queries';

const SideBar = () => {
  const navigate = useNavigate();

  const { loading, data, error } = useQuery(GET_USERS);
  
  if (loading){
    return <Typography variant='h6'>Loading...</Typography>
  }
  
  return (
    <Box backgroundColor="#f7f7f7" height="96.7vh" width="250px" padding="10px">
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6">Chats</Typography>
        <Box>
          <LogoutIcon
            onClick={() => {
              localStorage.removeItem('token');
              navigate('/login');
            }}
          />
        </Box>
      </Stack>
      <Divider />
      {data.users.map((user, i) => (
        <UserCard key={i} user={user} />
      ))}
    </Box>
  );
};

export default SideBar;
