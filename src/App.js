import "./App.css";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Modal from "./Modal/Modal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditTodo from "./components/EditTodo";
import { closeEditTodoModal } from "./stores/modal";

function App() {
  const [showAddTodoModal, setShowAddTodoModal] = useState(false);
  const dispatch = useDispatch();

  const openAddTodoModal = () => setShowAddTodoModal(true);
  const closeAddTodoModal = () => setShowAddTodoModal(false);

  const closeEditTodoModalHandle = () => dispatch(closeEditTodoModal());

  const showEditTodoModal = useSelector((state) =>  state.modal.showEditTodoModal);
  const editingTodoId = useSelector((state) => state.modal.editingTodoId);
  const editingTodo = useSelector((state) => state.todo.todos.find(todo => todo.Id === editingTodoId));
  

  return (
    <div className="App">
      <div className="add-user-button-container">
        <button onClick={openAddTodoModal}>Add Todo</button>
      </div>
      <Header />

      <Modal showModal={showAddTodoModal} closeModal={closeAddTodoModal}>
        <AddTodo closeModal={closeAddTodoModal}></AddTodo>
      </Modal>

      <Modal showModal={showEditTodoModal} closeModal={closeEditTodoModalHandle}>
        <EditTodo todo={editingTodo} closeModal={closeEditTodoModalHandle} />
      </Modal>

      <TodoItems />
    </div>
  );
}

export default App;
