import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '@store';
import { ARTICLES_ACTIONS } from './articlesActions';

export type articleType = {
  title: string;
  pubDate: string;
  link: string;
  author: string;
  description: string;
  category: string;
};

type statusTypes = 'idle' | 'loading' | 'success' | 'error';

type ArticlesStateType = {
  data: articleType[];
  status: statusTypes;
  error: string | null;
};

const initialState: ArticlesStateType = {
  status: 'idle',
  error: null,
  data: []
};

export default function articlesReducer(
  state: ArticlesStateType = initialState,
  action: AnyAction
): ArticlesStateType {
  switch (action.type) {
    case `${ARTICLES_ACTIONS.FETCH_BY_TAG}/pending`:
      return { ...state, status: 'loading' };
    case `${ARTICLES_ACTIONS.FETCH_BY_TAG}/fulfilled`:
      return {
        ...state,
        data: [...action.payload],
        status: 'success'
      };
    case `${ARTICLES_ACTIONS.FETCH_BY_TAG}/rejected`:
      return { ...state, status: 'error', error: action.payload };
    default:
      return state;
  }
}

export const selectArticles = (state: RootState) => state.articles.data;
export const selectArticlesFetchStatus = (state: RootState) =>
  state.articles.status;
