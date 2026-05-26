import { createContext, useContext } from 'react';

interface ModalContextType {
  openModal: () => void;
}

export const ModalContext = createContext<ModalContextType>({ openModal: () => {} });

export function useModal() {
  return useContext(ModalContext);
}
