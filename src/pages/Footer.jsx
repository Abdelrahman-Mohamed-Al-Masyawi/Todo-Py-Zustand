import React from 'react';
import '../styles/footer.css';
import { FaList } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className='footer'>
      <div>
        <span className='v-footer'><FaList/></span>
        <span className='publisher'>ادارة المهام اليومية</span>
      </div>
      <div dir='rtl'>
        <span dir='' className='publisher'>جميع الحقوق محفوظة©️عبدالرحمن محمد {new Date().getFullYear()} </span>
      </div>
      <div>
        <div className='container-img-social-media'>
          <img className='img-social-media' src='/svg/Twitter Icon.svg' alt='' />
          <img className='img-social-media' src='/svg/Linkedin Icon.svg' alt='' />
          <img className='img-social-media' src='/svg/Facebook Icon.svg' alt='' />
        </div>
      </div>
    </footer>
  );
}
