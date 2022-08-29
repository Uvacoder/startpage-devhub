export const TODO_ACTIONS = {
  ADD: 'todo/added',
  REMOVE: 'todo/removed'
};

export type todoActionType<T> = {
  type: string;
  payload: T;
};

export const addTodo = (todo: { text: string; isImportant: boolean }) => ({
  type: TODO_ACTIONS.ADD,
  payload: todo
});

export const removeTodo = (id: string) => ({
  type: TODO_ACTIONS.REMOVE,
  payload: id
});
