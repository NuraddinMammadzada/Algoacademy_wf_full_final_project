// src/App.js

import './App.css';
import Header from './components/Header';
import Programs from './components/Programs';
import ASD from './components/ASD';
import NotFound from './components/Notfound';  // Import the NotFound component
import SocialLinks from './components/Abut'
import Register from './components/login'
import Login from './components/register'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ASD />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="*" element={<NotFound />} />  // Use the NotFound component
          <Route path='/abutus' element={<SocialLinks/>}></Route>
          <Route path='/login' element={<Register/>}></Route>
          <Route path='/register' element={<Login/>}></Route>

        </Routes>
      </BrowserRouter>
 
    </>
  );
}

export default App;

