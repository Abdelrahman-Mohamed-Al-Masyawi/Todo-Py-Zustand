import { getDatToday } from "../functions/getDatToday";
import "../styles/FilterTodo.css"
export default function FilterTodo() {
  const date = new Date();
  return (
    <div className='container-FilterTodo'>
      <ShowDate />
      <select name='' id='' className='container-select grid-search-2'>
        <option value=''>By category</option>
        <option value=''>1</option>
        <option value=''>1</option>
      </select>

      <div className='container-search grid-search-3'>
        <input type='search' name='' id='' />
        <img className='icon-search' src='/public/svg/search.svg' alt='' />
      </div>
    </div>
  );
}

function ShowDate() {
  return <div className='grid-search-1'>{getDatToday()}</div>;
}
