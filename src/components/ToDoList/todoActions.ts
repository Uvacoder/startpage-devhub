export const ACTIONS = {
  ADD_TODO: 'todo/added',
  REMOVE_TODO: 'todo/removed',
  COMPLETE_TODO: 'todo/completed'
};

export type TodoActionType = {
  type: string;
  payload: string;
};

export const addTodo = (text: string) => ({
  type: ACTIONS.ADD_TODO,
  payload: text
});

export const removeTodo = (id: string) => ({
  type: ACTIONS.REMOVE_TODO,
  payload: id
});

export const completeTodo = (id: string) => ({
  type: ACTIONS.COMPLETE_TODO,
  payload: id
});
