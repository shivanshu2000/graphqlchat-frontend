import { Box, Typography } from '@mui/material';
import React from 'react';

const Message = ({ message, date, direction = 'start' }) => {
  return (
    <Box display="flex"  marginBottom="9px" justifyContent={direction}>
      <Box
        alignItems="center"
        justifyContent="space-between"
        padding="5px 9px"
        display="flex"
        backgroundColor="white"
      >
        <Typography style={{flexGrow:1}} marginRight="7px" variant="subtitle2">
          {message}
        </Typography>
        <Typography variant="caption">{date}</Typography>
      </Box>
    </Box>
  );
};

export default Message;
