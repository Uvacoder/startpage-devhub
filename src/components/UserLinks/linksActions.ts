export type linkType = {
  id: string;
  link: string;
  iconURL: string;
  text?: string;
};
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
