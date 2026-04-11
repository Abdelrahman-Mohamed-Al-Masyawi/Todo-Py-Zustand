import React from 'react';
import '../styles/home.css';
import HelloUser from '../ui/HelloUser';
import FormAddTodo from '../ui/FormAddTodo';
import FilterTodo from '../ui/FilterTodo';
import ContainerShowTodoAndSelectDate from '../ui/containerShowTodoAndSelectDate';
import AppPagination from '../ui/pagination';

export default function Home() {
  return (
    <div className='container-home'>
      <HelloUser />
      <div className='content'>
        <FormAddTodo />
        <FilterTodo />
        <ContainerShowTodoAndSelectDate />
        <AppPagination />
      </div>
    </div>
  );
}
