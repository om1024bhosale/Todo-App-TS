// utils/localStorageUtils.ts

import { Todo } from "../src/interfaces";


const LOCAL_STORAGE_KEY = "todos";

export const loadTodosFromLocalStorage = (): Todo[] => {
  try {
    const serialized = localStorage.getItem(LOCAL_STORAGE_KEY);
    return serialized ? JSON.parse(serialized) : [];
  } catch (err) {
    console.error("Error loading todos from localStorage", err);
    return [];
  }
};

export const saveTodosToLocalStorage = (todos: Todo[]) => {
  try {
    const serialized = JSON.stringify(todos);
    localStorage.setItem(LOCAL_STORAGE_KEY, serialized);
  } catch (err) {
    console.error("Error saving todos to localStorage", err);
  }
};
