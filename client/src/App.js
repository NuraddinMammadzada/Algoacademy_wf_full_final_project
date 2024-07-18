// src/App.js

import './App.css';
import React, { useState } from 'react';
import AddVideo from './components/AddVideo';
import Header from './components/Header';
import Programs from './components/Programs';
import ASD from './components/ASD';
import NotFound from './components/Notfound';  // Import the NotFound component
import SocialLinks from './components/Abut'
import Signup from './components/register'
import Login from './components/login'
import Healthy from './components/Healty';
import About from './components/Abut';
import Community from './components/Community';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [videos, setVideos] = useState([]);

  const addVideo = (title, url, description) => {
      const newVideo = { title, url, description };
      setVideos([...videos, newVideo]);
  };
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ASD />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="*" element={<NotFound />} />
          <Route path='/about' element={<About />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/video' element={<Healthy />}></Route>
          <Route path='/community' element={<Community />}></Route>
          <Route path="/add-video" element={<AddVideo addVideo={addVideo} />} ></Route>

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

