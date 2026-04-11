import React from 'react';
import '../styles/numberTodo.css';
export default function AppPagination() {
  return (
    <div className='AppPagination'>
      <NumberTodo />
      <Pagination />
    </div>
  );
}

function Pagination() {
  return (
    <div className='pagination'>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
    </div>
  );
}

function NumberTodo() {
  return (
    <div className='container-number-todos'>
      <span className='num-todo-complete '>
        <p>COMPLETED TASKS</p>
        <p className='nm-todo'>12</p>
      </span>
      <span className='num-todo '>
        <p>PENDING TASKS</p>
        <p className='nm-todo'>04</p>
      </span>
    </div>
  );
}
