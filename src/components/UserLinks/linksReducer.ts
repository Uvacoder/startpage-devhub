import { RootState } from '@store';
import { LINKS_ACTIONS } from './linksActions';

import { v4 as uuv4 } from 'uuid';
import { AnyAction } from '@reduxjs/toolkit';

export type linkType = {
  id: string;
  link: string;
  iconURL: string;
  text?: string;
};

const initialState: linkType[] = [
  {
    id: uuv4(),
    link: 'https://github.com/ilyasudakov/dev-hub',
    text: 'Source',
    iconURL: 'https://github.com/favicon.ico'
  }
];

export default function linksReducer(
  state = initialState,
  action: AnyAction
): linkType[] {
  switch (action.type) {
    case LINKS_ACTIONS.ADD:
      if (action.payload)
        return [
          ...state,
          {
            id: uuv4(),
            link: action.payload.link,
            text: action.payload.text,
            iconURL: `${new URL(action.payload.link).origin}/favicon.ico`
          }
        ];
    case LINKS_ACTIONS.REMOVE:
      return state.filter((link) => link.id !== action.payload);
    default:
      return state;
  }
}

export const selectLinks = (state: RootState) => state.links;
