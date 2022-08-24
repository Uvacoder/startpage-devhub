import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@store';
import axios from 'axios';
import { articleType } from './articlesReducer';

export const ARTICLES_ACTIONS = {
  ADD_ARTICLES: 'articles/add_articles',
  FETCH_BY_TAG: 'articles/fetch_by_tag'
};

export type articleActionType<T> = {
  type: string;
  payload: T;
};

export const fetchArticles = createAsyncThunk<
  articleType[],
  undefined,
  { state: RootState }
>(ARTICLES_ACTIONS.FETCH_BY_TAG, async (_, thunkApi) => {
  const { interests } = thunkApi.getState();
  let _articles: articleType[] = [];
  const interestsFetches = interests.map(async (interest) => {
    const _tag = interest.split(' ').join('-').toLocaleLowerCase();
    const { data } = await axios.get(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/tag/${_tag}`
    );
    return _articles.push(
      ...data.items.map((item: articleType) => ({
        ...item,
        category: interest
      }))
    );
  });
  await Promise.all(interestsFetches);
  return _articles;
});
