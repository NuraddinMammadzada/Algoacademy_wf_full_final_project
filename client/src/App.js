import './App.css';
import React, { useState, useEffect } from 'react';
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
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./chatbotConfig";
import 'react-chatbot-kit/build/main.css';
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [videos, setVideos] = useState([]);

  const addVideo = (title, url, description) => {
    const newVideo = { title, url, description };
    setVideos([...videos, newVideo]);
  };
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(prevState => !prevState);
  };
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity) => {
    const existingProduct = cart.find(item => item.productId === product._id);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.productId === product._id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCart([...cart, { productId: product._id, name: product.name, price: product.price, quantity, imageUrl: product.imageUrl }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.productId !== productId));
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
          <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
          <Route path="/cart" element={<Basket cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/add-video" element={<AddVideo addVideo={addVideo} />} />
          <Route path="/profile" element={<Profile />} /> {/* Added Profile route */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
      <div className="chatbot-container">
        <div className={`chatbot ${showChatbot ? "show" : "hide"}`}>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
        <div className="chatbot-button" onClick={toggleChatbot}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 13.85 2.49 15.55 3.35 16.97L2 22L7.03 20.65C8.45 21.51 10.15 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7 9C7.55228 9 8 9.44772 8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10C6 9.44772 6.44772 9 7 9ZM12 9C12.5523 9 13 9.44772 13 10C13 10.5523 12.5523 11 12 11C11.4477 11 11 10.5523 11 10C11 9.44772 11.4477 9 12 9ZM17 9C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17 11C16.4477 11 16 10.5523 16 10C16 9.44772 16.4477 9 17 9ZM8.61 16.19C9.45 15.73 10.44 15.5 11.5 15.5C12.56 15.5 13.55 15.73 14.39 16.19C14.79 16.41 15.3 16.22 15.52 15.81C15.73 15.41 15.54 14.9 15.13 14.69C14.04 14.09 12.79 13.75 11.5 13.75C10.21 13.75 8.96 14.09 7.87 14.69C7.46 14.9 7.27 15.41 7.48 15.81C7.7 16.22 8.21 16.41 8.61 16.19Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
export default App;
