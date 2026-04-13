import { useState } from 'react';
import '../styles/showTodos.css';
import { useStore } from '../store/todoStore';
export default function ShowAllTodos() {
  const todos = useStore((state) => state.todos);
  return (
    <div className='container-all-todos grid-todos'>
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}



function Todo({ todo }) {
  return (
    <div id={todo.id} className='container-grid-todo '>
      <div className='title-todo'>{todo.title}</div>
      <div className='mark-check'>
        <ImgMark src={'check.svg'} />
      </div>
      <div className='details-todo'>{todo.details}</div>
      <div className='mark-edit'>
        <ImgMark src={'edit.svg'} />
      </div>
      <div className='start-date-todo'>
        <span>تاريخ البداية :</span>
        <span>{todo.date}</span>
      </div>

      <div className='mark-delete'>
        <ImgMark src={'Group 128.svg'} />
      </div>
    </div>
  );
}

function ImgMark({ src, onClick }) {
  return <img src={`/svg/${src}`} onClick={onClick} className='imgMark' />;
}
