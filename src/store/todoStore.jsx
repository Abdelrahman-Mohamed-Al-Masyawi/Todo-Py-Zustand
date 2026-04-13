import { create } from 'zustand';

const todos = [
  {
    id: 1,
    title: 'study english',
    details: 'l love english so i learn english every day at 17:00 pm ',
    date: '2026/4/12',
    complete: true,
  },
];

export const useStore = create((set) => ({
  todos: todos,
  addTod:(newTodo)=>set((state)=>{
    todos:state.todos.push(newTodo)
  })
}));
