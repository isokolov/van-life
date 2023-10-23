import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Vans from './pages/Vans';
import './server';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className='site-logo' to='/'>
          #VanLife
        </Link>
        <nav>
          <Link to='/vans'>Vans</Link>
          <Link to='/about'>About</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
