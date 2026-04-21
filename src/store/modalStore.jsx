import { create } from 'zustand';

export const useModal = create((set) => ({
  modal: false,

  showModal: () =>
    set((state) => ({
      modal: (state.modal = true),
    })),

  closeModal: () =>
    set((state) => ({
      modal: (state.modal = false),
    })),
}));
