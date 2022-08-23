export const ACTIONS = {
  ADD_TODO: 'todo/added',
  REMOVE_TODO: 'todo/removed'
};

export type TodoActionType = {
  type: string;
  payload: string;
};

export const addTodo = (text: string) => ({
  type: ACTIONS.ADD_TODO,
  payload: text
});

export const removeTodo = (text: string) => ({
  type: ACTIONS.REMOVE_TODO,
  payload: text
});
