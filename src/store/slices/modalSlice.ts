import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface ModalState {
  currentModal: string | null;
}
const initialState: ModalState = {
  currentModal: null
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<string>) {
      state.currentModal = action.payload;
    },
    closeModal(state) {
      state.currentModal = null;
    }
  }
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
