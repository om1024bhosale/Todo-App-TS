import { configureStore } from "@reduxjs/toolkit";
import todoSlices from "./slices/todoSlices";
import { saveTodosToLocalStorage } from "../utils/localStorageUtils"; // ⬅️ Add this

export const store = configureStore({
  reducer: {
    todo: todoSlices,
  },
});

// ✅ Save todos to localStorage whenever state changes
store.subscribe(() => {
  const state = store.getState();
  saveTodosToLocalStorage(state.todo.todos);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
