import { RootState } from '@store';
import { articleActionType } from './articlesActions';

export type articleType = {
  title: string;
  pubDate: string;
  link: string;
  author: string;
};

type statusTypes = 'idle' | 'loading' | 'success' | 'error';

const initialState: {
  data: articleType[];
  status: statusTypes;
  error: string | null;
} = {
  status: 'idle',
  error: null,
  data: []
};

export default function articlesReducer(
  state: {
    data: articleType[];
    status: statusTypes;
    error: string | null;
  } = initialState,
  action: articleActionType<string>
) {
  switch (action.type) {
    default:
      return state;
  }
}

export const selectArticles = (state: RootState) => state.articles.data;
export const selectArticlesFetchStatus = (state: RootState) =>
  state.articles.status;
