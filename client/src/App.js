
import './App.css';

import Header from './components/Header';
import Programs from './components/Programs';
import ASD from './components/ASD';
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ASD></ASD>} />
          <Route path="/programs" element={<Programs />} />
        </Routes>
      </BrowserRouter>
      {/* <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Footer></Footer> */}
    </>
  );
}

export default App;
