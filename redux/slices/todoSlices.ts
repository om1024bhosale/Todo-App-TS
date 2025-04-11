import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "@/interfaces";
import { loadTodosFromLocalStorage } from "../../utils/localStorageUtils"; // adjust path


const todoSlices = createSlice({
  name: "todo",
  initialState: {
    todos: loadTodosFromLocalStorage(), // ✅ Load from localStorage
  },
  reducers: {
    addTodo: (state, action: { payload: Todo }) => {
      state.todos.push(action.payload);
    },
    updateTodo: (state, action: { payload: Todo }) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
      state.todos[index] = { ...state.todos[index], ...action.payload };
    },
    deleteTodo: (state, action: { payload: string }) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    completeTodo: (state, action: { payload: string }) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      const [completed] = state.todos.splice(index, 1);
      completed.completed = true;
      state.todos.push(completed);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, completeTodo } = todoSlices.actions;
export default todoSlices.reducer;
