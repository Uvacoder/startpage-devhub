export type linkActionType<T> = { type: string; payload: T };

export const LINKS_ACTIONS = {
  ADD: 'links/added',
  REMOVE: 'links/removed'
};
export type linkObjectActionType = {
  link: string;
  text?: string;
  id?: string;
};

export const addLink = (
  link: linkObjectActionType
): linkActionType<linkObjectActionType> => ({
  type: LINKS_ACTIONS.ADD,
  payload: link
});

export const removeLink = (link: string): linkActionType<string> => ({
  type: LINKS_ACTIONS.REMOVE,
  payload: link
});
