import { ActionType } from "./action-types";

export const addTodo = (text: string) => {
  return {
    type: ActionType.ADD_TODO,
    id: Math.round(Date.now() + Math.random()),
    text,
  };
};

export const toggleTodo = (id: number) => {
  return {
    type: ActionType.TOGGLE_TODO,
    id,
  };
};

export const editTodo = (id: number, text: string) => {
  return {
    type: ActionType.EDIT_TODO,
    id,
    text,
  };
};

export const deleteTodo = (id: number) => {
  return {
    type: ActionType.DELETE_TODO,
    id,
  };
};
