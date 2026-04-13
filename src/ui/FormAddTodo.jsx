import '../styles/formTodo.css';

export default function FormAddTodo() {
  return (
    <form className='form-add-todo'>
      <ShowNameTody />
      <input
        className='bg-input input-title grid-input-2'
        placeholder=' عنوان المهمة'
        type='text'
        name=''
        id=''
      />
      <input
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
