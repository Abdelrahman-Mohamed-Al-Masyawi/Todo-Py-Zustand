import React from 'react';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import './index.css';
import { Toaster } from 'react-hot-toast';
export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <Footer />
      <Toaster position='top-center' reverseOrder={false} />
    </div>
  );
}
