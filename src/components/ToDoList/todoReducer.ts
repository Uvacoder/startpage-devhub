import { RootState } from '../../store';
import { ACTIONS, TodoActionType } from './todoActions';
import { v4 as uuidv4 } from 'uuid';

type todoType = {
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
    case ACTIONS.ADD_TODO:
      return [
        ...state,
        {
          id: uuidv4(),
          text: action.payload,
          completed: false
        }
      ];
    case ACTIONS.COMPLETE_TODO:
      return state.map((todo) => ({
        ...todo,
        completed: todo.id === action.payload ? !todo.completed : todo.completed
      }));
    case ACTIONS.REMOVE_TODO:
      return state.filter(({ id }) => id !== action.payload);
    default:
      return state;
  }
}

export const selectTodos = (state: RootState) => state.todos;
