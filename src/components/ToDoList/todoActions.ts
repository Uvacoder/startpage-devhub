export const TODO_ACTIONS = {
  ADD: 'todo/added',
  REMOVE: 'todo/removed'
};

export type TodoActionType = {
  type: string;
  payload: string;
};

export const addTodo = (text: string) => ({
  type: TODO_ACTIONS.ADD,
  payload: text
});

export const removeTodo = (id: string) => ({
  type: TODO_ACTIONS.REMOVE,
  payload: id
});
