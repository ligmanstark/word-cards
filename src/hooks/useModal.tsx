import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { closeModal, openModal } from '../store/slices/modalSlice';

export const useModal = (id: string) => {
  const dispatch = useDispatch();
  const currentModal = useSelector(
    (state: RootState) => state.modalReducer.currentModal
  );
  const isOpen = currentModal === id;
  const close = () => dispatch(closeModal());
  const open = () => dispatch(openModal(id));
  return { isOpen, close, open };
};
