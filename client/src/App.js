import logo from './logo.svg';
import './App.css';
import Home from './App';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Footer from './components/AltSection';
import Programs from './components/Programs';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header></Header>
      <Router>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/programs" component={Programs} />
        </Routes>
      </Router>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Footer></Footer>
    </>
  );
}

export default App;
