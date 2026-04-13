import { useState } from 'react';
import '../styles/formTodo.css';
import { getDatToday } from '../functions/getDatToday';
import { useStore } from '../store/todoStore';
export default function FormAddTodo() {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const newTodo = { title: title, details: details, id: Date.now(), complete: false, date: getDatToday() };

  const addTodo =useStore((state) => state.addTodo);
  function handleAddTodo(e) {
    e.preventDefault();

    if (!title || !details) return null;

    addTodo(newTodo);
  }

  return (
    <form onSubmit={handleAddTodo} className='form-add-todo'>
      <ShowNameTody />
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='bg-input input-title grid-input-2'
        placeholder=' عنوان المهمة'
        type='text'
        name=''
        id=''
      />
      <input
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        className='bg-input input-content grid-input-3'
        placeholder='تفاصيل المهمة'
        type='text'
        name=''
        id=''
      />
      <button  className='btn-add grid-input-4'>
        +
      </button>
    </form>
  );
}

function ShowNameTody() {
  const date = new Date();
  const dayName = date.toLocaleString('ar-EG', { weekday: 'long' });

  const days = ['السبت', 'الاحد', 'الاثنين', 'الثلاثاء', 'الاربعاء', 'الخميس', 'الجمعة'];

  return <span className='get-Day grid-input-1'>{dayName}</span>;
}
