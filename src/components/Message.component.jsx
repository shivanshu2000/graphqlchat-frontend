import { Box, Typography } from '@mui/material';
import React from 'react';

const Message = ({ message, date, direction = 'start' }) => {
  return (
    <Box display="flex" marginBottom="9px" justifyContent={direction}>
      <Box display="flex" flexDirection="column" alignItems={direction}>
        <Box
          alignItems="center"
          justifyContent="space-between"
          padding="5px 9px"
          display="flex"
          backgroundColor="white"
        >
          <Typography
            variant="subtitle2"
            style={{ flexGrow: 1 }}
            marginRight="7px"
          >
            {message}
          </Typography>
          {date === 'You' && (
            <Typography fontSize="10px" fontWeight="400">
              {`${date === 'You' ? '~' : ''}${date}`}
            </Typography>
          )}
        </Box>

        <Box marginTop="7px" display="flex" flexDirection="column">
          {date !== 'You' && <Typography variant="caption">{date}</Typography>}
        </Box>
      </Box>
    </Box>
  );
};

export default Message;
