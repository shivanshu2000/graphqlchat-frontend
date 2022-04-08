import { useMutation, useQuery, useSubscription } from '@apollo/client';
import {
  AppBar,
  Avatar,
  Box,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import SendIcon from '@mui/icons-material/Send';

import { GET_MESSAGES } from '../graphql/queries';
import { SEND_MESSAGE } from '../graphql/mutations';
import { SUB_MESSAGE } from '../graphql/subscriptions';
import Message from './Message.component';

const ChatBox = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const matches = useMediaQuery('(max-width:500px)');
  const scrollToBottom = useRef(null);

  const executeScroll = () => {
    return scrollToBottom.current.scrollIntoView({ inline: 'center' });
  };

  const { id, name } = useParams();
  const { _, loading } = useQuery(GET_MESSAGES, {
    variables: {
      id: +id,
    },

    onCompleted(data) {
      setMessages(data.messages);
    },
  });

  const useMountEffect = (fun) => useEffect(fun, [fun]);

  useMountEffect(executeScroll);

  const [sendMessage] = useMutation(SEND_MESSAGE, {
    onCompleted(data) {
      // setMessages((messages) => [...messages, data.message]);
    },
  });

  const { data } = useSubscription(SUB_MESSAGE, {
    onSubscriptionData({ subscriptionData: { data } }) {
      console.log(data);
      setMessages((messages) => [...messages, data.message]);
      executeScroll();
    },
  });

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
        className="chat__box"
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
        <div ref={scrollToBottom} />
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
          cursor="pointer"
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
