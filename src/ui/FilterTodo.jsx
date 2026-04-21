import { useEffect, useState } from 'react';
import { getDatToday } from '../functions/getDatToday';
import '../styles/FilterTodo.css';
import { useStore } from '../store/todoStore';

export default function FilterTodo() {
  // * state
  const [filerByCategory, setFilterByCategory] = useState('');
  const [filterBySearch, setFilterBySearch] = useState('');
  const changeValueFilterCategory = useStore((state) => state.changeValueFilterCategory);
  const changeValueFilterSearch = useStore((state) => state.changeValueFilterSearch);

  //? send value filter to zustand function into store
  useEffect(() => {
    changeValueFilterCategory(filerByCategory);
    changeValueFilterSearch(filterBySearch);
  }, [filerByCategory, filterBySearch]);

  // * date
  const date = new Date();

  // * ui
  return (
    <div className='container-FilterTodo'>
      <ShowDate />
      <select
        onChange={(e) => setFilterByCategory(e.target.value)}
        value={filerByCategory}
        name=''
        id=''
        className='container-select grid-search-2'>
        <option value=''>By category</option>
        <option value='complete'>complete</option>
        <option value='not complete'>not complete</option>
      </select>

      <div className='container-search grid-search-3'>
        <input value={filterBySearch} onChange={(e) => setFilterBySearch(e.target.value)} type='search' name='' id='' />
        <img className='icon-search' src='/public/svg/search.svg' alt='' />
      </div>
    </div>
  );
}

function ShowDate() {
  return <div className='grid-search-1'>{getDatToday()}</div>;
}
