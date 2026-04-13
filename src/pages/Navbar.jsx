import React from 'react';
import "../styles/Navbar.css"
import { FaList } from 'react-icons/fa';
export default function Navbar() {
  return (
    <header className='navbar'>
      <span className='v'><FaList/></span>
      <span className=''>ادارة المهام اليومية</span>

      {/* <img src="/public/svg/Vector (1).svg" alt="img" /> */}
    </header>
  );
}
