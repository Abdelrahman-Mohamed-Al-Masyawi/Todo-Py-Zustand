import React from 'react';
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

function SelectDate() {
  const [date, setDate] = useState(new Date());
  const onChange = (dates) => {};
  return (
    <div className='grid-date'>
      <DatePicker
        selected={date}
        onChange={onChange}
        minDate={new Date()}
        selectsRange
        inline
        showDisabledMonthNavigation
      />
    </div>
  );
}
