import React, { useEffect } from 'react';
import '../styles/showTodos.css';
import ShowAllTodos from './ShowAllTodos';
export default function ContainerShowTodoAndSelectDate() {
  return (
    <div className='container-ContainerShowTodoAndSelectDate'>
      <SelectDate />
      <ShowAllTodos />
    </div>
  );
}

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useStore } from '../store/todoStore';

function SelectDate() {
  const dateFormat = new Date().toLocaleDateString('ar-EG');
  const [date, setDate] = useState(null);

  const dateGlobal = useStore((state) => state.setDate);

  useEffect(() => {
    if (date) {
      dateGlobal(date);
    }
  }, [date]);

  console.log(date);
  return (
    <div className='grid-date'>
      <DatePicker
        selected={date}
        onChange={(e) => setDate(e)}
        minDate={new Date()}
        selectsRange
        inline
        showDisabledMonthNavigation
      />
    </div>
  );
}
