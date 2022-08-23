import { RootState } from '../../store';
import {
  linkActionType,
  linkObjectActionType,
  LINKS_ACTIONS
} from './linksActions';
import { v4 as uuv4 } from 'uuid';

export type linkType = {
  id: string;
  link: string;
  iconURL: string;
  text?: string;
};

const initialState: linkType[] = [
  {
    id: uuv4(),
    link: 'https://github.com/ilyasudakov',
    text: 'Github',
    iconURL: 'https://github.com/favicon.ico'
  }
];

export default function linksReducer(
  state = initialState,
  action: linkActionType<linkObjectActionType>
): linkType[] {
  switch (action.type) {
    case LINKS_ACTIONS.ADD:
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
      return state.filter((link) => link.id !== action.payload.id);
    default:
      return state;
  }
}

export const selectLinks = (state: RootState) => state.links;
