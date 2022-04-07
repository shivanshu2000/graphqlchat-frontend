import { Box } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ChatBox from '../components/ChatBox.component';
import SideBar from '../components/SideBar.component';
import Welcome from '../components/Welcome.component';

const Home = () => {
  return (
    <Box display="flex">
      <SideBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/:id/:name" element={<ChatBox />} />
      </Routes>
    </Box>
  );
};

export default Home;
