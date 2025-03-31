import { useRef, useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState(["Go to school"]);
  const [editIndex, setEditIndex] = useState(null);
  const inputRef = useRef();

  const handleAdd = () => {
    const newTask = inputRef.current.value.trim();
    if (newTask === "") return; // Prevent empty input

    if (editIndex !== null) {
      // Editing an existing item
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = newTask;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      // Adding a new item
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }

    inputRef.current.value = ""; // Clear input field
  };

  const handleDelete = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  const handleEdit = (itemToEdit, indexOfItem) => {
    inputRef.current.value = itemToEdit; // Set input field value
    setEditIndex(indexOfItem); // Track the index being edited
  };

  return (
    <>
      <div>
        <h1>To-Do List</h1>
        <input type="text" ref={inputRef} required />
        <button type="button" onClick={handleAdd}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      <div>
        <ul>
          {tasks.map((item, index) => (
            <li key={index}>
              {item}
              <button type="button" onClick={() => handleDelete(index)}>
                Delete
              </button>
              <button type="button" onClick={() => handleEdit(item, index)}>
                Edit
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
