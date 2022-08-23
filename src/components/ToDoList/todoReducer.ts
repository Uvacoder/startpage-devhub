import { RootState } from '../../store';
import { ACTIONS, TodoActionType } from './todoActions';

type todoType = {
  text: string;
};

const initialState: todoType[] = [
  {
    text: 'TODO TEST 1'
  }
];

export default function todoReducer(
  state = initialState,
  action: TodoActionType
): todoType[] {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, { text: action.payload }];
    case ACTIONS.REMOVE_TODO:
      return state.filter(({ text }) => text !== action.payload);
    default:
      return state;
  }
}

export const selectTodos = (state: RootState) => state.todos;
