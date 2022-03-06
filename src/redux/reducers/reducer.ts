import { iTodos } from "../../types/types";
import { ActionType } from "../actions/action-types";

const todosReducer = (state = [], action: any) => {
  switch (action.type) {
    case ActionType.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case ActionType.TOGGLE_TODO:
      return state.map((todo: iTodos) =>
        +todo.id === +action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case ActionType.EDIT_TODO:
      return state.map((todo: iTodos) =>
        +todo.id === +action.id ? { ...todo, text: action.text } : todo
      );
    case ActionType.DELETE_TODO:
      return state.filter((todo: iTodos) => +todo.id !== +action.id);
    default:
      return state;
  }
};

export default todosReducer;
