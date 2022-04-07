import {
  AppBar,
  Avatar,
  Box,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import Message from './Message.component';

const ChatBox = () => {
  const { id, name } = useParams();
  return (
    <Box flexGrow={1}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'white',
          boxShadow: 0,
        }}
      >
        <Toolbar>
          <Avatar
            src={`https://avatars.dicebear.com/api/initials/asdf.svg`}
            sx={{
              width: '32px',
              height: '32px',
            }}
          />
          <Typography sx={{ color: 'black', marginLeft: '9px' }} variant="h6">
            Shivanshu
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        sx={{ padding: '3px 5px', overflowY: 'scroll' }}
        backgroundColor="#f5f5f5"
        height="80vh"
      >
        <Message message="hiii" direction="end" date="45664" />
        <Message message="hiii" date="45664" />
        <Message message="hiii" date="45664" />
        <Message
          message="hiii I am anthony gosalves"
          direction="end"
          date="45664"
        />
        <Message message="hiii" date="45664" />
        <Message message="hiii" date="45664" />
        <Message message="hiii" date="45664" />
        <Message message="hiii" direction="end" date="45664" />
        <Message message="hiii" date="45664" />
        <Message message="hiii" date="45664" />
        <Message message="hiii" direction="end" date="45664" />
        <Message message="hiii" date="45664" />
        <Message message="hiii" direction="end" date="45664" />
        <Message message="hiii" date="45664" />
        <Message message="hiii" date="45664" />
        <Message message="hiii" date="45664" />
      </Box>
      <TextField
        name="message"
        placeholder="Type a message..."
        variant="standard"
        fullWidth
        multiline
        rows={2}
        InputProps={{
          disableUnderline: true,
        }}
      />
    </Box>
  );
};

export default ChatBox;
