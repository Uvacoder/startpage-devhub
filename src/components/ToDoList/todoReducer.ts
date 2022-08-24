import { RootState } from '@store';
import { TODO_ACTIONS, TodoActionType } from './todoActions';
import { v4 as uuidv4 } from 'uuid';

export type todoType = {
  id: string;
  text: string;
  completed: boolean;
};

const initialState: todoType[] = [
  { id: uuidv4(), text: 'My first todo👋', completed: false }
];

export default function todoReducer(
  state = initialState,
  action: TodoActionType
): todoType[] {
  switch (action.type) {
    case TODO_ACTIONS.ADD:
      return [
        ...state,
        {
          id: uuidv4(),
          text: action.payload,
          completed: false
        }
      ];
    case TODO_ACTIONS.REMOVE:
      return state.filter(({ id }) => id !== action.payload);
    default:
      return state;
  }
}

export const selectTodos = (state: RootState) => state.todos;
