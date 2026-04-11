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
  const date = new Date();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  const fullDate = `${year}/${month}/${day}`;

  return <div className='grid-search-1'>{fullDate}</div>;
}
