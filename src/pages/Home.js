import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import ChatBox from '../components/ChatBox.component';
import SideBar from '../components/SideBar.component';
import Welcome from '../components/Welcome.component';

const Home = () => {
  if (!localStorage.getItem('token')) {
    return <Navigate to="/login" replace />;
  }

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
