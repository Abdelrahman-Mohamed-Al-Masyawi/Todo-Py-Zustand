import '../styles/showTodos.css';
export default function ShowAllTodos() {
  return (
    <div className='container-all-todos grid-todos'>
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </div>
  );
}

function Todo() {
  return (
    <div className='container-grid-todo '>
      <div className='title-todo'>Learn Javascript</div>
      <div className='mark-check'>
        <ImgMark src={'check.svg'} />
      </div>
      <div className='details-todo'>Master the language powering the modern web.</div>
      <div className='mark-edit'>
        <ImgMark src={'edit.svg'} />
      </div>
      <div className='start-date-todo'>
        <span>تاريخ البداية :</span>
        <span>07-07-2023</span>
      </div>

      <div className='mark-delete'>
        <ImgMark src={'Group 128.svg'} />
      </div>
    </div>
  );
}

function ImgMark({ src, onClick }) {
  return <img src={`/public/svg/${src}`} onClick={onClick} className='imgMark' />;
}
