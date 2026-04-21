import React from 'react';
import { useModal } from '../store/modalStore';
import { createPortal } from 'react-dom';
import '../styles/modal.css';
export default function Modal({ title, message, buttonState, functionState, bgColorBtnAction, ColorBtnAction }) {
  const closeModal = useModal((state) => state.closeModal);
  return createPortal(
    <div className='containerModal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <span className='modal-header-title'>{title}</span>
          <span className='markClose' onClick={closeModal}>
            X
          </span>
        </div>
        <hr />
        <div dir='rtl' className='model-text'>
          {message}
        </div>
        <div className='btns'>
          <button
            style={{ backgroundColor: bgColorBtnAction, color: ColorBtnAction }}
            onClick={functionState}
            className='btnDoing'>
            {buttonState}
          </button>
          <button className='btnCLose' onClick={closeModal}>
            الغاء
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
