import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showEditTodoModal: false,
  editingTodoId: null
};

const modals = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showEditTodoModal: (state, action) => {
      state.editingTodoId = action.payload;
      state.showEditTodoModal = true;
    },
    closeEditTodoModal: (state) => {
      state.editingTodoId = null;
      state.showEditTodoModal = false;
    }
  },
});

export const { showEditTodoModal, closeEditTodoModal } = modals.actions;
export default modals.reducer;
