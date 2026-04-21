import { create } from 'zustand';

const todos = [
  {
    id: 1,
    title: 'study english',
    details: 'l love english so i learn english every day at 17:00 pm ',
    date: '2026/4/12',
    complete: false,
  },
];

export const useStore = create((set) => ({
  // STATE
  todos: todos,
  date: null,
  FilterSearch: '',
  FilterCategory: '',

  //* FUNCTION Add
  addTodo: (newTodo) =>
    set((state) => ({
      todos: [...state.todos, newTodo],
    })),

  //! function delete
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((it) => it.id !== id),
    })),

  // ? function edit status todo
  editStatusTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((el) => (el.id === id ? { ...el, complete: !el.complete } : el)),
    })),

  // * change value date from state
  setDate: (date) =>
    set((state) => ({
      date: date,
    })),

  // * change value date from state to filter
  changeValueFilterCategory: (newValue) => set({ FilterSearch: newValue }),
  changeValueFilterSearch: (newValue) => set({ FilterCategory: newValue }),
}));
