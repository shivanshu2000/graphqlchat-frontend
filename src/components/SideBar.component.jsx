import {
  Box,
  Divider,
  Stack,
  CircularProgress,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

import UserCard from './UserCard.component';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../graphql/queries';

const SideBar = () => {
  const navigate = useNavigate();

  const matches = useMediaQuery('(max-width:480px)');
  const { loading, data, error } = useQuery(GET_USERS, {
    fetchPolicy: 'no-cache',
  });

  return (
    <Box
      backgroundColor="#f7f7f7"
      height="96.7vh"
      sx={matches ? { maxWidth: '250px' } : { width: '250px' }}
      padding="10px"
    >
      <Stack direction="row" justifyContent="space-between">
        <Typography variant={matches? "subtitle2" :"h6"}>Chats</Typography>

        <Box>
          <LogoutIcon
            cursor="pointer"
            onClick={() => {
              localStorage.removeItem('token');
              navigate('/login');
            }}
          />
        </Box>
      </Stack>
      <Divider />
      {loading ? (
        <Box textAlign="center" marginTop="15px">
          <CircularProgress />
        </Box>
      ) : (
        <>
          {data.users.map((user, i) => (
            <UserCard key={i} user={user} />
          ))}
        </>
      )}
    </Box>
  );
};

export default SideBar;
