import { useState } from 'react';
import '../styles/formTodo.css';
import { getDatToday } from '../functions/getDatToday';
import { useStore } from '../store/todoStore';
import toast from 'react-hot-toast';
export default function FormAddTodo() {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const addTodo = useStore((state) => state.addTodo);
  const date = useStore((state) => state.date);

  const newTodo = { title: title, details: details, id: Date.now(), complete: false, date: date };

  function handleAddTodo(e) {
    e.preventDefault();
    if (!title || !details || !date) {
      if (!title) {
        toast.error('من فضلك ادخل عنوان المهمة');
        return null;
      }
      if (!details) {
        toast.error('من فضلك ادخل تفاصيل المهمة');
        return null;
      }
      if (!date) {
        toast.error('من فضلك اختار تاريخ المهمة من مربع التاريخ');
        return null;
      }
    }

    addTodo(newTodo);
    setTitle('');
    setDetails('');
    toast.success('تم اضافة المهمة بنجاح');
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
      <textarea
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        className='bg-input input-content grid-input-3'
        placeholder='تفاصيل المهمة'
        type='text'
        name=''
        id=''
      />
      <button className='btn-add grid-input-4'>+</button>
    </form>
  );
}

function ShowNameTody() {
  const date = new Date();
  const dayName = date.toLocaleString('ar-EG', { weekday: 'long' });

  const days = ['السبت', 'الاحد', 'الاثنين', 'الثلاثاء', 'الاربعاء', 'الخميس', 'الجمعة'];

  return <span className='get-Day grid-input-1'>{dayName}</span>;
}
