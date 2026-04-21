import { useState } from 'react';
import '../styles/showTodos.css';
import { useStore } from '../store/todoStore';
import { useModal } from '../store/modalStore';
import Modal from './Modal';
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';
import toast from 'react-hot-toast';

export default function ShowAllTodos() {
  const todos = useStore((state) => state.todos);
  const FilterCategory = useStore((state) => state.FilterCategory);
  const FilterSearch = useStore((state) => state.FilterSearch);

  // function show by filter
  /*
  function ShowTodos(FilterCategory, todos, FilterSearch) {
    let Todos = '';
    if (!FilterCategory || !todos) {
      Todos = todos;
    }

    return Todos;
  }
*/
  return (
    <div className='container-all-todos grid-todos'>
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}

function Todo({ todo }) {
  const { deleteTodo, editStatusTodo } = useStore((state) => state);
  const { showModal, modal, closeModal } = useModal();

  function handleDelete(id) {
    deleteTodo(id);
    closeModal();
    toast.success('تم حذف المهمة بنجاح');
  }

  function handleStatusTodo(todo) {
    const wasComplete = todo.complete;
    editStatusTodo(todo.id);
    if (wasComplete === true) {
      toast.error('للأسف لم يتم انهاء المهمة😥🥲😫');
    }
    if (wasComplete === false) {
      toast.success('برافوا تم انهاء المهمة🤩🥳🙂‍↔️');
    }
  }

  return (
    <div id={todo.id} className='container-grid-todo '>
      <div style={{ textDecoration: todo.complete && 'line-through' }} className='title-todo'>
        {todo.title}
      </div>

      <div className='mark-check'>
        {todo.complete ?
          <FaCheckCircle color='#3b710f' fill='#1a733c' className='iconCheck' onClick={() => handleStatusTodo(todo)} />
        : <FaRegCircle
            onClick={() => handleStatusTodo(todo)}
            color='#010b34'
            fill='#010051'
            style={{ backgroundColor: '' }}
            className='iconCheck'
          />
        }
      </div>

      <div className='details-todo'>{todo.details}</div>

      <div className='mark-edit'>
        <ImgMark src={'edit.svg'} />
      </div>

      <div className='start-date-todo'>
        <span>تاريخ البداية :</span>
        <span>{new Date(todo.date).toLocaleDateString('ar-EG')}</span>
      </div>

      <div className='mark-delete'>
        <ImgMark onClick={showModal} src={'Group 128.svg'} />
      </div>

      <>
        {modal ?
          <Modal
            title={'حذف المهمة'}
            message={`هل بالفعل تريد حذف مهمة [${todo.title}]`}
            buttonState='حذف'
            functionState={() => handleDelete(todo.id)}
            bgColorBtnAction='red'
            ColorBtnAction='#ffffff'
          />
        : null}
      </>
    </div>
  );
}

function ImgMark({ src, onClick }) {
  return <img src={`/svg/${src}`} onClick={onClick} className='imgMark' />;
}
