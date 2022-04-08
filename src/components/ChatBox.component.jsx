import { useMutation, useQuery } from '@apollo/client';
import {
  AppBar,
  Avatar,
  Box,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import SendIcon from '@mui/icons-material/Send';

import { GET_MESSAGES } from '../graphql/queries';
import { SEND_MESSAGE } from '../graphql/mutations';
import Message from './Message.component';

const ChatBox = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const matches = useMediaQuery('(max-width:500px)');
  const { id, name } = useParams();
  const { data, loading, error } = useQuery(GET_MESSAGES, {
    variables: {
      id: +id,
    },

    onCompleted(data) {
      setMessages(data.messages);
    },
  });

  const [sendMessage] = useMutation(SEND_MESSAGE, {
    onCompleted(data) {
      setMessages((messages) => [...messages, data.message]);
    },
  });
  console.log(loading, data, error);

  // const sendMessage = () => {};

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
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            {messages.map((message) => (
              <Message
                message={message.text}
                key={message.createdAt}
                direction={message.receiverId * 1 === id * 1 ? 'end' : 'start'}
                date={
                  !matches
                    ? new Date(message.createdAt).toLocaleString()
                    : message.receiverId * 1 === id * 1
                    ? 'You'
                    : ''
                }
              />
            ))}
          </>
        )}
      </Box>
      <Stack direction="row">
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <SendIcon
          fontSize="large"
          onClick={() => {
            if (message.length === 0) return;
            sendMessage({
              variables: {
                receiverId: +id,
                text: message,
              },
            });

            setMessage('');
          }}
        />
      </Stack>
    </Box>
  );
};

export default ChatBox;
