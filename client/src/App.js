import './App.css';
import React, { useState } from 'react';
import AddVideo from './components/AddVideo';
import Header from './components/Header';
import Programs from './components/Programs';
import ASD from './components/ASD';
import NotFound from './components/Notfound';  // Import the NotFound component
import SocialLinks from './components/Abut';
import Signup from './components/register';
import Login from './components/Login';
import Healthy from './components/Healty';
import About from './components/Abut';
import Store from './components/Store';
import AddProduct from './components/AddProduct';
import ProductDetail from './components/ProductDetail';
import Basket from './components/Cart';
import Profile from './components/Profile'; // Import Profile component
import AIPage from './components/AIPage';
// import Chat from './components/Chat';
import ChatBot from 'react-simple-chatbot';
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./chatbotConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
const steps = [
  {
      id: '0',
      message: 'Hey Geek!',

      // This calls the next id
      // i.e. id 1 in this case
      trigger: '1',
  }, {
      id: '1',

      // This message appears in
      // the bot chat bubble
      message: 'Please write your username',
      trigger: '2'
  }, {
      id: '2',

      // Here we want the user
      // to enter input
      user: true,
      trigger: '3',
  }, {
      id: '3',
      message: " hi {previousValue}, how can I help you?",
      trigger: 4
  }, {
      id: '4',
      options: [

          // When we need to show a number of
          // options to choose we create alist
          // like this
          { value: 1, label: 'View Courses' },
          { value: 2, label: 'Read Articles' },

      ],
      end: true
  }
];

// Creating our own theme
const theme = {
  background: '#C9FF8F',
  headerBgColor: '#197B22',
  headerFontSize: '20px',
  botBubbleColor: '#0F3789',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#FF5733',
  userFontColor: 'white',
};

// Set some properties of the bot
const config = {
  botAvatar: "img.png",
  floating: true,
};

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
          <Route path="/ai" element={<AIPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/video" element={<Healthy />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/add-video" element={<AddVideo addVideo={addVideo} />} />
          <Route path="/profile" element={<Profile />} /> {/* Added Profile route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
