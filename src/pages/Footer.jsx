import React from 'react'
import "../styles/footer.css"
export default function Footer() {
  return (
    <footer className='footer'>
      <span className='v-footer'>مهامي</span>
      <span className='publisher'>ادارة المهام اليومية</span>
      <span className='publisher'>جميع الحقوق محفوظة©️عبدالرحمن محمد {new Date().getFullYear()} </span>
      <div className='container-img-social-media'>
        <img className='img-social-media' src='/public/svg/Twitter Icon.svg' alt='' />
        <img className='img-social-media' src='/public/svg/Linkedin Icon.svg' alt='' />
        <img className='img-social-media' src='/public/svg/Facebook Icon.svg' alt='' />
      </div>
    </footer>
  );
}
