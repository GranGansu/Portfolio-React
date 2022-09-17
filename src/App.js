import './styles/styles.scss'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Proyectos from './components/Proyectos'
import "bootstrap-icons/font/bootstrap-icons.css";
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/yo" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/proyectos" element={<Proyectos />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
