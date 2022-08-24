import { RootState } from '@store';
import { TODO_ACTIONS, TodoActionType } from './todoActions';
import { v4 as uuidv4 } from 'uuid';

export type todoType = {
  id: string;
  text: string;
  completed: boolean;
  isImportant: boolean;
};

const initialState: todoType[] = [
  {
    id: uuidv4(),
    text: 'My first todo👋',
    completed: false,
    isImportant: false
  }
];

export default function todoReducer(
  state = initialState,
  action: TodoActionType<{ text: string; isImportant: boolean } & string>
): todoType[] {
  switch (action.type) {
    case TODO_ACTIONS.ADD:
      return [
        ...state,
        {
          id: uuidv4(),
          text: action.payload.text,
          isImportant: action.payload.isImportant,
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
